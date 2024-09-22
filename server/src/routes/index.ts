import { Router,Request,Response } from "express";
import user from "./User";
import Foods from './Taco'
const routes = Router();



routes.use("/user", user);

routes.use("/foods", Foods);

routes.use((req:Request, res:Response) => {res.status(401).json({"err":"rota desconhecida"})})


export default routes;