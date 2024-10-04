import { userInteraction } from "./api";
import { TimeStamp } from "../utils/obterTempo";

export default new class User{
    async obterDados(){
        await userInteraction.get("/user/obter")
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
    async adicionarTaco(tacoId: number,prepId: number, quantidade:number ){
        const data = TimeStamp();
        await userInteraction.post("/consume/taco",{taco_id:tacoId,data_consumo:data,prep_id:prepId,quantidade:quantidade})
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
}