import { useEffect, useContext } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { IoSearchSharp,IoHome } from "react-icons/io5";
import MesesDoAno from "../../enum/MesesDoAno";
import {dicas} from '../../enum/dicas'
import {
  LinhaSld,
  StlInput,
  FlexDiv,
  StlCaixa,
  FoodCard,
  FoodCategorias,
  Navegacao,
  BtnStl,
  Tip
} from "../index";
import foods from "../../services/foods";
import { SearchCtx } from "../../context/searchContext";
import { Link } from "react-router-dom";
import { FiInfo } from "react-icons/fi";
import styled from "styled-components";


export function FoodSearch() {
  const { triger, alimentos, setAlimento, setTriger, query, setQuery } = useContext(SearchCtx);
  const mesesDoAno = Object.values(MesesDoAno)
  const dataAtual = new Date();

  useEffect(() => {
    if (triger) {
      foods.pesquisar(query, setAlimento);
      setTriger(false);
      setQuery("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triger]);
  


  const InfoIcon = styled(FiInfo)`
    color: black;
    cursor: pointer;
    size: 16px;
    @media(max-width:1100px){
    display:none;
    }
  `




  return (
    <>
      <LinhaSld><Tip message={dicas.pesquisa}/></LinhaSld>
      <FlexDiv direction="column">
        <FlexDiv direction="column">
          <Navegacao>
            <Link to="/perfil">
              <IoHome size={50}/>
            </Link>
            <h3>
              {dataAtual.getDate()} de {mesesDoAno[dataAtual.getMonth()]} de {dataAtual.getFullYear()}    
            </h3>
            <div>
              <FaCalendarAlt  size={45}/>
            </div>
          </Navegacao>

          <StlCaixa direction="row" width="95%" radius="5px"  height="20px">
            <StlInput
              maxLength={50}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={e => {if(e.key == 'Enter') setTriger(true)}}
              type="text"
              bcolor="transparent"
              width="auto"
              height="50px"
              placeholder="Pesquisa de alimentos"
            />
            <button style={{ background: 'transparent', border: 'none', flex: 1, height: '50px' }}
              onClick={() => {
                if (query.length === 0) {
                  return;
                }
                setTriger(true);
              }}
            >
              <IoSearchSharp  size={30}/>      
            </button>
          </StlCaixa>
          <FlexDiv margin="20px" gap="20px">
            <FoodCategorias />
            <Link to="/cadastro/alimento">
              <BtnStl title="">Inserir Novo Alimento</BtnStl>
            </Link>
              <InfoIcon title="Aqui você pode inserir seus próprios alimentos, caso não os encontre na nossa base de dados."></InfoIcon>
          </FlexDiv>
        </FlexDiv>
        
        {alimentos.taco.length === 0 && alimentos.produto.length === 0 ? (
          <div>Não foi possivel encontrar alimento.</div>
        ) : (
          <>
            {alimentos.taco ? alimentos.taco.map((obj, i) => <FoodCard key={i} data={obj} />) : null}
            {alimentos.produto ? alimentos.produto.map((obj, i) => <FoodCard key={i} data={obj} />) : null}
          </>
        )}
      </FlexDiv>
    </>
  );
}
