import { Router } from 'express';
import user  from '../controllers/UserController';
const routes = Router();

routes.post('/cadastro', user.Cadastrar_Novo_Usuario);
routes.post('/login', user.Login);

export default routes;
