import { useEffect,useState } from "react"
import { LinhaSld, StlInput, Nav,FlexDivCo,FlexDiv, StlCaixa,FoodCard} from "../components/index"
import foods from  '../services/foods'
import { grupos } from "../enum/grupos"
   
export function Pesquisa(){
   const [tipo, setTipo] = useState<number >(1);
   const [alimentos,setAlimento] = useState([]);
   const [triger,setTriger] = useState(false);
    useEffect(() =>{

        foods.buscarCategoria(tipo,setAlimento);
        if(triger){
            foods.pesquisar(Querry, setAlimento)
        }
    },[tipo, triger])

    
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
                    <button onClick={() => {setTriger(true)}}>Pesquisa</button>
                </FlexDiv>
                <FlexDiv>
                <label>Categoria:</label>
                <select value={tipo} onChange={(e) => {setTipo(e.target.value); setTriger(false)}}>
                    <option value={grupos.CereaisELeguminosas}>Cereais e leguminosas</option>
                    <option value={grupos.HortaliçasTuberosas}>Hortaliças tuberosas</option>
                    <option value={grupos.FarinhasFéculasEMassas}>Farinhas féculas e massas</option>
                    <option value={grupos.CocosCastanhasENozes}>Cocos castanhas e nozes</option>
                    <option value={grupos.HortaliçasFolhosasFrutosasEOutras}>Hortaliças folhosas frutosas e outras</option>
                    <option value={grupos.Frutas}>Frutas</option>
                    <option value={grupos.AçúcaresEProdutosDeConfeitaria}>Açúcares e produtos de confeitaria</option>
                    <option value={grupos.SaisECondimentos}>Sais e condimentos</option>
                    <option value={grupos.CarnesEVísceras}>Carnes e vísceras</option>
                    <option value={grupos.PescadosEFrutosDoMar}>Pescados e frutosDoMar</option>
                    <option value={grupos.EnlatadosEConservas}>Enlatados e conservas</option>
                    <option value={grupos.AvesEOvos}>Aves e ovos</option>
                    <option value={grupos.Laticínios}>Laticínios</option>
                    <option value={grupos.Panificados}>Panificados</option>
                    <option value={grupos.CarnesIndustrializadas}>Carnes industrializadas</option>
                    <option value={grupos.BebidasNãoAlcoólicasEInfusões}>Bebidas não alcoólicas e infusões</option>
                    <option value={grupos.BebidasAlcoólicas}>Bebidas alcoólicas</option>
                    <option value={grupos.ÓleosEGorduras}>Óleos e gorduras</option>
                    <option value={grupos.Miscelâneas}>Miscelâneas</option>        
                </select>
            </FlexDiv>

                
            </FlexDivCo>
            {
                alimentos ? alimentos.map((obj,i) => <FoodCard key={i} data={obj}/>) : <div>carregando</div>       
            }
        </FlexDivCo>
        </>
    )
}
