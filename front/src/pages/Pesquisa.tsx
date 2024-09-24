import { useEffect,useState } from "react"
import { LinhaSld, StlInput, Nav,FlexDivCo,FlexDiv, StlCaixa,FoodCard} from "../components/index"
import foods from  '../services/foods'



export function Pesquisa(){
   const [alimentos,setAlimento] = useState([])

    useEffect(() =>{
        foods.buscarCategoria(1,setAlimento);
      
    },[])



    return(
        <>
            <LinhaSld/>
            <FlexDivCo>
        <FlexDivCo>


            <Nav>
                <StlCaixa>10/10/1999</StlCaixa>
            </Nav>
                <FlexDiv>
                    <StlInput bcolor='#ffffff' width='60%' height='40px' placeholder='Pesquisa Alimento' />
                    <button>Pesquisa</button>
                </FlexDiv>
                
            </FlexDivCo>
            {
                alimentos ? alimentos.map((obj,i) => <FoodCard key={i} data={obj}/>) : <div>carregando</div>       
            }
        </FlexDivCo>
        </>
    )
}
