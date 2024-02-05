import prismaClient from "../../prisma"

interface CreateAgendamentoRequest {
    barberId: string,    
    clientId: string,
    servicos: {
        servicosId: [
            {id: string}
        ]
    },
    date: Date
}

class CreateAgendamentoService {
    async execute({barberId, clientId, servicos, date}: CreateAgendamentoRequest){    
        
        if (!barberId) throw new Error("Barbeiro não encontrado");
        if (!clientId) throw new Error("Cliente não encontrado");
        if (!servicos) throw new Error("Serviço não encontrado");
        if (!date) throw new Error("Data incorreta");
        
        let newDate = new Date(date)
        newDate.setHours(newDate.getHours() - 3);

        const agendamentoAlreadyExists = await prismaClient.agendamento.findFirst({
            where: {
                barberId: barberId,
                AND: {
                    date: newDate
                }
            }
        })
        if (agendamentoAlreadyExists) throw new Error("Horário já preenchido para este barbeiro");

        const agendamentoClienteAlreadyExists = await prismaClient.agendamento.findFirst({
            where: {
                clientId: clientId,
                AND: {
                    date: newDate
                }
            }
        })
        if (agendamentoClienteAlreadyExists) throw new Error("O cliente já possui uma hora cadastrada neste horário");
        
        
        return await prismaClient.$transaction(async (trx) => {
            const agdm = await trx.agendamento.create({
                data: {
                    barberId: barberId,
                    clientId: clientId,
                    date: newDate
                }
            })

            const servicosComAgendamento = servicos.servicosId.map((servico) => {
                return {
                    agendamentoId: agdm.id,
                    servicoId: servico.id,
                }
            })

            // servicos.servicosId.map(async (servico) => {
            //     const servicoClienteAlreadyExists = await prismaClient.agendamento_Servico.findFirst({
            //         where: {
            //             agendamentoId: agdm.id,
            //             AND: {
            //                 servicoId: servico.id
            //             }
            //         }
            //     })
            //     if (servicoClienteAlreadyExists) throw new Error("O cliente já possui este serviço cadastrado nesse horário");
            // });

            const agdmServicos = await trx.agendamento_Servico.createMany({
                data: servicosComAgendamento,
            });

            return agdmServicos
            
        })
    }
}

export { CreateAgendamentoService }