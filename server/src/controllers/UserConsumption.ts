import pool from '../bd';
import { Request,Response } from "express";


class UserConsumption{
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
    public async deletarConsumoTaco(req: Request, res: Response): Promise<Response>{
        //utiliza procedure
        const {id} = res.locals;
        const { taco_id, data_consumo} = req.body;
        try{
            //chamada parametros id_produto,id user e data
            const resposta = await pool.query(`
                DELETE FROM usr_consome_taco 
                WHERE 
                Prod_Prep_Id = $1 AND  
                User_Default_Id = $2 AND
                data_consumo = $3`,
                [taco_id,id,data_consumo]
            );
            console.log(resposta);
            return res.status(200).json({"message":"item excluido com sucesso"})

        }catch(err){
            console.log("erro:",err);
            return res.status(500).json({"error":"não foi possivel deletar erro interno no servidor"})
        }

    }
    public async salvarConsumoProduto(req: Request, res: Response): Promise<Response> {
        const {id} = res.locals;
        const { produc_id, data_consumo, quantidade } = req.body;
        console.log(id,produc_id,data_consumo)
        try {
            const data = await pool.query(`
                INSERT INTO Usr_Consome_Prod_Usr VALUES ($1,$2,$3,$4)`,
                [ id,produc_id, data_consumo, quantidade]);

            return res.status(201).json({ "message": "dados inseridos com sucesso" });
        } catch(err) {
            console.log(err)
            return res.status(500).json({ "err": "não foi possivel salvar consumo erro interno no servidor" })
        }

    }
    public async deletarConsumoProduto(req: Request, res: Response): Promise<Response>{

        const {id} = res.locals;
        const { produc_id, data_consumo} = req.body;
        try{
            //chamada parametros id_produto,id user e data
            const resposta = await pool.query(`
                    DELETE FROM usr_consome_prod_usr
                    WHERE 
                    prod_usr_id = $1 AND  
                    User_Default_Id = $2 AND
                    data_consumo = $3
                `,
                [produc_id,id,data_consumo]
            );
            return res.status(200).json({"message":"item excluido com sucesso"})

        }catch(err){
            console.log("erro:",err);
            return res.status(500).json({"error":"não foi possivel deletar erro interno no servidor"})
        }

    }
    
}

export default new UserConsumption;