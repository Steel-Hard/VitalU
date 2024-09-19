import { useState } from "react"
import Campform from "../../components/Campform/Campform"
import { BtnStl } from"../Button/Button"
import { FlexDiv, FlexDivCo } from "../FlexDiv/FlexDIv";
import { FatorAtividade,Genero } from "../../enum/Objetivos";// foi tirado o "genero" para uma edição direto no "sexo"
import { CalculosMetabolicos } from "../../class/calculosmet";

export default function Calcimc() {
    const [peso, setPeso] = useState<number>(0);
    const [altura, setAltura] = useState<number>(0); // altura em metros
    const [idade, setIdade] = useState<number>(0);
    const [sexo, setSexo] = useState<string>(''); // 'masculino' ou 'feminino'
    const [imc, setImc] = useState<any>(null);
    const [tmb, setTmb] = useState<any>(null);
    const [fator, setFator] = useState<string>('Pouco ou nenhum exercício');


    return (
        <><FlexDivCo>
            <p>Cálculo do IMC e TMB</p>
            <Campform label="Peso (kg)" state={peso} funcState={setPeso} />
            <Campform label="Altura (cm)" state={altura} funcState={setAltura} />
            <Campform label="Idade (anos)" state={idade} funcState={setIdade} />

            <FlexDiv>
                <label>Sexo:</label>
                <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
                <option value="">Selecione</option> {/* Opção inicial vazia */}
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                </select>
            </FlexDiv>

            <FlexDiv>
                <label>Basal atividade:</label>
                <select value={fator} onChange={(e) => setFator(e.target.value)}>

                    <option value={FatorAtividade.sedentario}>Sedentario</option>
                    <option value={FatorAtividade.atividadeLeve}>Atividade Leve</option>
                    <option value={FatorAtividade.atividadeModerada}>Atividade Moderada</option>
                    <option value={FatorAtividade.atividadeIntensa}>Atividade Intensa</option>
                    <option value={FatorAtividade.atividadeMuitoIntensa}>Atividade Muito Intensa</option>
            
                </select>
            </FlexDiv>



            <BtnStl onClick={() => {
                setImc(CalculosMetabolicos.imc(altura,peso))
                setTmb(CalculosMetabolicos.basal(altura,peso,idade,sexo,fator))
            
            }}>Calcular</BtnStl>

            
        </FlexDivCo> 

            <FlexDiv>{imc !== null && <p>Resultado do IMC: {imc}</p>}
            {tmb !== null && <p>Taxa Metabólica Basal (TMB): {tmb} kcal/dia</p>}
        </FlexDiv></>            //verificar formatação flexdiv para aparecer abaixo do calcular não ao lado
    );
}
