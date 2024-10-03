import { StlCaixa,LinhaSld } from "../components/index";
import Calcimc from "../components/Calcimc/Calcimc";

export function PerfilConfig(){
    return(
        <>
            <LinhaSld/>
            <StlCaixa height='400px' width="70%">

                <Calcimc />
            </StlCaixa>
        </>
    );
}