import styled from "styled-components";

const BtnStl = styled.button`
  background-color: rgb(171, 53, 224);
  text-align: center;
  height: 30px;
  width: 60px;
`;

interface BtnProps{
  conteudo: string;
}

function Btn(props:BtnProps) {
  return (
    <>
      <BtnStl>{props.conteudo}</BtnStl>
    </>
  );
}

export default Btn;
