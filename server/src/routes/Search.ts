import search from "../controllers/SearchController";
import { Router } from "express";
import {authenticateToken} from  '../middlewares/jwt'
import { validateNumber,validateQuery } from "../middlewares/search";
const routes = Router();

routes.post("/foods",authenticateToken,validateQuery, search.buscarAlimentos);
routes.post("/category",authenticateToken,validateNumber, search.obterCategoria);
routes.get("/product",authenticateToken, search.buscarProduto);

export default routes;




