import styled from "styled-components";
import { alimentosProps, produtoProps } from "../../types";

interface InfoToolProps {
  data: alimentosProps | produtoProps;
  isVisible: boolean;
}

const Tooltip = styled.div<{ isVisible: boolean }>`
  display: ${({isVisible}) => isVisible ? 'grid' : 'none'};
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

// Verificação de tipo para saber se o objeto é do tipo alimentosProps
const isAlimento = (data: alimentosProps | produtoProps): data is alimentosProps => {
  return (data as alimentosProps).pp_acucaradicao !== undefined;
};

export default function FoodInfo(props: InfoToolProps) {
  // Campos para alimentosProps
  const alimentoFields = isAlimento(props.data) ? {
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
  } : {};

  // Campos para produtoProps
  const produtoFields = !isAlimento(props.data) ? {
    "nome": props.data.nome,
    "quantidade": props.data.quantidade_por_porcao +  props.data.unidade_quantidade_por_porcao,
    "calorias": props.data.calorias,
    "proteína": props.data.proteina,
    "carboidrato": props.data.carboidrato,
    "açúcares": props.data.acucares,
    "fibras": props.data.fibras,
    "gordura total": props.data.gordura_total,
    "gordura saturada": props.data.gordura_saturada,
    "gordura trans": props.data.gordura_trans,
    "cálcio": props.data.calcio,
    "sódio": props.data.sodio
  } : {};

  const fields = isAlimento(props.data) ? alimentoFields : produtoFields;

  return (
    <Tooltip isVisible={props.isVisible}>
      {Object.entries(fields).map(([key, value]) => (
        <div key={key}>{key}: {value}</div>
      ))}
    </Tooltip>
  );
}
