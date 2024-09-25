import pool from "../bd";
import { Request,Response } from "express";

class Search{
    public async buscarAlimentos(req:Request,res:Response): Promise<Response>{
        const {user_query} = req.body;
        const nQuery = `${user_query}%`;
        try{
            const resposta = await pool.query(`
                SELECT produto.pro_descricao, prodprep.* 
                FROM produto 
                JOIN prodprep 
	            ON produto.id = prodprep.pp_produto 
                WHERE produto.pro_descricao ILIKE $1
                ORDER BY produto.pro_descricao ASC`,[nQuery]
            );

            return res.json({"resposta":resposta.rows});
        }catch{
             return res.status(401).json({"err":"não foi possivel conectar"})
        }



    }
    public async obterCategoria(req:Request,res:Response):Promise<Response>{
        const {n_categoria} = req.body;
        try{
            const resposta = await pool.query(`
                    SELECT produto.pro_descricao, prodprep.* 
                    FROM produto 
                    JOIN prodprep 
                    ON produto.id = prodprep.pp_produto 
                    WHERE produto.pro_grupo = $1
                `,[n_categoria]
            );

            return res.json({"resposta": resposta.rows});
        }catch{
            return res.status(401).json({"err":"não foi possivel realizar busca"});
        }

    }

}

export default new Search