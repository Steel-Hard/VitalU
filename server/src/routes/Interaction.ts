// toda interações favoritos e consumo

import { Router } from "express";
import {authenticateToken} from  '../middlewares/jwt'
import UserConsumption from "../controllers/UserConsumption";
const routes = Router();


routes.post("/taco",authenticateToken, UserConsumption.salvarConsumoTaco );

routes.delete("/taco/drop", authenticateToken, UserConsumption.deletarConsumoTaco);

routes.post("/product",authenticateToken, UserConsumption.salvarConsumoProduto );

routes.delete("/product/drop",authenticateToken, UserConsumption.deletarConsumoProduto);



export default routes;