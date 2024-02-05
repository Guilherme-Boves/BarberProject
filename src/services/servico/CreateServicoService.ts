import prismaClient from "../../prisma"

interface CreateServicoRequest {
    name: string,
    price: string
}

class CreateServicoService {
 
    async execute({name, price}: CreateServicoRequest) {

        if (!name) throw new Error("Nome incorreto");
        if (!price) throw new Error("Preço incorreto");

        const servicoAlreadyExists = await prismaClient.servico.findFirst({
            where: {
                name: name
            }
        })

        if (servicoAlreadyExists) throw new Error("Serviço já cadastrado");

        const servico = await prismaClient.servico.create({
            data: {
                name: name,
                price: parseFloat(price.replace(",", "."))
            },
            select: {
                id: true,
                name: true,
                price: true
            }
        })

        return servico
    }
}

export { CreateServicoService }