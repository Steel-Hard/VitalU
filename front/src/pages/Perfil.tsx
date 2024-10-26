import Profile from "../class/Profile"

import css from "../styles/perfilPage.module.css"
import config from "../assets/config.svg"
import MesesDoAno from "../enum/MesesDoAno"
import {dicas} from '../enum/dicas'
import { BtnStl, LinhaSld,Tip,Upload} from "../components/index"
import user from "../services/user"
import { useEffect, useState } from "react"
import converterData from "../utils/converterData"
import AlimentoDoDia from "../class/AlimentosDoDia"
import Alimento from "../class/Alimento"


export default function Perfil() {
    const mesesDoAno = Object.values(MesesDoAno)
    const [usuario, setUsuario] = useState<Profile>(new Profile())
    const [dataInput, setDataInput] = useState<string>(converterData(new Date()))

    async function obterProdutosConsumidos(usuarioDados: Profile, data: string) {
        const res = await user.obterProdutosConsumidos(data)
        const tacos: [] = res.taco
        tacos.forEach((taco: { nome_produto: string, data_consumo: string,quantidade_consumida:number}) => {
            const alimento: Alimento = new Alimento(taco.nome_produto)
            //console.log(alimento)
            const alimentoConsumido: AlimentoDoDia = new AlimentoDoDia(alimento,taco.quantidade_consumida , new Date(taco.data_consumo))
            usuarioDados.adicionarAlimentoConsumido(alimentoConsumido)
        })
        return usuarioDados
    }

    async function obterUsuario() {
        const res = await user.obterDados()
    
        let usuarioDados = new Profile()
        usuarioDados.fromJson(res.dados)
        usuarioDados = await obterProdutosConsumidos(usuarioDados, dataInput)
        setUsuario(usuarioDados)
        //console.log(usuario.getEmail())
        //console.log(usuario.getAltura())
     
    }

  

    function handleDataInput(e: React.ChangeEvent<HTMLInputElement>) {
        setDataInput(e.target.value)
    }

    useEffect(() => {
        obterUsuario();
        
       
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dataInput])

    return (
        <>
            <LinhaSld><Tip message={dicas.perfil}/></LinhaSld>
            <div className={css.main}>
                <div className={css.perfil}>
                    <div>
                        
                        <div>


                            {usuario.getEmail() ? <div>
                                
                                <Upload userEmail={usuario.getEmail()?.replace(/\s+/g, '')}/>
                            </div>:null }
                        </div>
                            
                        
                        
                        <div className={css.identificacao}>
                            <div>
                                {!usuario.getNome() ? <strong>Nome não encontrado</strong> : <strong>{usuario.getNome()}</strong>}
                                {!usuario.getEmail() ? <p></p> : <p>{usuario.getEmail()}</p>}
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className={css.informacoes}>
                    <div className={css.info}>
                        <div>
                            <label>Data de Nascimento:</label>
                            {!usuario.getDataNascimento() ? <p className={css.error}>Não registrada</p> : <p>{usuario.getDataNascimento()}</p>}
                        </div>
                        <div>
                            <label>Genêro:</label>
                            {!usuario.getGenero() ? <p className={css.error}>Não registrado</p> : <p>{usuario.getGenero()}</p>}
                        </div>
                        <div>
                            <label>Altura:</label>
                            {!usuario.getAltura() ? <p className={css.error}>Não registrada</p> : <p>{usuario.getAltura()}</p>}
                        </div>
                        <div>
                            <label>Peso:</label>
                            {!usuario.getPeso() ? <p className={css.error}>Não registrado</p> : <p>{usuario.getPeso()}</p>}
                        </div>
                        <div>
                            <label>IMC:</label>
                            <p>{usuario.calcularIMC()}</p>
                        </div>
                        <div>
                            <label>Objetivo:</label>
                            {!usuario.getObjetivoPeso() ? <p className={css.error}>Não registrado</p> : <p>{usuario.getObjetivoPeso()}</p>}
                        </div>
                    </div>
                    <div>
                        <BtnStl onClick={() => window.location.href = "./perfil/config"}> Verifique seu imc </BtnStl>
                    </div>
                    <hr />
                    <div className={css.alimentos}>
                        <div className={css.titulo}>
                            <h2>Alimentos</h2>
                            <p>
                                {dataInput.split("-")[2]} de {mesesDoAno[parseInt(dataInput.split("-")[1]) - 1]} de {dataInput.split("-")[0]}
                            </p>
                        </div>
                        <div className={css.lista}>
                            {usuario.getAlimentosConsumidos().length === 0 ? <div className={css.listaVazia}>
                                <p>Nenhum alimento consumido nessa data.</p>
                            </div> :
                                usuario.getAlimentosConsumidos().map((alimentoDoDia, index) => {
                                    return (
                                        <div className={css.alimento} key={index}>
                                            <p>
                                                {
                                                    alimentoDoDia.getDataDeConsumo().getHours() < 10 ? "0" + alimentoDoDia.getDataDeConsumo().getHours() : alimentoDoDia.getDataDeConsumo().getHours()
                                                }
                                                :
                                                {
                                                    alimentoDoDia.getDataDeConsumo().getMinutes() < 10 ? "0" + alimentoDoDia.getDataDeConsumo().getMinutes() : alimentoDoDia.getDataDeConsumo().getMinutes()
                                                }
                                            </p>
                                            <p>{alimentoDoDia.getQuantidade()}x</p>
                                            <p>{alimentoDoDia.getAlimento().getNome()}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={css.rodape}>

                        <div className={css.input}>
                            <input 
                                type="date" 
                                onChange={handleDataInput}
                                value={dataInput}
                                max={converterData(new Date())}
                            />
                        </div>

                        <button onClick={
                            () => { window.location.href = "/pesquisa" }
                        }>ADICIONAR ALIMENTO</button>

                    </div>
                </div>
            </div>
        </>
    )
}