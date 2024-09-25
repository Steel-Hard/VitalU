// toda interações favoritos e consumo

import { Router } from "express";
import UserProduct from "../controllers/UserConsumptionProduct";
import UserTaco from "../controllers/UserConsumptionTaco";

const routes = Router();


routes.post("/", UserTaco.salvarConsumoTaco );

routes.post("/", UserProduct.salvarConsumoProduto );



export default routes;