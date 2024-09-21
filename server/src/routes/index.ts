import { Router,Request,Response } from "express";
import user from "./User";

const routes = Router();



routes.use("/user", user);

routes.use((req:Request, res:Response) => {res.status(401).json({"err":"rota desocnhecida"})})


export default routes;