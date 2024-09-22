import { Router } from "express";
import Foods from '../controllers/FoodsController'

const routes = Router();



routes.post("/buscar",Foods.buscarAlimentos);

routes.post("/categoria",Foods.obterCategoria);


export default routes;
