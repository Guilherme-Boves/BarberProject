import prismaClient from "../../prisma"

class ListServicosService {

    async execute(){
        const servicos = await prismaClient.servico.findMany({    
            orderBy: {
                name: "asc"
            }
        })

        return servicos
    }

}

export { ListServicosService }