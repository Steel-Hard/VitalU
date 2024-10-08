import { styled } from "styled-components";

export const Nav = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    top:0;
    margin-top: 30px;
    margin-bottom: 30px;
    align-items: center;
    justify-content: center;

`;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Navegacao({children}:any){
    return(
        <Nav>
            {children}
        </Nav>
    )



}