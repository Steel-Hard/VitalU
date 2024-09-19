import { Router } from 'express';
import User from '../controllers/User';

const routes = Router();

routes.post('/', User.Login);

export default routes;