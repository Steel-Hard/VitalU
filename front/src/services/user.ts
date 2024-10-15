import { userInteraction } from "./api";
import { TimeStamp } from "../utils/obterTempo";

export default new class User {
    
    async inserirDados(altura:number,peso:number,genero:string,data_nasc:string,objetivos:string){
        console.log(data_nasc)
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
    //obter alimentos consumidos
    //passar data atual no useEffect da pagina 
    //quando alterar a data rechamar o metodo...
    async obterConsumo(data:string){
        await userInteraction.get(`/user/obte/consumo/${data}`)
        .then(res => res.data)
        .catch(err => console.log(err))
    }
    

    async adicionarTaco(tacoId: number, prepId: number, quantidade: number) {
        const data = TimeStamp();
        await userInteraction.post("/consume/taco", { taco_id: tacoId, data_consumo: data, prep_id: prepId, quantidade: quantidade })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }
    async adicionarProduto(produc_id:number, quantidade:number){
        const data_consumo = TimeStamp();
        await userInteraction.post("/consume/product", { produc_id, data_consumo,  quantidade })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        }
}