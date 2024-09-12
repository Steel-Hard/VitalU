// baixar vscode-styled-components

import styled from "styled-components";

export const StlCaixa = styled.div<CaixaProps>`
  background-color: white;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.103);
  display: flex;
  justify-content: center;
  padding:20px;
  align-items: center;
  margin: 20px;
  height: ${({height})=>height?height:"70%"};
  width: ${({width})=>width?width:"30%"};  
  &:hover {
      transform: translateY(-10px);
      box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.5);
    }

    @media (max-width: 768px) {
        width: 80%;
        padding: 15px;
    }

    @media (max-width: 480px) {
        width: 95%;
        padding: 10px;
    }  
`

interface CaixaProps{
  height?: string;
  width?: string;

}
  


