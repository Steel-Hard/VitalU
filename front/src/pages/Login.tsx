import { Link } from "react-router-dom";
import { StlCaixa } from "../components/box/white_box";
import Btn from "../components/Button/Button";
import { FlexDivResp } from "../components/FlexDiv/FlexDIv";
import { StlInput } from "../components/Inputs/Input";
import { Logo } from "../components/Logo/Logo";
import { LinhaSld } from "../components/Linha/Linha";



export function Login() {
  return (
   <>
      <LinhaSld/>
      <StlCaixa height="90%" width='300px' radius={true} >
        <Logo height="50px" width="auto" />
        <h1 className="title_default">Login</h1>
        <StlInput type="email" height="50px" width="80%" placeholder="E-mail"/>
        <StlInput type="password" height="50px" width="80%" placeholder="Senha"/>
        <Btn height="40px" width="100%" conteudo="Entrar"/>
        <FlexDivResp>
          Não Tem Conta? <Link className="links" to='/cadastro'> Cadastre-Se</Link>
        </FlexDivResp>
        <FlexDivResp>
         

        </FlexDivResp>
      </StlCaixa>
    </>
  );
}
