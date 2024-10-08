import { Router,Request,Response } from "express";
import user from "./User";
import Foods from './Taco';
import search from './Search';
import UserProduct from "./Interaction";
import UserTaco from "./Interaction";
const routes = Router();



routes.use("/user", user);

routes.use("/foods", Foods);

routes.use("/search", search);

routes.use("/consume/taco", UserTaco);

routes.use("/consume/product", UserProduct);

routes.use((req:Request, res:Response) => {res.status(401).json({"err":"rota desconhecida"})})


export default routes;