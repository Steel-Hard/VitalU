import { useContext, useEffect, useRef, useState } from "react";
import {
  StlCaixa,
  BtnStl,
  HiddenButton,
  StlformReverse,
  FlexDiv,
  TitleFoods,
  FoodInfo,
  DescFoods,
} from "../index";
import { BsFillInfoSquareFill } from "react-icons/bs";

import styled from "styled-components";
import { alimentosProps, produtoProps } from "../../types";

import user from "../../services/user";
import { SearchCtx } from "../../context/searchContext";

interface alimentosData {
  data: alimentosProps | produtoProps;
}

const ButtonContainer = styled.div`
  position: relative; 
  display: inline-block;
`;

export default function FoodCard(props: alimentosData) {
  const [count, setCount] = useState(1);
  const [consu, setConsu] = useState("Consumir");
  const [isVisible, setVisible] = useState(false);
  const buttonRef = useRef<HTMLDivElement | null>(null); // Tipando a ref corretamente

  const wordSet = () => {
    setConsu("Consumido...");
    setTimeout(() => setConsu("Consumir"), 1000);
  };

  const toggleVisible = () => {
    setVisible((prevVisible) => !prevVisible); // Usando callback para garantir a consistência do estado
  };

  const { tipo, triger } = useContext(SearchCtx);

  // Função para controlar o clique fora do botão
  useEffect(() => {
    setCount(1);
    const pageClickEvent = (e: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
        setVisible(false); // Fechando o menu quando o clique for fora
      }
    };

    if (isVisible) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isVisible, tipo, triger]);

  // Verifica se o dado é do tipo alimentosProps
  const isAlimento = (data: alimentosProps | produtoProps): data is alimentosProps => {
    return (data as alimentosProps).pro_descricao !== undefined;
  };

  return (
    <StlCaixa direction="row" width="80%">
      <StlformReverse>
        <FlexDiv direction="column" margin="10px" width="20%">
          {/* Exibe diferentes propriedades dependendo do tipo de dado */}
          {isAlimento(props.data) ? (
            <>
              <TitleFoods>{props.data.pro_descricao}</TitleFoods>
              <DescFoods>Preparação:</DescFoods>
              <p>{props.data.preparacao}</p>
            </>
          ) : (
            <>
              <TitleFoods>{props.data.nome}</TitleFoods>
              <DescFoods>Descrição:</DescFoods>
              <p>{props.data.descricao}</p>
            </>
          )}
        </FlexDiv>

        <ButtonContainer ref={buttonRef}>
          <BtnStl
            onClick={toggleVisible}
            bgColor="transparent"
            title="Exibir informações nutricionais"
          >
            <BsFillInfoSquareFill color="#ff5137" size={25} />
          </BtnStl>
          <FoodInfo data={props.data} isVisible={isVisible} />
        </ButtonContainer>

        <FlexDiv gap="20px" margin="10px" directionOn1100="row">
          <HiddenButton
            bgColor="#FF3700"
            onClick={() => {
              setCount((prev) => (prev > 1 ? prev - 1 : prev)); 
            }}
            visible={count > 1}
          >
            -
          </HiddenButton>
          {count}
          <BtnStl
            onClick={() => {
              setCount((prev) => prev + 1); 
            }}
          >
            +
          </BtnStl>
        </FlexDiv>

        <BtnStl
          onClick={() => {
            if (isAlimento(props.data)) {
              user.adicionarTaco(props.data.id, props.data.pp_preparacao, count);
            } else {
              user.adicionarProduto(props.data.id, count);
            }
            wordSet();
            setCount(1)
          }}
        >
          {consu}
        </BtnStl>
      </StlformReverse>
    </StlCaixa>
  );
}
