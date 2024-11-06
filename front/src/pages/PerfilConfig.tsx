import { IoMdReturnLeft } from "react-icons/io";
import { Link } from "react-router-dom";
import { dicas } from "../enum/dicas";
import { StlCaixa, LinhaSld, Navegacao, Tip } from "../components/index";
import UserConfig from "../components/UserConfig";

export function PerfilConfig() {
  return (
    <>
      <LinhaSld>
        <Tip message={dicas.perfilConfig} />
      </LinhaSld>

      <Navegacao>
        <Link to="/perfil">
          <IoMdReturnLeft size={70} />
        </Link>
      </Navegacao>

      <h1>EDITAR PERFIL</h1>
      <StlCaixa jcont="center" height="100%" gap="20px" width="70%">
        <UserConfig />
      </StlCaixa>
    </>
  );
}
