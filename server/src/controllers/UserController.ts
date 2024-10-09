import pool from '../bd';
import dotenv from 'dotenv';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserType from '../types/user';

dotenv.config();

const saltRounds = parseInt(process.env.SRounds as string);
const jwtSecret = process.env.JWT_SECRET || 'default-secret';

class User {

    public async Cadastrar_Novo_Usuario(req: Request, res: Response): Promise<Response> {
        const { mail, passwd, nome } = req.body;
        const clUsr = process.env.DB_T_USR;
        const clEmail = process.env.DB_T_USR_M;
        const clPwd = process.env.DB_T_USR_P;
        const clNome = process.env.DB_T_USR_N;

        try {
            // Implementação bcrypt

            const hashedPassword = await bcrypt.hash(passwd, saltRounds);

            await pool.query(
                `INSERT INTO ${clUsr} (${clEmail}, ${clPwd}, ${clNome}) VALUES ($1, $2, $3)`,
                [mail, hashedPassword, nome]
            );

            return res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
        }

    }


    public async Login(req: Request, res: Response): Promise<Response> {
        const { mail, passwd } = req.body;
        const clUsr = process.env.DB_T_USR;
        const clEmail = process.env.DB_T_USR_M;
        const clPwd = process.env.DB_T_USR_P as string;

        try {

            const result = await pool.query(
                `SELECT * FROM ${clUsr} WHERE ${clEmail} = $1`,
                [mail]
            );

            

            if (result.rows.length === 0) {
                return res.status(401).json({ error: 'Credenciais inválidas' });
            }

            const storedHashedPassword = result.rows[0][clPwd];
            const user_auth = result.rows[0].id
            const match = await bcrypt.compare(passwd, storedHashedPassword);

            if (match) {
                // Gerar o token
                const token = jwt.sign({ email: mail, id: user_auth }, jwtSecret, { expiresIn: '3h' });

                return res.status(200).json({ message: 'Login bem-sucedido', token });
            } else {
                return res.status(401).json({ error: 'Credenciais inválidas' });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao fazer login' });
        }
    }
    public async determinarPerfil(req: Request, res: Response): Promise<Response> {
        const {id} = res.locals;
        const { altura, peso, genero, objetivos, data_nasc } = req.body;
       
        try {
            const verificar_dados = await pool.query(`
                SELECT * FROM User_Dados WHERE User_Default_Id = $1
            `, [id]);

            if (verificar_dados.rows.length == 0) {
                const insert = await pool.query(`
                        INSERT INTO User_Dados VALUES ($1,$2,$3,$4,$5,$6)
                    `, [id, altura, peso, genero, objetivos, data_nasc]);
                return res.status(200).json({ message: "Dados Salvos Com Sucesso"})
            } else {
                const update = await pool.query(`
                    UPDATE User_Dados SET Altura = $1,Peso = $2,Genero= $3,Obj_Peso= $4, Data_Nasc = $5  WHERE User_Default_Id = $6
                    `, [altura, peso, genero, objetivos,data_nasc, id])
                return res.status(200).json({ message: "Dados Atualizados Com Sucesso"})
            }
        } catch (err) {
            return res.status(401).json({ err: err })
        }
    }

    public async obterDados(req: Request, res: Response): Promise<Response> {
        const { id } = res.locals;
    
        try {
            const [userDefaultResult, userDadosResult] = await Promise.all([
                pool.query(`SELECT * FROM User_Default WHERE Id = $1`, [id]),
                pool.query(`SELECT * FROM User_Dados WHERE User_Default_Id = $1`, [id])
            ]);

            console.log(userDefaultResult.rows[0]);
            console.log(userDadosResult.rows[0]);
    
            if (userDefaultResult.rowCount === 0) {
                return res.status(404).json({ error: "Usuário não encontrado" });
            }
    
            const { nome, email } = userDefaultResult.rows[0];
            let genero, data_nasc, altura, peso, obj_peso
            if (userDadosResult.rows[0] != undefined) {
                if (userDadosResult.rows[0].genero != undefined) genero = userDadosResult.rows[0].genero
                if (userDadosResult.rows[0].data_nasc != undefined) data_nasc = userDadosResult.rows[0].data_nasc
                if (userDadosResult.rows[0].altura != undefined) altura = userDadosResult.rows[0].altura
                if (userDadosResult.rows[0].peso != undefined) peso = userDadosResult.rows[0].peso
                if (userDadosResult.rows[0].obj_peso != undefined) obj_peso = userDadosResult.rows[0].obj_peso
            };
    
            const userDados: UserType = {
                nome,
                email,
                genero,
                dataNascimento: data_nasc,
                altura,
                peso,
                objetivoPeso: obj_peso
            };
    
            return res.status(200).json({ dados: userDados });
    
        } catch (err) {
            console.error("Erro ao obter dados do usuário:", err);
            return res.status(500).json({ error: "Erro interno no servidor" });
        }
    }


    public async add_Fav(req: Request, res: Response): Promise<Response> {
        const {id} = res.locals;
        const { tipo_alimento, alimento_id } = req.body;
        try {
            // Tipo_Alimento_Domain AS TEXT CHECK (VALUE IN ('prodprep','Prod_Usr'));
            const resp: any = await pool.query(
                `INSERT INTO user_has_favoritos (user_default_id, tipo_alimento, alimento_id) VALUES ($1, $2, $3)`,
                [id, tipo_alimento, alimento_id]
            );
            return res.send( "Favorito Salvo." );
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: "Erro ao adicionar alimento." });
        }
    }

};

export default new User;
