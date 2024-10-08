import { FlexDiv,Select,Option } from "../index";
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
        
            
            <Select value={tipo}  onChange={(e) => {setTipo(parseInt(e.target.value))} }>
                <Option value={grupos.CereaisELeguminosas}>Cereais e leguminosas</Option>
                <Option value={grupos.HortaliçasTuberosas}>Hortaliças tuberosas</Option>
                <Option value={grupos.FarinhasFéculasEMassas}>Farinhas féculas e massas</Option>
                <Option value={grupos.CocosCastanhasENozes}>Cocos castanhas e nozes</Option>
                <Option value={grupos.HortaliçasFolhosasFrutosasEOutras}>Hortaliças folhosas frutosas e outras</Option>
                <Option value={grupos.Frutas}>Frutas</Option>
                <Option value={grupos.AçúcaresEProdutosDeConfeitaria}>Açúcares e produtos de confeitaria</Option>
                <Option value={grupos.SaisECondimentos}>Sais e condimentos</Option>
                <Option value={grupos.CarnesEVísceras}>Carnes e vísceras</Option>
                <Option value={grupos.PescadosEFrutosDoMar}>Pescados e frutosDoMar</Option>
                <Option value={grupos.EnlatadosEConservas}>Enlatados e conservas</Option>
                <Option value={grupos.AvesEOvos}>Aves e ovos</Option>
                <Option value={grupos.Laticínios}>Laticínios</Option>
                <Option value={grupos.Panificados}>Panificados</Option>
                <Option value={grupos.CarnesIndustrializadas}>Carnes industrializadas</Option>
                <Option value={grupos.BebidasNãoAlcoólicasEInfusões}>Bebidas não alcoólicas e infusões</Option>
                <Option value={grupos.BebidasAlcoólicas}>Bebidas alcoólicas</Option>
                <Option value={grupos.ÓleosEGorduras}>Óleos e gorduras</Option>
                <Option value={grupos.Miscelâneas}>Miscelâneas</Option>        
            </Select>
        
    )
}