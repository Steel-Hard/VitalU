import styled from 'styled-components'

interface FlexProps{
  width?: string;
  height?: string;
  margin?: string;
  direction?: string;
  bgColor?: string;
  gap?: string;
}


export const FlexDiv = styled.div<FlexProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${({direction}) => direction? direction: 'unset'};
    width: ${({width}) => width? width:'auto'};
    height: ${({height}) => height? height: 'auto'};
    margin: ${({margin}) => margin? margin:margin};
    background-color: ${({bgColor}) => bgColor? bgColor:'transparent'};
    gap: ${({gap}) => gap? gap:'0px'}
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
  margin: 10px;
  gap: 20px;
  padding: 5px;


  @media (max-width: 769px) {
    flex-direction: row;

  }
`
export const StlformReverse = styled.div`
  display: flex;
  width: 100%;
  height:100%;
  align-items: center;
  justify-content: space-between;

  padding: 30px;
  margin: 0;
 

  @media (max-width: 769px) {
    flex-direction: column;

  }
`
;
;