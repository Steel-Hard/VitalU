/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { dicas } from '../enum/dicas';
import { GraficosCalorias, LinhaSld, Tip } from "../components/index";
import user from '../services/user';
import { calcularIdade } from "../utils/calcularDatas";
import Profile from "../class/Profile";
import converterData from "../utils/converterData";
import { CalculosMetabolicos } from '../class/calculosmet';

export default function Estatisticas() {
    const [usuario, setUsuario] = useState<Profile>(new Profile());
    const [dataInput, setDataInput] = useState<string>(converterData(new Date()));
    const [produtos, setProdutos] = useState<any[]>([]);

    async function obterUsuario() {
        const res = await user.obterDados();
        let usuarioDados = new Profile();
        usuarioDados.fromJson(res.dados);
        setUsuario(usuarioDados);
    }

    async function obterProdutosConsumidos() {
        const res = await user.obterProdutosConsumidos("2024-11-01");
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
        let totalCalorias = 0;

        for (const produto of produtos) {
            totalCalorias += produto.calorias * produto.quantidade_consumida;
        }

        return totalCalorias;
    };

    useEffect(() => {
        if (produtos.length > 0) {
            calcularCaloriasDiarias(produtos).then(total => {
                console.log("Total de calorias:", total);
            });
        }
    }, [produtos]);

    return (
        <>
            <LinhaSld><Tip message={dicas.perfil} /></LinhaSld> 
            <div>
                {/* Aqui você pode renderizar outros componentes ou informações */}
             
               
            </div>
        </>
    );
}
