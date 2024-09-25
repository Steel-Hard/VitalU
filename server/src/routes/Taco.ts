import { Router } from "express";
import Foods from '../controllers/FoodsController'

const routes = Router();



routes.post("/cadastro",Foods.cadastrarProduto);


export default routes;
