/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext,useState} from "react";

interface Global{
    loading:boolean;
    setLoading: (value:boolean) => void

}

export const GlobalContext = createContext({} as Global);


export function GlobalProvider({children}:any){
    const [loading,setLoading] = useState(false);
    const token = localStorage.getItem('token');
    if(!token){
        return(
            <div>Desculpe usuário não autorizado. Realize o <a href="/login">Login</a> para continuar.</div>
        )
    }


   //deve ser ativado dependendo das condições de cada página
    if(loading){
        return  (
            <div>Carregando. ...</div>
        )
    }

    return(
        <GlobalContext.Provider value={{loading,setLoading}}>
            {children}
        </GlobalContext.Provider>
    )
}