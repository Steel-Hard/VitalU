import { FlexDiv } from "../index";
import { grupos } from "../../enum/grupos";
import { useContext, useEffect } from "react";
import { SearchCtx } from "../../context/searchContext";
import foods from "../../services/foods";



export default function FoodCategorias(){
    const {tipo,setTipo,setAlimento} = useContext(SearchCtx);
    useEffect(() => {
        foods.buscarCategoria(tipo,setAlimento)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[tipo])
    return(
        <FlexDiv>
            <label>Categoria:</label>
            <select value={tipo}  onChange={(e) => {setTipo(parseInt(e.target.value))} }>
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
    )
}