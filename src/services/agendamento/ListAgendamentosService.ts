import prismaClient from "../../prisma"

class ListAgendamentosService {
    async execute(){

        const agendamentos = await prismaClient.agendamento_Servico.findMany({                 
            include: {
                agendamento: {
                    select: {
                        id: true,
                        barberId: true,
                        clientId: true,
                        date: true,
                    },                    
                },                 
            },
            orderBy: {
                agendamento: {
                    date: "asc"
                }
            }
        })

        return agendamentos
    }
}

export { ListAgendamentosService }