
import { userInteraction } from "./api";

class Foods{
    async pesquisar(query:string){
        userInteraction.post("/foods/buscar",{user_query:query})
        .then((res) => {
            return console.log(res);
        })
        .catch((err) => {
            return console.log(err)
        })
    }
    async buscarCategoria(valor:number,fun:CallableFunction){
        userInteraction.post("/foods/categoria", {n_categoria:valor})
        .then((res) => {
            console.log(res.data.resposta)
            fun(res.data.resposta);
        })
        .catch((err) => {
            return console.log(err)
        })

    }
    
}
export default new Foods;