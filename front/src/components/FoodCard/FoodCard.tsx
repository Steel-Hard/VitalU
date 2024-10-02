import { useState } from "react";
import {
  StlCaixa,
  BtnStl,
  HiddenButton,
  StlformReverse,
  FlexDiv,
  TitleFoods,
  FoodInfo
} from "../index";
import  styled from 'styled-components'
import { alimentosProps } from "../../types";
import { Stlform } from "../FlexDiv/FlexDIv";

interface alimentosData {
  data: alimentosProps;
}

const ButtonContainer = styled.div`
  position: relative; // permitir posicionamento absoluto do cartão
  display: inline-block; // evitar que o cartão afete outros elementos
`;


export default function FoodCard(props: alimentosData) {
  const [count, setCount] = useState(1);
  const [isVisible,setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!isVisible);

  }
  return (
    <StlCaixa direction="row" width="60%" >
      <StlformReverse>
        <FlexDiv direction="column"  margin="10px" width="20%">
          <TitleFoods>{props.data.pro_descricao}</TitleFoods>
          <h4>{props.data.preparacao}</h4>        
        </FlexDiv>
        <ButtonContainer>
            <BtnStl onClick={toggleVisible}>
                Informações
            </BtnStl>
            <FoodInfo data={props.data} isVisible={isVisible}/>
        </ButtonContainer>
        <Stlform>

            <HiddenButton
            onClick={() => {
                setCount((prev) => (prev -= 1));
            }}
            visible={count > 1}
            >
            -
            </HiddenButton>
            {count}
            <BtnStl
            onClick={() => {
                setCount((prev) => (prev += 1));
            }}
            >
            +
            </BtnStl>
        </Stlform>

        <BtnStl>Adicionar</BtnStl>
      </StlformReverse>
    </StlCaixa>
  );
}




