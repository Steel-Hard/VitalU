import { StlCaixa,LinhaSld } from "../components/index";
import Calcimc from "../components/Calcimc/Calcimc";

export function PerfilConfig(){
    return(
        <>
            <LinhaSld/>
            <StlCaixa jContent="center" height='90%' width="70%">

                <Calcimc />
            </StlCaixa>
        </>
    );
}