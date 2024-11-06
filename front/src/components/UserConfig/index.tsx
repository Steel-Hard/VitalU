/* eslint-disable @typescript-eslint/no-explicit-any */
import user from "../../services/user";
import { useEffect, useState } from "react";

import {
  Select,
  Option,
  BtnStl,
  FlexDiv,
  GenderSelector,
  Campform,
  Message,
} from "../index";
import { FatorAtividade, Objetivos } from "../../enum/Objetivos";
import { CalculosMetabolicos } from "../../class/calculosmet";
import { calcularIdade } from "../../utils/calcularDatas";

export default function UserConfig() {
  const [dadosUsuario, setDadosUsuario] = useState({
    peso: 0,
    altura: 0, // altura em metros
    idade: "",
    sexo: "", // 'masculino' ou 'feminino'
    imc: "" as number | string,
    tmb: "" as number | string,
    fator: "",
    objetivo: "",
  });

  const [message, setMessage] = useState("");
  const atualizarDadosUsuario = (campo: string, valor: any) => {
    setDadosUsuario((prevState) => ({
      ...prevState,
      [campo]: valor,
    }));
  };

  const verificarCamposNulos = () => {
    const { peso, altura, idade, sexo, fator } = dadosUsuario;
    
    return !(
      peso === 0 ||
      !peso  ||
      !altura  ||
      altura === 0 ||
      idade === "" ||
      sexo === "" ||
      fator === ""
    );
  };
  useEffect(() => {
    user.obterDados().then((res: any) => {
      if (res.dados.peso != undefined) {
        atualizarDadosUsuario("peso", parseFloat(res.dados.peso));
        atualizarDadosUsuario("altura", parseInt(res.dados.altura));
        atualizarDadosUsuario("idade", res.dados.dataNascimento.slice(0, 10));
      }
    });
  }, []);

  return (
    <>
      <FlexDiv direction="column" gap="10px" margin="10px">
        <FlexDiv direction="row" align="baseline" gap="10px">
          <Campform
            value={dadosUsuario.peso}
            label="Peso (kg)"
            placeholder="Digite Seu Peso"
            type="weight"
            funcState={(value: any) => atualizarDadosUsuario("peso", value)}
          />
          <Campform
            value={dadosUsuario.altura}
            label="Altura (cm)"
            placeholder="Digite Sua Altura (cm)"
            type="height"
            funcState={(value: any) => atualizarDadosUsuario("altura", value)}
          />
          <Campform
            value={dadosUsuario.idade}
            label="Data De Nascimento"
            type="date"
            placeholder="Digite Sua Data De Nascimento"
            funcState={(value: any) => atualizarDadosUsuario("idade", value)}
          />
        </FlexDiv>
        <FlexDiv direction="row" align="baseline" gap="10px">
          <FlexDiv direction="column">
            <label>Gênero:</label>
            <GenderSelector
              setGen={(value) => atualizarDadosUsuario("sexo", value)}
            />
          </FlexDiv>
          <FlexDiv direction="column">
            <label>Atividade Física:</label>
            <Select
              value={dadosUsuario.fator}
              onChange={(e) => atualizarDadosUsuario("fator", e.target.value)}
            >
              <Option value={""}>Selecione</Option>
              <Option value={FatorAtividade.sedentario}>Sedentário</Option>
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
          <FlexDiv direction="column">
            <label>Objetivo:</label>
            <Select
              value={dadosUsuario.objetivo}
              onChange={(e) =>
                atualizarDadosUsuario("objetivo", e.target.value)
              }
            >
              <Option value={""}>Selecione</Option>
              <Option value={Objetivos.perderPeso}>Perder Peso</Option>
              <Option value={Objetivos.manterPeso}>Manter Peso</Option>
              <Option value={Objetivos.ganharPeso}>Ganhar Massa</Option>
            </Select>
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>

      <FlexDiv direction="column" margin="30px">
        <BtnStl
          height="40px"
          onClick={() => {
            if (!verificarCamposNulos()) {
              setMessage("Existem campos obrigatórios vazios.");
              return;
            }

            const { altura, peso, idade, sexo, fator, objetivo } = dadosUsuario;
            user.inserirDados(altura, peso, sexo, idade, objetivo, fator);
            const imc = CalculosMetabolicos.imc(altura, peso);
            const tmb = CalculosMetabolicos.basal(
              altura,
              peso,
              calcularIdade(idade),
              sexo,
              fator
            );

            setMessage("");
            atualizarDadosUsuario("imc", imc);
            atualizarDadosUsuario("tmb", tmb);
          }}
        >
          Salvar e Calcular
        </BtnStl>
      </FlexDiv>
      <Message height="30px" margin="30px" direction="column" visible={true}
        style={{
          color: message.includes("vazios")
            ? "#f54242"
            : "green"
        }}>
        {message ? message : null}
        {dadosUsuario.imc !== "" && (
          <div>
            <strong>Resultado do IMC:</strong> {dadosUsuario.imc}
          </div>
        )}
        {dadosUsuario.tmb !== "" && (
          <div>
            <strong>Taxa Metabólica Basal (TMB):</strong>{" "}
            {dadosUsuario.tmb + " kcal/dia"}
          </div>
        )}
      </Message>
    </>
  );
}
