import styled from "styled-components";

interface BtnProps {
  height?: string;
  width?: string;
  bgColor?: string;
}

export const BtnStl = styled.button<BtnProps>`
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : "rgb(67, 170, 132)"};
  border: none;
  box-shadow: 0 2px 2px #1a1616b5;
  font-size: 14px;
  font-weight: bolder;
  color: white;
  text-align: center;
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "auto")};
  border-radius: 2px;
  padding: 12px 24px;
  transition: all 0.3s;

  &:active {
    transform: scale(0.95); //diminui um pouco
    box-shadow: 0 1px 1px #1a1616b5; //diminiu para efeito de pressão
  }
  &:hover {
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    background-color: #2d865b;
  }
`;

//botão invisivel para manter espaço
export const HiddenButton = styled(BtnStl)<{ visible: boolean }>`
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;
