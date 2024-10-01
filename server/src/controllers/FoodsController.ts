import { Request,Response } from "express";
import { CadastroProduto } from "../types";
import pool from "../bd";



class Foods{


    public async cadastrarProduto(req: Request<{}, {}, CadastroProduto>, res: Response): Promise<Response> {
        const {id} =res.locals;
        const {
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
            id, nome, descricao, tamanho_porcao, unidade_tamanho_porcao,
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



