import { useState } from "react";
import { Select,Option,BtnStl,FlexDiv,GenderSelector,Campform } from "../index";
import { FatorAtividade } from "../../enum/Objetivos"; // foi tirado o "genero" para uma edição direto no "sexo"
import { CalculosMetabolicos } from "../../class/calculosmet";


export default function Calcimc() {
  const [peso, setPeso] = useState<number>(0);
  const [altura, setAltura] = useState<number>(0); // altura em metros
  const [idade, setIdade] = useState<number>(0);
  const [sexo, setSexo] = useState<string>(""); // 'masculino' ou 'feminino'
  const [imc, setImc] = useState<number | string>();
  const [tmb, setTmb] = useState<number | string>();
  const [fator, setFator] = useState<string>("");

  return (
    <>
      <FlexDiv direction="column" gap="30px">
        <FlexDiv direction="column">
          <Campform label="Peso (kg)" state={peso} funcState={setPeso} />
          <Campform label="Altura (cm)" state={altura} funcState={setAltura} />
          <Campform label="Idade (anos)" state={idade} funcState={setIdade} />
        </FlexDiv>
        <FlexDiv direction="column" gap="20px" margin="20px">
          <FlexDiv>
            <GenderSelector setGen={setSexo}/>
          </FlexDiv>

          <FlexDiv direction="column">
            <label>Basal atividade:</label>
            <Select value={fator} onChange={(e) => setFator(e.target.value)}>
              <Option value={""}>Selecione</Option>
              <Option value={FatorAtividade.sedentario}>Sedentario</Option>
              <Option value={FatorAtividade.atividadeLeve}>
                Atividade Leve
              </Option>
              <Option value={FatorAtividade.atividadeModerada}>
                Atividade Moderada
              </Option>
              <Option value={FatorAtividade.atividadeIntensa}>
                Atividade Intensa
              </Option>
              <Option value={FatorAtividade.atividadeMuitoIntensa}>
                Atividade Muito Intensa
              </Option>
            </Select>
          </FlexDiv>
        </FlexDiv>
        <FlexDiv direction="column">
          <BtnStl
            onClick={() => {
              console.log(fator, sexo);
              if (fator == "" || sexo == "") {
                console.log("sem itens");
                return;
              }
              setImc(CalculosMetabolicos.imc(altura, peso));
              setTmb(
                CalculosMetabolicos.basal(altura, peso, idade, sexo, fator)
              );
            }}
          >
            Calcular
          </BtnStl>
          <FlexDiv direction="column">
            {imc !== null && <p>Resultado do IMC: {imc}</p>}
            {tmb !== null && <p>Taxa Metabólica Basal (TMB): {tmb} kcal/dia</p>}
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
    </> //verificar formatação flexdiv para aparecer abaixo do calcular não ao lado
  );
}
