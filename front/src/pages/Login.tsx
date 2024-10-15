import { Link } from "react-router-dom";
import { useState } from "react";
import { StlCaixa,BtnStl,FlexDivResp,StlInput,Logo,LinhaSld, Message ,LoadingSpinner} from "../components/index";
import autenticar from '../services/default'
import { useLoadingButton } from "../hooks/useLoadingButton";

export function Login() {
  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
    const {executeWithLoading,isLoading} =useLoadingButton()
  const validarDados = (email: string, senha: string) => {
    if (!email || !senha) {
      setMensagem("Ops, email e senha são obrigatórios.");
    } else if (senha.length < 6 || senha.length > 12) {
      setMensagem("Erro. Sua senha tem 6 a 12 caracteres.")
    } else if (!email.includes('@') || email.length > 250) {
      setMensagem("Erro. E-mail com até 250 caracteres deve conter @.")
    } else {
      setMensagem("Enviando dados...");
      enviarDados();
    }
  };
 
  const enviarDados = () =>{
    autenticar.login(email,senha,setMensagem);    
  }

  
  return (
   <>
      <LinhaSld/>
      <StlCaixa height="90%" width='300px' radius="150px 150px 25px 25px" >
        <Logo height="50px" width="auto" />
        <h1 className="title_default">Login</h1>
        <StlInput onChange={e => setEmail(e.target.value)} type="email" height="50px" width="80%" placeholder="E-mail"/>
        <StlInput onChange={e => setSenha(e.target.value)} type="password" height="50px" width="80%" placeholder="Senha"/>
        
        <BtnStl onClick={()=>{
          executeWithLoading(async () => validarDados(email, senha))
         
        }
        }  height="40px" width="80%">
          {isLoading ? <LoadingSpinner/> : "Entrar"}
          
        
        </BtnStl>
        <Message visible={mensagem ? true : false} height="30px">
          {mensagem}
        </Message>
        <FlexDivResp>
          Não Tem Conta? <Link className="links" to='/cadastro'> Cadastre-Se</Link>
        </FlexDivResp>

      </StlCaixa>
    </>
  );
}
