import  pool  from '../bd';
import dotenv from 'dotenv';
import { Request, Response } from 'express';

dotenv.config();

export default async function Cadastrar_Novo_Usuario(req: Request, res: Response): Promise<object> {
    const { mail, passwd } = req.body;

    if (!mail || !passwd) {
        return res.status(400).json({ error: 'Forneça os dados' });
    }

    try {
        const tb_Usr = process.env.DB_T_USR;
        const clEmail = process.env.DB_T_USR_M;
        const clPwd = process.env.DB_T_USR_P;

        await pool.query(
            `INSERT INTO ${tb_Usr} (${clEmail}, ${clPwd}) VALUES ($1, $2)`,
            [mail, passwd]
        );

        return res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
    }
}
