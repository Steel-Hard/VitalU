
import { userInteraction } from "./api";

class Foods {
    async pesquisar(query: string, fun: CallableFunction) {
        await userInteraction.post("/search/foods", { user_query: query })
            .then((res) => {

                return fun(res.data);
            })
            .catch((err) => {
                return console.log(err)
            })
    }
    async buscarCategoria(valor: number, fun: CallableFunction) {
        await userInteraction.post("/search/category", { n_categoria: valor })
            .then((res) => {
                fun(res.data);
            })
            .catch((err) => {
                return console.log(err)
            })

    }
    async cadastrarProduto(

        nome: string,
        desc: string,
        quant_por_porcao: number,
        uni_quant_por_porcao: string,
        cal: number,
        carboidrato: number,
        proteina: number,
        acucares: number,
        fibras: number,
        gordura_total: number,
        gordura_saturada: number,
        gordura_trans: number,
        calcio: number,
        sodio: number,
        fun1: CallableFunction
    ) {



        await userInteraction.post("/foods/cadastro", { nome: nome, descricao: desc, quantidade_por_porcao: quant_por_porcao, unidade_quantidade_por_porcao: uni_quant_por_porcao, calorias: cal, proteina: proteina, carboidrato: carboidrato, acucares: acucares, fibras: fibras, gordura_total: gordura_total, gordura_saturada: gordura_saturada, gordura_trans: gordura_trans, calcio: calcio, sodio: sodio })
            .then((res) => {

                return fun1(res.data.message);
            })
            .catch((err) => {
                return fun1(err.response.data.error);
            }).finally(() => {
                return;
            })
    }
}

export default new Foods;