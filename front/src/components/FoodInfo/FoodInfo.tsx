import styled from "styled-components";
import { alimentosProps } from "../../types";

const Tooltip = styled.div<{ isVisible: boolean }>`
  display: ${props => (props.isVisible ? 'grid' : 'none')};
  position: absolute;
  bottom: 100%; // Posiciona acima do botão
  left: 50%;
  text-align: center;
  
  transform: translateX(-50%);
  background-color: #333; 
  color: white; 
  padding: 8px 12px;
  border-radius: 4px;
  z-index: 1; 
  grid-template-columns: repeat(2, 1fr);
  max-height: 300px; 
  gap: 30px; 
  overflow-y: auto; 
  @media (max-width: 600px) {
        grid-template-columns: 1fr;
        max-height: 200px; 
        
    }
`;
interface InfoToolProps {
    data: alimentosProps;
    isVisible: boolean;
}

export default function FoodInfo(props:InfoToolProps){
    const fields = {
        "adição de açúcar": props.data.pp_acucaradicao,
        "açúcar total": props.data.pp_acucartotal,
        "ácido linoleico": props.data.pp_aglinoleico,
        "ácido mono": props.data.pp_agmono,
        "ácido poli (lático)": props.data.pp_agpoli,
        "ácido saturado (gordura)": props.data.pp_agsaturado,
        "ácido trans total": props.data.pp_agtranstotal,
        "cálcio": props.data.pp_calcio,
        "carboidrato": props.data.pp_carboidrato,
        "cobalamina": props.data.pp_cobalamina,
        "cobre": props.data.pp_cobre,
        "colesterol": props.data.pp_colesterol,
        "energia": props.data.pp_energia,
        "ferro": props.data.pp_ferro,
        "fibra": props.data.pp_fibra,
        "folato": props.data.pp_folato,
        "fósforo": props.data.pp_fosforo,
        "lipídios": props.data.pp_lipidios,
        "magnésio": props.data.pp_magnesio,
        "manganês": props.data.pp_manganes,
        "niacina": props.data.pp_niacina,
        "niacina (ne)": props.data.pp_niacina_ne,
        "piridoxina": props.data.pp_piridoxina,
        "potássio": props.data.pp_potassio,
        "proteína": props.data.pp_proteina,
        "retinol": props.data.pp_retinol,
        "riboflavina": props.data.pp_riboflavina,
        "selênio": props.data.pp_selenio,
        "sódio": props.data.pp_sodio,
        "sódio adição": props.data.pp_sodioadicao,
        "tiamina": props.data.pp_tiamina,
        "vitamina A": props.data.pp_vitamina_a,
        "vitamina C": props.data.pp_vitamina_c,
        "vitamina D": props.data.pp_vitamina_d,
        "vitamina E": props.data.pp_vitamina_e,
        "zinco": props.data.pp_zinco
    };

    return (
        <Tooltip isVisible={props.isVisible}>
            {Object.entries(fields).map(([key, value]) => (
                <div key={key}>{key}: {value}</div>
            ))}
        </Tooltip>
    );

}
