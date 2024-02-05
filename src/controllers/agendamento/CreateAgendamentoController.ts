import { Request, Response } from "express";
import { CreateAgendamentoService } from "../../services/agendamento/CreateAgendamentoService";

class CreateAgendamentoController {

    async handle(req: Request, res: Response) {

        const {barberId, clientId, servicos, date} = req.body;
        
        const createAgendamentoService = new CreateAgendamentoService();

        const agendamento = await createAgendamentoService.execute({
            barberId, 
            clientId, 
            servicos,
            date
        });

        return res.status(201).json(agendamento);

    }
}

export { CreateAgendamentoController }