import { Link } from "react-router-dom";
import Btn from "../components/Button/Button";
import { FlexDivResp } from "../components/FlexDiv/FlexDIv";
import { StlInput } from "../components/Inputs/Input";
import {StlCaixa} from "../components/box/white_box";
import { LinhaSld } from "../components/Linha/Linha";
import { Logo } from "../components/Logo/Logo";




export function Cadastro() {
  return (
    <>
      <LinhaSld/>
      <StlCaixa height="90%" width='300px' radius={true} >
        <Logo height="50px" width="auto" />
        <h1 className="title_default">Cadastro</h1>
        <StlInput type="text" height="40px" width="80%" placeholder="Nome"/>
        <StlInput type="email" height="40px" width="80%" placeholder="E-mail"/>
        <StlInput type="password" height="40px" width="80%" placeholder="Senha"/>
        <Btn height="40px" width="100%" conteudo="Cadastrar"/>
        <FlexDivResp>
          <Link to='/login'>Retornar ao login</Link>

        </FlexDivResp>
        <FlexDivResp>
         

        </FlexDivResp>
      </StlCaixa>
    </>
  );
}

