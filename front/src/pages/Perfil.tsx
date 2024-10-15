import Profile from "../class/Profile"
import css from "../styles/perfilPage.module.css"
import config from "../assets/config.svg"
import MesesDoAno from "../enum/MesesDoAno"
import { LinhaSld } from "../components/index"

import user from "../services/user"
import { useEffect, useState } from "react"



export default function Perfil() {
    const mesesDoAno = Object.values(MesesDoAno)
    const dataAtual = new Date()
    const [usuario, setUsuario] = useState<Profile>(new Profile())
    const [errorNome, setErrorNome] = useState<boolean>(false)
    const [errorEmail, setErrorEmail] = useState<boolean>(false)
    const [errorDataNascimento, setErrorDataNascimento] = useState<boolean>(false)
    const [errorGenero, setErrorGenero] = useState<boolean>(false)
    const [errorAltura, setErrorAltura] = useState<boolean>(false)
    const [errorPeso, setErrorPeso] = useState<boolean>(false)
    const [errorObjetivo, setErrorObjetivo] = useState<boolean>(false)

    async function obterUsuario() {
        const res = await user.obterDados()
        const usuarioDados = new Profile()
        usuarioDados.fromJson(res.dados)
    
        setUsuario(usuarioDados)
    }

    //ajustar possiveis erros ou usar o componente de PopUp
    //ex <Popup open={false} message="Seja bem-vindo(a)! Estamos felizes em tê-lo(a) aqui, para começar, preencha seu perfil clicando em ⚙️!"/>: null}
    function validarDados() {
        if (usuario.getNome() === "") setErrorNome(true)
        if (usuario.getEmail() === "") setErrorEmail(true)
        if (usuario.getDataNascimento() === "") setErrorDataNascimento(true)
        if (usuario.getGenero() === undefined) setErrorGenero(true)
        if (usuario.getAltura() === undefined) setErrorAltura(true)
        if (usuario.getPeso() === undefined) setErrorPeso(true)
        if (usuario.getObjetivoPeso() === undefined) setErrorObjetivo(true)
    }

    useEffect(() => {
        obterUsuario()
    }, [])

    return (
        <>
            <LinhaSld />
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
                                {dataAtual.getDate()} de {mesesDoAno[dataAtual.getMonth()]} de {dataAtual.getFullYear()}
                            </p>
                        </div>
                        <div className={css.lista}>
                            {usuario.getAlimentosConsumidos().map((alimentoDoDia, index) => {
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
                            })}
                        </div>
                    </div>
                    <div className={css.rodape}>
                      
                        <button onClick={() => {
                            window.location.href = "/pesquisa"
                        }}>ADICIONAR ALIMENTO</button>
                        
                    </div>
                </div>
            </div>
        </>
    )
}