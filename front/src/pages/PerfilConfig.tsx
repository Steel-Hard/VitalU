import { StlCaixa,LinhaSld, Nav } from "../components/index";
import UserConfig from "../components/UserConfig";

export function PerfilConfig(){
    return(
        <>
            <LinhaSld/>

            <Nav>
 
            </Nav>
            <h1>EDITAR PERFIL</h1>
            <StlCaixa jContent="center" height='90%' width="70%">
                <UserConfig />
            </StlCaixa>
        </>
    );
}