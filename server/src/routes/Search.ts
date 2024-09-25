import search from "../controllers/SearchController";
import { Router } from "express";

const routes = Router();

routes.post("/foods", search.buscarAlimentos);
routes.post("/category", search.obterCategoria);

export default routes;




