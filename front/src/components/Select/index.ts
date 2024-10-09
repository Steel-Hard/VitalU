import styled from "styled-components";

export const Select = styled.select<SelectProps>`
  padding: 10px 15px;

  font-size: 14px;
  color: ${({ color }) => (color ? color : "#black")};
  background-color: ${({ bcolor }) => (bcolor ? bcolor : "rgb(67, 170, 132)")};
  border: 2px solid #f0f0f0;

  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${({ bshadow }) =>
    bshadow ? bshadow : "0 4px 6px rgba(0, 0, 0, 0.1)"};

  &:hover {
    background-color: #249c65;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(45, 134, 91, 0.4);
  }
`;

// Estilização das Options
export const Option = styled.option<OptionProps>`
  background-color: white;
  color: "${({ color }) =>
    color ? color : "#2d865b"}"; /* Contraste nas opções */
`;

export const SelectInBox = styled.select<SelectProps>`
  padding: 8px 0%;
  border-radius: 5px;
  background-color: #c9c9c9;
  color: "${({ color }) => (color ? color : "black")}";
  border-color: white;
  margin-right: ${({ marginR }) => (marginR ? marginR : "0")};
  margin-left: ${({ marginL }) => (marginL ? marginL : "0")};
`;

interface SelectProps {
  bcolor?: string;
  color?: string;
  bshadow?: string;
  marginL?: string;
  marginR?: string;
}

interface OptionProps {
  color?: string;
}
