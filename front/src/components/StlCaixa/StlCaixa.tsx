// baixar vscode-styled-components

import styled from "styled-components";

export const StlCaixa = styled.div<CaixaProps>`
  background-color: white;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: ${({direction}) => direction? direction: 'column'};
  justify-content: ${({jContent}) => jContent? jContent:'flex-start'};
  border-radius: ${({radius})=> radius? '150px 150px 25px 25px' : '0px'};
  padding:20px;
  align-items: center;
  margin: 20px;
  height: ${({height})=>height?height:"70%"};
  width: ${({width})=>width?width:"30%"};  
  

  @media (max-width: 768px) {
      width: 80%;
      padding: 15px;
  }

  @media (max-width: 480px) {
      width: ${({smlWidth})=>smlWidth?smlWidth:"95%"};
      padding: 10px;
  }  
`

interface CaixaProps{
  height?: string;
  width?: string;
  smlWidth?:string;
  jContent?:string;
  radius?: boolean;
  direction?:string;

}