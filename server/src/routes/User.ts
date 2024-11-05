import { Router } from 'express';
import user from '../controllers/UserController';
import { authenticateToken } from '../middlewares/jwt'
import { validateCad,validateDadosUser,validateLogin } from '../middlewares/user';
const routes = Router();

routes.post('/cadastro',validateCad, user.Cadastrar_Novo_Usuario);
routes.post('/login',validateLogin, user.Login);
routes.post('/dados', validateDadosUser, authenticateToken, user.determinarPerfil);
routes.get("/obter", authenticateToken, user.obterDados);
routes.get("/obter/consumo/:data", authenticateToken, user.obterConsumo);


export default routes;
