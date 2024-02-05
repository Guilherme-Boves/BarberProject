import { Request, Response } from "express";
import { ListServicosService } from "../../services/servico/ListServicosService";

class ListServicosController {
    async handle(req: Request, res: Response) {

        const listServicosService = new ListServicosService();

        const servicos = await listServicosService.execute();

        return res.status(200).json(servicos);
    }
}

export { ListServicosController }