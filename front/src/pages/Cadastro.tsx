import { Link } from "react-router-dom";
import { BtnStl, FlexDivResp, StlInput, StlCaixa, LinhaSld, Logo, Message } from "../components/index";
import { useState } from "react";
import user from '../services/default'
export function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const validarDados = (nome: string, email: string, senha: string) => {
    if (!nome || !email || !senha) {
      setMensagem("Todos os campos são obrigatórios.");
    } else if ((nome.length > 150)) {
      setMensagem("Erro. Nome com até 150 caracteres.");
    } else if (senha.length < 6 || senha.length > 12) {
      setMensagem("Erro. Senha com mínimo de 6 e máximo de 12 caracteres.")
    } else if (!email.includes('@') || email.length > 250) {
      setMensagem("Erro. E-mail com até 250 caracteres deve conter @.")
    } else {
      setMensagem("Enviando dados..."); // Clear any previous messages
      enviarDados();
    }
  };


  const enviarDados = () => {
    user.cadastro(nome, email, senha, setMensagem);

  }


  return (
    <>
      <LinhaSld />
      <StlCaixa height="90%" width='300px' radius="150px 150px 25px 25px" >
        <Logo height="50px" width="auto" />
        <h1 className="title_default">Cadastro</h1>
        <StlInput onChange={e => setNome(e.target.value)} type="text" height="40px" width="80%" placeholder="Nome" />
        <StlInput onChange={e => setEmail(e.target.value)} type="email" height="40px" width="80%" placeholder="E-mail" />
        <StlInput onChange={e => setSenha(e.target.value)} type="password" height="40px" width="80%" placeholder="Senha" />
        <BtnStl onClick={() => validarDados(nome, email, senha)} height="40px" width="80%">
          Cadastrar
        </BtnStl>
        <Message visible={mensagem ? true : false} height="30px">
          {mensagem}
        </Message>
        <FlexDivResp>
          <Link to='/login'>Retornar ao login</Link>

        </FlexDivResp>
      </StlCaixa>
    </>
  );
}

