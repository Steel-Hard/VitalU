/* eslint-disable @typescript-eslint/no-unused-expressions */
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
import styled from 'styled-components';
import { alimentosProps, produtoProps } from "../../types";
import { Stlform } from "../FlexDiv/FlexDiv";
import user from "../../services/user";

interface alimentosData {
  data: alimentosProps | produtoProps;
}

const ButtonContainer = styled.div`
  position: relative; // permitir posicionamento absoluto do cartão
  display: inline-block; // evitar que o cartão afete outros elementos
`;

export default function FoodCard(props: alimentosData) {
  const [count, setCount] = useState(1);
  const [isVisible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!isVisible);
  };

  // Verifica se o dado é do tipo alimento (com base em uma propriedade única)
  const isAlimento = (data: alimentosProps | produtoProps): data is alimentosProps => {
    return (data as alimentosProps).pro_descricao !== undefined;
  };

  return (
    <StlCaixa direction="row" width="80%" >
      <StlformReverse>
        <FlexDiv direction="column" margin="10px" width="20%">
          {/* Exibe diferentes propriedades dependendo do tipo de dado */}
          {isAlimento(props.data) ? (
            <>
              <TitleFoods>{props.data.pro_descricao}</TitleFoods>
              <h4>Preparação: {props.data.preparacao}</h4>
              
            </>
          ) : (
            <>
              <TitleFoods>{props.data.nome}</TitleFoods>
              <h4>descrição: {props.data.descricao}</h4>
            </>
          )}
        </FlexDiv>

        <ButtonContainer>
          <BtnStl onClick={toggleVisible}>
            Informações
          </BtnStl>
          <FoodInfo data={props.data} isVisible={isVisible}/>
        </ButtonContainer>

        <Stlform>
          <HiddenButton
            bgColor="#FF3700"
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

        <BtnStl onClick={() => {
          isAlimento(props.data)? user.adicionarTaco(props.data.id,props.data.pp_preparacao,count) : user.adicionarProduto(props.data.id,count)
        }}>
          Consumir
        </BtnStl>
      </StlformReverse>
    </StlCaixa>
  );
}
