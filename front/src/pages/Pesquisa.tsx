import { useEffect,useState } from "react"
import { LinhaSld, StlInput, Nav,FlexDivCo,FlexDiv, StlCaixa,FoodCard} from "../components/index"
import foods from  '../services/foods'
import { useNavigate, useParams} from "react-router-dom"

   
export function Pesquisa(){
   const [alimentos,setAlimento] = useState([])
        const {querry} = useParams();
    useEffect(() =>{

        foods.buscarCategoria(1,setAlimento);
        if(querry){
            foods.pesquisar(querry, setAlimento)
        }
    },[])

    const navigate = useNavigate();

    const [Querry,setQuerry] = useState("");

    return(
        <>
            <LinhaSld/>
            <FlexDivCo>
        <FlexDivCo>


            <Nav>
                <StlCaixa>10/10/1999</StlCaixa>
            </Nav>
                <FlexDiv>
                    <StlInput onChange={e => setQuerry(e.target.value)} bcolor='#ffffff' width='60%' height='40px' placeholder='Pesquisa Alimento' />
                    <button onClick={() => {navigate(`/pesquisa/${Querry}`), window.location.reload()}}>Pesquisa</button>
                </FlexDiv>
                
            </FlexDivCo>
            {
                alimentos ? alimentos.map((obj,i) => <FoodCard key={i} data={obj}/>) : <div>carregando</div>       
            }
        </FlexDivCo>
        </>
    )
}
