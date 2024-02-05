import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response) {

        const { name, phone } = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            name,
            phone
        })

        return res.status(201).json(user)
    }
}

export { CreateUserController }