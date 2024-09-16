import pool from '../bd';
import dotenv from 'dotenv';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

dotenv.config();

const saltRounds = parseInt(process.env.SRounds as string);
const jwtSecret = process.env.JWT_SECRET || 'default-secret';

class User{

    public async Cadastrar_Novo_Usuario(req: Request, res: Response): Promise<Object> {
    const { mail, passwd } = req.body;

    if (!mail || !passwd) {
        return res.status(400).json({ error: 'Forneça os dados' });
    }

    try {
        const clUsr = process.env.DB_T_USR;
        const clEmail = process.env.DB_T_USR_M;
        const clPwd = process.env.DB_T_USR_P;

        // Implementação bcrypt
        const hashedPassword = await bcrypt.hash(passwd, saltRounds);

        await pool.query(
            `INSERT INTO ${clUsr} (${clEmail}, ${clPwd}) VALUES ($1, $2)`,
            [mail, hashedPassword]
        );

        return res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
    }

}


    public async Login(req: Request, res: Response): Promise<Object> {
    const { mail, passwd } = req.body;

    if (!mail || !passwd) {
        return res.status(400).json({ error: 'E-mail e senha são obrigatórios' });
    }

    try {
        const clUsr = process.env.DB_T_USR;
        const clEmail = process.env.DB_T_USR_M;
        const clPwd = process.env.DB_T_USR_P as string;

        const result = await pool.query(
            `SELECT ${clPwd} FROM ${clUsr} WHERE ${clEmail} = $1`,
            [mail]
        );

        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        const storedHashedPassword = result.rows[0][clPwd];
        const match = await bcrypt.compare(passwd, storedHashedPassword);

        if (match) {
            // Gerar o token
            const token = jwt.sign({ email: mail }, jwtSecret, { expiresIn: '1h' });

            return res.status(200).json({ message: 'Login bem-sucedido', token });
        } else {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        return res.status(500).json({ error: 'Erro ao fazer login' });
    }
}
};

export default new User;