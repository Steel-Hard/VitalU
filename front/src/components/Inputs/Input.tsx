import styled from "styled-components";

interface InputProps {
  height?: string;
  width?: string;
  bcolor?: string;
  marginL?: string;
  marginR?: string;
}

export const StlInput = styled.input<InputProps>`
  flex:auto;
  border: none;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: ${({ bcolor }) => bcolor ? bcolor : "#c9c9c9"};
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "100%")};
  margin-right: ${({ marginR }) => (marginR ? marginR : "0")};
  margin-left: ${({ marginL }) => (marginL ? marginL : "0")};
`;
