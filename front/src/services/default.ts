import {defaultInteraction} from './api'


export class Auth{
    async cadastro(nome:string,email:string,senha:string){
        await defaultInteraction.post("/cadastro", {nome,email,senha})
        .then((res) =>{
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err.response.data);
        })
    }
    async login(email:string,senha:string){
        await defaultInteraction.post("/login", {email,senha})
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) =>{
            console.log(err.response.data)
        })
    }
}