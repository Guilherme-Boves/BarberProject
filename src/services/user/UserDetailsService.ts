import prismaClient from "../../prisma"

class UserDetailsService {
    async execute(user_id: string) {

        const user = await prismaClient.admin.findFirst({
            where:{
                id: user_id
            },
            select: {
                id: true,
                email: true,
                name: true
            }
        })

        return user;
    }
}

export { UserDetailsService }