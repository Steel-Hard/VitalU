import pool from '../bd';
import { Request,Response } from "express";


class UserConsumptionTaco{
    public async salvarConsumoTaco(req:Request,res:Response): Promise<Response>{
        const {id} = res.locals
        const {taco_id,data_consumo,prep_id,quantidade} = req.body
        try{
            const data = await pool.query(`INSERT INTO Usr_Consome_Taco VALUES ($1,$2,$3,$4,$5)`,
                [taco_id,prep_id,id,data_consumo,quantidade]);

            return res.status(201).json({"message":"dados inseridos com sucesso"});
        }catch(err){
            return res.status(401).json({"err":err})
        }
    }
}

export default new UserConsumptionTaco;