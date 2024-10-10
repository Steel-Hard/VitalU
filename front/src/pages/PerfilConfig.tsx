import { IoMdReturnLeft } from "react-icons/io";
import { Link } from "react-router-dom";
import { StlCaixa,LinhaSld, Navegacao } from "../components/index";
import UserConfig from "../components/UserConfig";

export function PerfilConfig(){
    return(
        <>
            <LinhaSld/>
            
            <Navegacao>
                <Link to="/perfil">
                 <IoMdReturnLeft size={70}/>
                </Link>
            </Navegacao>
            
            <h1>EDITAR PERFIL</h1>
            <StlCaixa jcont="center" height='90%' width="70%">
                <UserConfig />
            </StlCaixa>
        </>
    );
}