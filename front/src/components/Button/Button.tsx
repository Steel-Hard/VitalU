import styled from "styled-components";

const BtnStl = styled.button<BtnProps>`
  background-color: rgb(67, 170, 132);
  text-align: center;
  height: ${({height})=>height?height:"auto"};
  width: ${({width})=>width?width:"auto"};
  border-radius: 5px;
`;

interface BtnProps{
  conteudo?: string;
  height?: string;
  width?: string;
}

function Btn(props:BtnProps) {
  return (
    <>
      <BtnStl height={props.height} width={props.width}>{props.conteudo}</BtnStl>
    </>
  );
}

export default Btn;
