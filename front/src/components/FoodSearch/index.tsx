import { useEffect, useContext } from "react";
import MesesDoAno from "../../enum/MesesDoAno";
import {
  LinhaSld,
  StlInput,
  FlexDiv,
  StlCaixa,
  FoodCard,
  FoodCategorias,
  Navegacao,
} from "../index";
import foods from "../../services/foods";
import { SearchCtx } from "../../context/searchContext";
export function FoodSearch() {
  const { triger, alimentos, setAlimento, setTriger, query, setQuery } = useContext(SearchCtx);
  const dataAtual = new Date();

  useEffect(() => {
    if (triger) {
      foods.pesquisar(query, setAlimento);
      setTriger(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triger]);

  return (
    <>
      <LinhaSld />
      <FlexDiv direction="column">
        <FlexDiv direction="column">
          <Navegacao>
            <div>
            {dataAtual.getDate()} de {MesesDoAno[dataAtual.getMonth()]} de {dataAtual.getFullYear()}    
            </div>
          </Navegacao>


          <StlCaixa direction="row">
            <StlInput
              onChange={(e) => setQuery(e.target.value)}
              bcolor="#ffffff"
              width="60%"
              height="40px"
              placeholder="Pesquisa Alimento"
            />
            <button
              onClick={() => {
                if (query.length === 0) {
                  return;
                }
                setTriger(true);
              }}
            >
              Pesquisa
            </button>
          </StlCaixa>
          <FlexDiv  margin="20px">
            <FoodCategorias />
          </FlexDiv>
        </FlexDiv>
        {alimentos ? (
          alimentos.map((obj, i) => <FoodCard key={i} data={obj} />)
        ) : (
          <div>carregando</div>
        )}
      </FlexDiv>
    </>
  );
}
