import { Router } from "express";
import User from "./User";
const routes = Router();



routes.post("/cadastro", User.Cadastrar_Novo_Usuario);
routes.post("/login", User.Login);



export {routes};