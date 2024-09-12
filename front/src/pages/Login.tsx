import { StlCaixa } from "../components/box/white_box";
import Btn from "../components/Button/Button";
import { Logo } from "../components/Logo/Logo";



export function Login() {
  return (
   <>
      <Logo/>
      <StlCaixa height="400px" >
        <Btn height="20px" width="50%"/>
      </StlCaixa>
    </>
  );
}
