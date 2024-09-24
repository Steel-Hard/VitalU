import styled from 'styled-components'



export const FlexDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`
export const FlexDivLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;

`


export const FlexDivCo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;

`
export const FlexDivResp = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 5px;
    justify-content: center;
    width: 100%;

`
export const FlexDivWe = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 100%;
    `

export const Container = styled.div`
  height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; // Mantido no topo
  width: 100%;
  box-sizing: border-box; 
`;

export const Stlform = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 100%;

  @media (min-width: 769px) {
    flex-direction: row;
    width: 100%;
  }
`
export const StlformReverse = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 30px;
  justify-content: center;
  margin: 0;
 

  @media (max-width: 769px) {
    flex-direction: column;

  }
`
;
;