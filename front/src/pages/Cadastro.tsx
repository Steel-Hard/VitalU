import { Link } from "react-router-dom";
import {BtnStl} from "../components/Button/Button";
import { FlexDivResp } from "../components/FlexDiv/FlexDIv";
import { StlInput } from "../components/Inputs/Input";
import {StlCaixa} from "../components/box/white_box";
import { LinhaSld } from "../components/Linha/Linha";
import { Logo } from "../components/Logo/Logo";
import { useState } from "react";

export function Cadastro() {
  const [nome,setNome] = useState("");
  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");

  const enviarDados = () =>{
    console.log(nome,email,senha);    
  }

  return (
    <>
      <LinhaSld/>
      <StlCaixa height="90%" width='300px' radius={true} >
        <Logo height="50px" width="auto" />
        <h1 className="title_default">Cadastro</h1>
        <StlInput onChange={e => setNome(e.target.value)} type="text" height="40px" width="80%" placeholder="Nome"/>
        <StlInput onChange={e => setEmail(e.target.value)} type="email" height="40px" width="80%" placeholder="E-mail"/>
        <StlInput onChange={e => setSenha(e.target.value)} type="password" height="40px" width="80%" placeholder="Senha"/>
        <BtnStl onClick={enviarDados}  height="40px" width="80%">Cadastrar</BtnStl>
        <FlexDivResp>
          <Link to='/login'>Retornar ao login</Link>

        </FlexDivResp>
        <FlexDivResp>
         

        </FlexDivResp>
      </StlCaixa>
    </>
  );
}

