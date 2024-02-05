import { Request, Response } from "express";
import { CreateServicoService } from "../../services/servico/CreateServicoService";

class CreateServicoController {
    async handle(req: Request, res: Response) {

        const { name, price } = req.body;

        const createServicoService = new CreateServicoService();

        const servico = await createServicoService.execute({
            name,
            price
        })

        return res.status(201).json(servico);
    }
}

export { CreateServicoController }