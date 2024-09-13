import { Link } from "react-router-dom";
import Btn from "../components/Button/Button";
import { FlexDivResp } from "../components/FlexDiv/FlexDIv";
import { StlInput } from "../components/Inputs/Input";
import { Logo } from "../components/Logo/Logo";
import {StlCaixa} from "../components/box/white_box";

export function Cadastro() {
  return (
    <>
      <Logo/>
      <StlCaixa height="400px" >
        <h1>Cadastro</h1>
        <StlInput type="text" height="40px" width="50%" placeholder="Nome"/>
        <StlInput type="email" height="40px" width="50%" placeholder="E-mail"/>
        <StlInput type="password" height="40px" width="50%" placeholder="Senha"/>
        <Btn height="40px" width="50%" conteudo="Cadastar"/>
        <FlexDivResp>
          <Link to='/login'>Retornar ao login</Link>

        </FlexDivResp>
        <FlexDivResp>
         

        </FlexDivResp>
      </StlCaixa>
    </>
  );
}

