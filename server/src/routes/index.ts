import { Router } from "express";
import  User  from "./Cadastro"

const routes = Router();

routes.use("/cadastro", User);

routes.use("/login", User);

export default routes;
