import prismaClient from "../../prisma"

class ListUsersService {
    async execute(){
        const users = await prismaClient.user.findMany({    
            orderBy: {
                name: "asc"
            }
        })

        return users
    }
}

export { ListUsersService }