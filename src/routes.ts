import { Router, Request, Response } from "express";

// Middlewares
import { isAuthenticated } from "./middlewares/isAuthenticated";

// Controllers
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateAdminController } from "./controllers/user/CreateAdminController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { UserDetailsController } from "./controllers/user/UserDetailsController";
import { CreateServicoController } from "./controllers/servico/CreateServicoController";
import { CreateAgendamentoController } from "./controllers/agendamento/CreateAgendamentoController";
import { ListAgendamentosController } from "./controllers/agendamento/ListAgendamentosController";
import { ListServicosController } from "./controllers/servico/ListServicosController";
import { ListUsersController } from "./controllers/user/ListUsersController";


const router = Router();

router.get("/", (req: Request, res: Response) => {
    return res.json({ok: true})
})

// ----------------- User

//Cadastra novos adminstradores
router.post("/admins", new CreateAdminController().handle);
// Cadastra novos usuários/clientes
router.post("/users", isAuthenticated, new CreateUserController().handle);
// Lista todos os usuários/Clientes
router.get("/users", isAuthenticated, new ListUsersController().handle);
// Realiza o login. Gera um novo token e valida se as credenciais estão corretas.
router.post("/session", new AuthUserController().handle);
// Busca detalhes do usuário como id, nome e email
router.get("/me", isAuthenticated, new UserDetailsController().handle);

// ----------------- Serviços
// Cadastra novos serviços
router.post("/servicos", isAuthenticated, new CreateServicoController().handle);
// Lista todos os serviços
router.get("/servicos", isAuthenticated, new ListServicosController().handle);

// ----------------- Agendamento
// Cadastra novos agendamentos
router.post("/agendamentos", isAuthenticated, new CreateAgendamentoController().handle);
// Lista todos os agendamentos
router.get("/agendamentos", isAuthenticated, new ListAgendamentosController().handle);

export { router };