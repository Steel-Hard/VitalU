import { userInteraction } from "./api";


export default new class User{
    async obterDados(){
        await userInteraction.get("/user/obter")
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
}