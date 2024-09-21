import {defaultInteraction} from './api'


export class Auth{
    async cadastro(){
        await defaultInteraction.post("/cadastro", {})
        .then((res) =>{
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err.response.data);
        })
    }
    async login(){
        await defaultInteraction.post("/login", {})
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) =>{
            console.log(err.response.data)
        })
    }
}