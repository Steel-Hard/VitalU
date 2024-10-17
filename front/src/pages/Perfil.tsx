import Profile from "../class/Profile"
import css from "../styles/perfilPage.module.css"
import config from "../assets/config.svg"
import MesesDoAno from "../enum/MesesDoAno"
import {dicas} from '../enum/dicas'
import { LinhaSld,Tip} from "../components/index"
import user from "../services/user"
import { useEffect, useState } from "react"
import converterData from "../utils/converterData"
import AlimentoDoDia from "../class/AlimentosDoDia"
import Alimento from "../class/Alimento"

export default function Perfil() {
    const mesesDoAno = Object.values(MesesDoAno)
    const [usuario, setUsuario] = useState<Profile>(new Profile())
    const [errorNome, setErrorNome] = useState<boolean>(false)
    const [errorEmail, setErrorEmail] = useState<boolean>(false)
    const [errorDataNascimento, setErrorDataNascimento] = useState<boolean>(false)
    const [errorGenero, setErrorGenero] = useState<boolean>(false)
    const [errorAltura, setErrorAltura] = useState<boolean>(false)
    const [errorPeso, setErrorPeso] = useState<boolean>(false)
    const [errorObjetivo, setErrorObjetivo] = useState<boolean>(false)

    const [dataInput, setDataInput] = useState<string>(converterData(new Date()))

    async function obterProdutosConsumidos(usuarioDados: Profile, data: string) {
        const res = await user.obterProdutosConsumidos(data)
        const tacos: [] = res.taco
        tacos.forEach((taco: { nome_produto: string, data_consumo: string }) => {
            const alimento: Alimento = new Alimento(taco.nome_produto)
            const alimentoConsumido: AlimentoDoDia = new AlimentoDoDia(alimento, 1, new Date(taco.data_consumo))
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
        validarDados()
    }

    //ajustar possiveis erros 
    function validarDados() {
        if (usuario.getNome() === "") setErrorNome(true)
        if (usuario.getEmail() === "") setErrorEmail(true)
        if (usuario.getDataNascimento() === "") setErrorDataNascimento(true)
        if (usuario.getGenero() === undefined) setErrorGenero(true)
        if (usuario.getAltura() === undefined) setErrorAltura(true)
        if (usuario.getPeso() === undefined) setErrorPeso(true)
        if (usuario.getObjetivoPeso() === undefined) setErrorObjetivo(true)
    }

    function handleDataInput(e: React.ChangeEvent<HTMLInputElement>) {
        setDataInput(e.target.value)
    }

    useEffect(() => {
        obterUsuario()
    })

    return (
        <>
            <LinhaSld><Tip message={dicas.perfil}/></LinhaSld>
            <div className={css.main}>
                <div className={css.perfil}>
                    <div>
                        <div className={css.img}>
                            <img src={usuario.getFoto()} alt="Foto de perfil" />
                        </div>
                        <div className={css.identificacao}>
                            <div>
                                {errorNome ? <strong>Nome não encontrado</strong> : <strong>{usuario.getNome()}</strong>}
                                {errorEmail ? <p></p> : <p>{usuario.getEmail()}</p>}
                            </div>
                            <img
                                src={config}
                                className={css.configuracoes}
                                onClick={() => window.location.href = "./perfil/config"}
                            />
                        </div>
                    </div>
                    <hr />
                </div>
                <div className={css.informacoes}>
                    <div className={css.info}>
                        <div>
                            <label>Data de Nascimento:</label>
                            {errorDataNascimento ? <p className={css.error}>Não registrada</p> : <p>{usuario.getDataNascimento()}</p>}
                        </div>
                        <div>
                            <label>Genêro:</label>
                            {errorGenero ? <p className={css.error}>Não registrado</p> : <p>{usuario.getGenero()}</p>}
                        </div>
                        <div>
                            <label>Altura:</label>
                            {errorAltura ? <p className={css.error}>Não registrada</p> : <p>{usuario.getAltura()}</p>}
                        </div>
                        <div>
                            <label>Peso:</label>
                            {errorPeso ? <p className={css.error}>Não registrado</p> : <p>{usuario.getPeso()}</p>}
                        </div>
                        <div>
                            <label>IMC:</label>
                            <p>{usuario.calcularIMC()}</p>
                        </div>
                        <div>
                            <label>Objetivo:</label>
                            {errorObjetivo ? <p className={css.error}>Não registrado</p> : <p>{usuario.getObjetivoPeso()}</p>}
                        </div>
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