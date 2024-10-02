import search from "../controllers/SearchController";
import { Router } from "express";
import {authenticateToken} from  '../middlewares/jwt'
const routes = Router();

routes.post("/foods", search.buscarAlimentos);
routes.post("/category", search.obterCategoria);
routes.get("/product",authenticateToken, search.buscarProduto);

export default routes;




