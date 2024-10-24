import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import routes  from "./routes";
import rateLimit from 'express-rate-limit';
import { errorHandler } from "./middlewares/error";
import helmet from 'helmet';



// Usar Helmet para segurança

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();


//proteje contra ataques
app.use(helmet());

//bloqueia ips
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // Limitar cada IP a 100 requisições por janela
});

app.use(limiter);



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