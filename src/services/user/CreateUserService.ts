import prismaClient from "../../prisma"

interface CreateUserRequest {
    name: string,
    phone: string
}

class CreateUserService {
    async execute({name, phone}: CreateUserRequest){

        if (!name) throw new Error("Nome incorreto");

        const phoneAlreadyExists = await prismaClient.user.findFirst({
            where:{
                phone: phone
            }
        })

        if (phoneAlreadyExists) throw new Error("Número de telefone já cadastrado");

        const user = await prismaClient.user.create({
            data: {
                name: name,
                phone: phone
            }
        })

        return user;
    }
}

export { CreateUserService }