/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useContext, useEffect, useRef, useState } from "react";
import {
  StlCaixa,
  BtnStl,
  HiddenButton,
  StlformReverse,
  Stlform,
  FlexDiv,
  TitleFoods,
  FoodInfo
} from "../index";
import { BsFillInfoSquareFill } from "react-icons/bs";

import styled from 'styled-components';
import { alimentosProps, produtoProps } from "../../types";

import user from "../../services/user";
import { SearchCtx } from "../../context/searchContext";

interface alimentosData {
  data: alimentosProps | produtoProps;
}

const ButtonContainer = styled.div`
  position: relative; // permitir posicionamento absoluto do cartão
  display: inline-block; // evitar que o cartão afete outros elementos
`;

export default function FoodCard(props: alimentosData) {
  const [count, setCount] = useState(1);
  const [consu,setConsu] = useState("Consumir");
  const [isVisible, setVisible] = useState(false);
  const buttonRef = useRef(null);
  const wordSet = () => {
    setConsu("Consumido...")
    setTimeout(() => setConsu("Consumir"),1000);

  }

  const toggleVisible = () => {
    setVisible(!isVisible);
  };
  const {tipo,triger} = useContext(SearchCtx);
  //PARA CONTROLAR O CLICK FORA DO BOTÃO
  useEffect(() => {
    setCount(1)
    const pageClickEvent = (e) => {
      if (buttonRef.current !== null && !buttonRef.current.contains(e.target)) {
        setVisible(!isVisible); 
      }
    };
    if (isVisible) {
      window.addEventListener('click', pageClickEvent);
    }
    return () => {
      window.removeEventListener('click', pageClickEvent);
    }
  }, [isVisible,tipo,triger]);




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

        <ButtonContainer ref={buttonRef}>
          <BtnStl onClick={toggleVisible} bgColor="transparent"  title="Exibir informações nutricionais">
            <BsFillInfoSquareFill color="#ff5137"size={25} />
         </BtnStl>
          <FoodInfo data={props.data} isVisible={isVisible}/>
        </ButtonContainer>

        <FlexDiv gap="20px" margin="10px" directionOn1100="row" >
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
        </FlexDiv>

        <BtnStl onClick={() => {
          isAlimento(props.data)? user.adicionarTaco(props.data.id,props.data.pp_preparacao,count) : user.adicionarProduto(props.data.id,count);
          wordSet();

        }}>
          {consu}
        </BtnStl>
      </StlformReverse>
    </StlCaixa>
  );
}
