import { useEffect,useContext  } from "react"
import { LinhaSld, StlInput, Nav,FlexDivCo,FlexDiv, StlCaixa,FoodCard, FoodCategorias} from "../index"
import foods from  '../../services/foods'
import { SearchCtx } from "../../context/searchContext"
export function FoodSearch(){
    const {triger,alimentos,setAlimento,setTriger,query,setQuery} = useContext(SearchCtx)
  

    useEffect(() =>{
        if(triger){
            foods.pesquisar(query, setAlimento)
            setTriger(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[triger])

    
    return(
        <>

        <LinhaSld/>
        <FlexDivCo>
    <FlexDivCo>

        <Nav>
            <StlCaixa>10/10/1999</StlCaixa>
        </Nav>
            
            <StlCaixa  direction="row">
                <StlInput onChange={e => setQuery(e.target.value)} bcolor='#ffffff' width='60%' height='40px' placeholder='Pesquisa Alimento' />
                <button onClick={() => {
                    if(query.length === 0){
                        return;
                    }
                    setTriger(true);
                
                }}>Pesquisa</button>
            </StlCaixa>
            <FlexDiv gap="20px" margin="20px">
                <FoodCategorias/>
            </FlexDiv>   

        
                           
        </FlexDivCo>
        {
            alimentos ? alimentos.map((obj,i) => <FoodCard key={i} data={obj}/>) : <div>carregando</div>       
        }
    </FlexDivCo>
    </>
    )
}