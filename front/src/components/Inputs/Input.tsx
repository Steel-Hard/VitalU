import styled from "styled-components";

interface InputProps{
    height?: string;
    width?: string;
  }

export const StlInput = styled.input<InputProps>`
    border:none;
    background-color: #c9c9c9;
    border-radius: 5px;
    height: ${({height})=>height?height:"auto"};
    width: ${({width})=>width?width:"100%"};
`
