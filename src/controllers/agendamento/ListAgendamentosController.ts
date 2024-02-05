import { Request, Response } from "express";
import { ListAgendamentosService } from "../../services/agendamento/ListAgendamentosService";

class ListAgendamentosController {
    async handle(req: Request, res: Response) {

        const listAgendamentosService = new ListAgendamentosService();

        const agendamentos = await listAgendamentosService.execute();

        return res.status(200).json(agendamentos);
    }
}

export { ListAgendamentosController }