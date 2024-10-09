// toda interações favoritos e consumo

import { Router } from "express";
import {authenticateToken} from  '../middlewares/jwt'
import UserProduct from "../controllers/UserConsumptionProduct";
import UserTaco from "../controllers/UserConsumptionTaco";

const routes = Router();


routes.post("/",authenticateToken, UserTaco.salvarConsumoTaco );

routes.post("/user",authenticateToken, UserProduct.salvarConsumoProduto );



export default routes;