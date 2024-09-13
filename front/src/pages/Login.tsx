import { Link } from "react-router-dom";
import { StlCaixa } from "../components/box/white_box";
import Btn from "../components/Button/Button";
import { FlexDiv, FlexDivResp } from "../components/FlexDiv/FlexDIv";
import { StlInput } from "../components/Inputs/Input";
import { Logo } from "../components/Logo/Logo";



export function Login() {
  return (
   <>
      <Logo/>
      <StlCaixa height="350px" >
        <h1>Login</h1>
        <StlInput type="email" height="40px" width="50%" placeholder="E-mail"/>
        <StlInput type="password" height="40px" width="50%" placeholder="Senha"/>
        <Btn height="40px" width="50%" conteudo="Entrar"/>
        <FlexDivResp>
          Não Tem Conta? <Link className="links" to='/cadastro'> Cadastre-Se</Link>

        </FlexDivResp>
        <FlexDivResp>
         

        </FlexDivResp>
      </StlCaixa>
    </>
  );
}
