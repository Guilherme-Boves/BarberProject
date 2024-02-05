import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface CreateAdminRequest {
    name: string,
    email: string,
    password: string;
}

class CreateAdminService {
    async execute({name, email, password}: CreateAdminRequest) {

        if (!name) throw new Error("Nome incorreto");
        if (!email) throw new Error("Email incorreto");
        if (!password) throw new Error("Senha incorreta");

        const userAlreadyExists = await prismaClient.admin.findFirst({
            where: {
                email: email
            }
        });

        if(userAlreadyExists) throw new Error("Usuário já cadastrado");

        const passwordHash = await hash(password, 8);
        
        const user = await prismaClient.admin.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return user;

    }
}

export { CreateAdminService }