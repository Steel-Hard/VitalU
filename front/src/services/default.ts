import {defaultInteraction} from './api'

class Auth{
    //realiza cadastro passando parametros definido no backend
    async cadastro(nome:string,email:string,senha:string, fun:CallableFunction){
        console.log("chegei")
        await defaultInteraction.post("/user/cadastro", {mail:email, passwd:senha, nome:nome})
        .then((res) =>{
            console.log(res.data);
            //retorna o status da chamada ao usuario
            this.login(email,senha);
        })
        .catch((err) => {
            fun(err.response.data.error);
        })
    }
    async login(email:string,senha:string,fun?:CallableFunction){
        await defaultInteraction.post("/user/login", {mail:email, passwd:senha})
        .then((res) => {
            window.localStorage.setItem("token",res.data.token);
            window.location.href ="/perfil";

        })
        .catch((err) =>{
            if(fun)
            fun(err.response.data.error);
        })
    }
}

export default new Auth;