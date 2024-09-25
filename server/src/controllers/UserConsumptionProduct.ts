import pool from '../bd';
import { Request, Response } from "express";
class UserConsumptionProduct {
    public async salvarConsumoProduto(req: Request, res: Response): Promise<Response> {
        const { produc_id, usr_id, data_consumo, quantidade } = req.body
        try {
            const data = await pool.query(`
                INSERT INTO Usr_Consome_Prod_Usr VALUES ($1,$2,$3,$4)`,
                [produc_id, usr_id, data_consumo, quantidade]);

            return res.status(201).json({ "message": "dados inseridos com sucesso" });
        } catch {
            return res.status(401).json({ "err": "não foi possivel salvar consumo" })
        }

    }
}

export default new UserConsumptionProduct;