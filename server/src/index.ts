import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import routes  from "./routes";
import { errorHandler } from "./middlewares/error";
import helmet from 'helmet';



// Usar Helmet para segurança

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();


//proteje contra ataques
app.use(helmet());


//limitador retirado devido a bloquear interação do usuario

app.use(express.json());

//aceita requisição de outras origens
app.use(cors());

app.use(routes);

//evita queda do servidor
app.use(errorHandler);

app.listen(PORT, () => {
    console.log("Rodando na porta ", PORT)
});


export default app;