// baixar vscode-styled-components

import { ReactElement } from "react";
import styled from "styled-components";

const StlCaixa = styled.div<CaixaProps>`
    
    background-color: white;
    box-shadow: 0 1px 3px 1px;
    height: ${({height})=>height?height:"auto"};
    width: ${({width})=>width?width:"auto"};
    
`

interface CaixaProps{
    height?: string;
    width?: string;
    children?: ReactElement  
  }
  
function Caixa(props:CaixaProps){
    return (
        <>
          <StlCaixa height={props.height} width={props.width}/>
        </>
      );

}
export default Caixa;
