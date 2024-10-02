import { Router } from "express";
import {authenticateToken} from   '../middlewares/jwt'
import Foods from '../controllers/FoodsController'


const routes = Router();



routes.post("/cadastro",authenticateToken ,Foods.cadastrarProduto);


export default routes;
