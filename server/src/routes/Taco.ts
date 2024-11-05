import { Router } from "express";
import {authenticateToken} from   '../middlewares/jwt'
import Foods from '../controllers/FoodsController'
import validateNutritionalData from "../middlewares/foods";


const routes = Router();



routes.post("/cadastro",authenticateToken ,validateNutritionalData, Foods.cadastrarProduto);


export default routes;
