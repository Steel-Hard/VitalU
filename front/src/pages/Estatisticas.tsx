/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { dicas } from "../enum/dicas";
import { Graph, LinhaSld, Navegacao, Tip,StlInput} from "../components/index";
import user from "../services/user";
import { calcularIdade } from "../utils/calcularDatas";
import Profile from "../class/Profile";
import converterData from "../utils/converterData";
import { CalculosMetabolicos } from "../class/calculosmet";
import { IoMdReturnLeft } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Estatisticas() {
  const [usuario, setUsuario] = useState<Profile>(new Profile());
  const [dataInput, setDataInput] = useState<string>(converterData(new Date()));
  const [produtos, setProdutos] = useState<any[]>([]);
  const [calorias, setCalorias] = useState(0);

  async function obterUsuario() {
    const res = await user.obterDados();
    const usuarioDados = new Profile();
    usuarioDados.fromJson(res.dados);
    setUsuario(usuarioDados);
  }

  async function obterProdutosConsumidos() {
    const res = await user.obterProdutosConsumidos(dataInput);
    setProdutos(res.taco); // Supondo que res.taco contenha os produtos
  }

  function handleDataInput(e: React.ChangeEvent<HTMLInputElement>) {
    setDataInput(e.target.value);
  }

  useEffect(() => {
    obterUsuario();
    obterProdutosConsumidos();
  }, [dataInput]);

  // Calcular taxa
  const basal = CalculosMetabolicos.basal(
    usuario.getAltura(),
    usuario.getPeso(),
    calcularIdade(converterData(usuario.getDataNascimento())),
    usuario.getGenero(),
    usuario.getAtividade()
  );

  const calcularCaloriasDiarias = async (produtos: any[]): Promise<number> => {
    console.log(produtos, "recebido na func");
    let totalCalorias = 0;

    for (const produto of produtos) {
      totalCalorias += produto.calorias * produto.quantidade_consumida;
    }

    return totalCalorias;
  };

  useEffect(() => {
    calcularCaloriasDiarias(produtos).then((total) => {
      setCalorias(total);
      console.log("Total de calorias:", total);
    });
  }, [produtos]);

  return (
    <>
      <LinhaSld>
        <Tip message={dicas.estatistica} />
      </LinhaSld>
      <Navegacao>
        <Link to="/perfil">
          <IoMdReturnLeft size={70} />
        </Link>
      </Navegacao>
     <div>

      <StlInput
        width="200px"
        height="30px"
        type="date"
        onChange={handleDataInput}
        value={dataInput}
        max={converterData(new Date())}
      />
     </div>

     
      <div>
        {/* Aqui você pode renderizar outros componentes ou informações */}
        <Graph
          basalRate={basal}
          goal={usuario.getObjetivoPeso()}
          caloriesConsumed={calorias}
        />
      </div>
    </>
  );
}
