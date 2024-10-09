import { createContext, useState } from "react";
import { alimentosProps, produtoProps } from "../types";

interface foodProps {
  taco: alimentosProps[];
  produto: produtoProps[];
}

interface searchContext {
  tipo: number;
  setTipo: (value: number) => void;
  alimentos: foodProps;
  setAlimento: (data: foodProps) => void;
  triger: boolean;
  setTriger: (value: boolean) => void;
  query: string;
  setQuery: (value: string) => void;
}

export const SearchCtx = createContext({} as searchContext);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function SearchProvider({ children }: any) {
  const [tipo, setTipo] = useState<number>(1);

  // Inicializando alimentos com arrays vazios para 'taco' e 'produto'
  const [alimentos, setAlimento] = useState<foodProps>({
    taco: [],
    produto: [],
  });

  const [triger, setTriger] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <SearchCtx.Provider
      value={{
        tipo: tipo,
        setTipo: setTipo,
        alimentos: alimentos,
        setAlimento: setAlimento,
        triger: triger,
        setTriger: setTriger,
        query: query,
        setQuery: setQuery,
      }}
    >
      {children}
    </SearchCtx.Provider>
  );
}
