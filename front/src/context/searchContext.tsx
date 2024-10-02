import { createContext, useState } from "react";
import { alimentosProps } from "../types";

interface searchContext{
    tipo: number;
    setTipo: (value: number) => void;
    alimentos: alimentosProps[];
    setAlimento: (data:[]) => void;
    triger: boolean;
    setTriger: (value:boolean) => void;
    query: string;
    setQuery: (value:string) => void


}


export const SearchCtx = createContext({} as searchContext)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function SearchProvider({children}:any){
    const [tipo, setTipo] = useState<number>(1);
    const [alimentos,setAlimento] = useState([]);
    const [triger,setTriger] = useState(false);
    const [query,setQuery] = useState("");
    return(
        <SearchCtx.Provider value={{tipo:tipo,setTipo:setTipo,alimentos:alimentos,setAlimento:setAlimento,triger:triger,setTriger:setTriger,query:query,setQuery:setQuery}}>
            {children}
        </SearchCtx.Provider>
    )
}