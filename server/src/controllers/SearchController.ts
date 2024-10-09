import pool from "../bd";
import { Request, Response } from "express";

//cache para não ficar buscando as mesmas consultas no databse
let categoryCache: { [key: number]: any[] } = {};
class Search {

    public async buscarAlimentos(req: Request, res: Response): Promise<Response> {
        const { id } = res.locals;
        const { user_query } = req.body;
        const nQuery = `${user_query}%`;
        try {
            const resposta = await pool.query(`
                SELECT produto.pro_descricao,
                preparacao.pre_descricao as preparacao,
                prodprep.*
                FROM 
                produto
                INNER JOIN prodprep ON produto.id  = prodprep.pp_produto
                INNER JOIN preparacao ON preparacao.id = prodprep.pp_preparacao
                WHERE 
                produto.pro_descricao ILIKE $1
                ORDER BY 
                produto.pro_descricao ASC;`, [nQuery]
            );
            const buscar = await pool.query(`
                SELECT  * FROM Prod_Usr WHERE User_Default_Id = $1 AND  nome ILIKE $2
             `, [id,nQuery]);
            
            return res.json({ "taco": resposta.rows, "produto": buscar.rows  });
        } catch {
            return res.status(401).json({ "err": "não foi possivel conectar" })
        }
    }
    public async buscarProduto(req: Request, res: Response): Promise<Response> {
        const { id } = res.locals;
        try {
            const buscar = await pool.query(`
               SELECT  * FROM Prod_Usr WHERE User_Default_Id = $1
            `, [id]);
            return res.status(200).json({ "resposta": buscar.rows })
        } catch (err) {
            return res.status(401).json({ err: "Não Foi Possivel Buscar Produtos" })
        }

    }
    public async obterCategoria(req: Request, res: Response): Promise<Response> {
        const { n_categoria } = req.body;
        if (n_categoria in categoryCache) {
            
            return res.json({ "taco": categoryCache[n_categoria] });
            
        }
        try {
            const resposta = await pool.query(`     
                SELECT produto.pro_descricao,preparacao.pre_descricao as preparacao, prodprep.* 
                FROM produto 
                INNER JOIN prodprep ON produto.id  = prodprep.pp_produto
                INNER JOIN preparacao ON preparacao.id = prodprep.pp_preparacao
                WHERE produto.pro_grupo = $1
                `, [n_categoria]
            );
            if (!categoryCache[n_categoria]) {
              categoryCache[n_categoria] = resposta.rows ; // Armazena em formato de tupla
            }

            return res.json({ "taco": resposta.rows });
        } catch {
            return res.status(401).json({ "err": "não foi possivel realizar busca" });
        }

    }

}

export default new Search