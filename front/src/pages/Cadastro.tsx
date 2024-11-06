import { Link } from "react-router-dom";
import {
  BtnStl,
  FlexDivResp,
  StlInput,
  StlCaixa,
  LinhaSld,
  Logo,
  Message,
  LoadingSpinner,
  FlexDiv,
} from "../components/index";
import { useState } from "react";
import { useLoadingButton } from "../hooks/useLoadingButton";
import user from "../services/default";
export function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const { setLoading, loading } = useLoadingButton();

  const enviarDados = async () => {
    setLoading(true);

    try {
      await user.cadastro(nome, email, senha, setMensagem);
    } catch {
      setMensagem("Erro ao realizar cadastro.");
    } finally {
      setLoading(false);
    }
  };

  const validarDados = (nome: string, email: string, senha: string) => {
    if (!nome || !email || !senha) {
      setMensagem("Todos os campos são obrigatórios.");
    } else if (nome.length > 150) {
      setMensagem("Erro. Nome com até 150 caracteres.");
    } else if (senha.length < 6 || senha.length > 12) {
      setMensagem("Erro. Senha com mínimo de 6 e máximo de 12 caracteres.");
    } else if (!email.includes("@") || email.length > 250) {
      setMensagem("Erro. E-mail com até 250 caracteres deve conter @.");
    } else {
      setMensagem("Enviando dados...");
      enviarDados();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      validarDados(nome, email, senha);
    }
  };

  return (
    <>
      <LinhaSld />
      <StlCaixa height="90%" width="300px" radius="150px 150px 25px 25px">
        <Logo height="50px" width="auto" />
        <h1 className="title_default">Cadastro</h1>

        <StlInput
          onChange={(e) => setNome(e.target.value)}
          type="text"
          height="40px"
          width="80%"
          placeholder="Nome"
          onKeyDown={handleKeyDown}
        />
        <StlInput
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          height="40px"
          width="80%"
          placeholder="E-mail"
          onKeyDown={handleKeyDown}
        />
        <StlInput
          onChange={(e) => setSenha(e.target.value)}
          type="password"
          height="40px"
          width="80%"
          placeholder="Senha"
          onKeyDown={handleKeyDown}
        />
        <BtnStl
          onClick={() => {
            validarDados(nome, email, senha);
          }}
          height="40px"
          width="80%"
        >
          {loading ? (
            <FlexDiv>
              <LoadingSpinner />
            </FlexDiv>
          ) : (
            "Cadastrar"
          )}
        </BtnStl>

        <Message
          visible={mensagem ? true : false}
          height="30px"
          style={{
            color: mensagem.includes("Erro")
              ? "#f54242"
              : mensagem.includes("Todos")
              ? "#f54242"
              : "green",
          }}
        >
          {mensagem}
        </Message>

        <FlexDivResp>
          <Link to="/login">Realizar login</Link>
        </FlexDivResp>
      </StlCaixa>
    </>
  );
}
