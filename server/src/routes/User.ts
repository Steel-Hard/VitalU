import { Router } from 'express';
import user from '../controllers/UserController';
import { authenticateToken } from '../middlewares/jwt'
const routes = Router();

routes.post('/cadastro', user.Cadastrar_Novo_Usuario);
routes.post('/login', user.Login);
routes.post('/dados', authenticateToken, user.determinarPerfil);
routes.get("/obter", authenticateToken, user.obterDados);
routes.get("/obter/consumo", authenticateToken, user.obterConsumo);
routes.get("/obter/consumo/:data", authenticateToken, user.obterConsumoData);

export default routes;
