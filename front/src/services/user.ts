import { userInteraction } from "./api";
import { TimeStamp } from "../utils/obterTempo";
import { obterDataNascimento } from "../utils/calcularDatas";

export default new class User {
    
    async inserirDados(altura:number,peso:number,genero:string,idade:number,objetivos:string){
        const data_nasc =  obterDataNascimento(idade);
        await userInteraction.post("/user/dados",{altura, peso, genero, objetivos, data_nasc })
        .then((res) => {
            console.log(res.data)

        })
        .catch((err) => {
            console.log(err)
        })
    }
     

    async obterDados() {
        try {
            const res = await userInteraction.get("/user/obter");
            const user = res.data;
            return user;
        } catch (err) {
            console.error('Erro ao buscar o usuário:', err);
            throw err;
        }
    }

    async adicionarTaco(tacoId: number, prepId: number, quantidade: number) {
        const data = TimeStamp();
        await userInteraction.post("/consume/taco", { taco_id: tacoId, data_consumo: data, prep_id: prepId, quantidade: quantidade })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }
}