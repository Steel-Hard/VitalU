import { StlCaixa } from "../components/box/white_box";
import Calcimc from "../components/calcimc/Calcimc";
import { LinhaSld } from "../components/Linha/Linha";

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