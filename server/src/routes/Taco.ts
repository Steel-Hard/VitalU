import { Router } from "express";
import Foods from '../controllers/FoodsController'

const routes = Router();



routes.post("/buscar",Foods.buscarAlimentos);

routes.post("/categoria",Foods.obterCategoria);

routes.post("/cadastro",Foods.cadastrarProduto);


export default routes;
