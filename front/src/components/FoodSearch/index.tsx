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

          <StlCaixa direction="row" width="100%" radius="5px" jcont="space-between" height="50px">
            <StlInput 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={e => {if(e.key == 'Enter') setTriger(true)}}
              bcolor="#ffffff"
              width="auto"
              height="50px"
              placeholder="Pesquisa Alimento"
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
              <BtnStl>Inserir Novo Alimento</BtnStl>
            </Link>
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
