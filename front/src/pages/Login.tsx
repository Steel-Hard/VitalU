import { Link } from "react-router-dom";
import { useState } from "react";

import {
  StlCaixa,
  BtnStl,
  FlexDivResp,
  StlInput,
  Logo,
  LinhaSld,
  Message,
  LoadingSpinner,
  FlexDiv,
} from "../components/index";
import autenticar from "../services/default";
import { useLoadingButton } from "../hooks/useLoadingButton";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const { loading, setLoading } = useLoadingButton();

  const enviarDados = async () => {
    setLoading(true); // Começa o carregamento

    try {
      await autenticar.login(email, senha, setMensagem);
    } catch {
      setMensagem("Erro ao tentar autenticar.");
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  const validarDados = (email: string, senha: string) => {
    if (!email || !senha) {
      setMensagem("Ops, email e senha são obrigatórios.");
    } else if (senha.length < 6 || senha.length > 12) {
      setMensagem("Erro. Sua senha tem 6 a 12 caracteres.");
    } else if (!email.includes("@") || email.length > 250) {
      setMensagem("Erro. E-mail com até 250 caracteres deve conter @.");
    } else {
      setMensagem("Enviando dados...");
      enviarDados(); // Envia os dados
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      validarDados(email, senha);
    }
  };

  return (
    <>
      <LinhaSld />
      <StlCaixa height="90%" width="300px" radius="150px 150px 25px 25px">
        <Logo height="50px" width="auto" />
        <h1 className="title_default">Login</h1>
        <StlInput
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          type="email"
          height="50px"
          width="80%"
          placeholder="E-mail"
        />

        <StlInput
          onChange={(e) => setSenha(e.target.value)}
          onKeyDown={handleKeyDown}
          type="password"
          height="50px"
          width="80%"
          placeholder="Senha"
        />

        <BtnStl
          onClick={() => {
            validarDados(email, senha);
          }}
          height="40px"
          width="80%"
        >
          {loading ? (
            <FlexDiv>
              <LoadingSpinner />
            </FlexDiv>
          ) : (
            "Entrar"
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
              : mensagem.includes("Ops")
              ? "#f54242"
              : mensagem.includes("inválidas")
              ? "#f54242"
              : "green",
          }}
        >
          {mensagem}
        </Message>

        <FlexDivResp>
          Não Tem Conta?{" "}
          <Link className="links" to="/cadastro">
            Cadastre-Se
          </Link>
        </FlexDivResp>
      </StlCaixa>
    </>
  );
}
