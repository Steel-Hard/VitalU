import { Request,Response } from "express";
import User from '../controllers/UserController'
import pool from "../bd";


class Foods{

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

    public async cadastrarProduto(req: Request<{}, {}, CadastroProduto>, res: Response): Promise<Response> {
        const {
            usr_id,
            nome,
            descricao,
            tamanho_porcao,
            unidade_tamanho_porcao,
            quantidade_por_porcao,
            unidade_quantidade_por_porcao,
            calorias,
            proteina,
            carboidrato,
            acucares,
            fibras,
            gordura_total,
            gordura_saturada,
            gordura_trans,
            calcio,
            sodio
        } = req.body;
    
        const values: (string | number | null | undefined)[] = [
            usr_id, nome, descricao, tamanho_porcao, unidade_tamanho_porcao,
            quantidade_por_porcao, unidade_quantidade_por_porcao, calorias, proteina,
            carboidrato, acucares, fibras, gordura_total, gordura_saturada,
            gordura_trans, calcio, sodio
        ];
    
        // Filtra valores nulos e gera a consulta SQL
        const fields: string[] = [
            'user_default_id', 'nome', 'descricao', 'tamanho_porcao', 'unidade_tamanho_porcao',
            'quantidade_por_porcao', 'unidade_quantidade_por_porcao', 'calorias', 'proteina',
            'carboidrato', 'acucares', 'fibras', 'gordura_total', 'gordura_saturada',
            'gordura_trans', 'calcio', 'sodio'
        ];
    
        const filteredValues = values.filter(value => value !== undefined && value !== null);
        const filteredFields = fields.filter((_, index) => values[index] !== undefined && values[index] !== null);
    
        if (filteredValues.length === 0) {
            return res.status(400).json({ error: "Nenhum dado fornecido para cadastro." });
        }
    
        const placeholders = filteredValues.map((_, index) => `$${index + 1}`).join(", ");
    
        const query = `
            INSERT INTO prod_usr (${filteredFields.join(", ")}) 
            VALUES (${placeholders}) 
            RETURNING id;
        `;
    
        try {
            const prodCad = await pool.query(query, filteredValues);
            return res.json({ "Cadastrado": prodCad.rows[0] });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: "Erro ao cadastrar produto." });
        }
    }
}    

export default new Foods;



interface CadastroProduto {
    usr_id: number;
    nome?: string;
    descricao?: string;
    tamanho_porcao?: number;
    unidade_tamanho_porcao?: string;
    quantidade_por_porcao?: number;
    unidade_quantidade_por_porcao?: string;
    calorias?: number;
    proteina?: number;
    carboidrato?: number;
    acucares?: number;
    fibras?: number;
    gordura_total?: number;
    gordura_saturada?: number;
    gordura_trans?: number;
    calcio?: number;
    sodio?: number;
}
