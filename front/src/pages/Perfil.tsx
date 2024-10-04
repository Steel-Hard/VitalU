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

    async function obterUsuario() {
        const res = await user.obterDados()
        const usuarioDados = new Profile()
        usuarioDados.fromJson(res.dados)
        setUsuario(usuarioDados)
    }

    useEffect(() => {
        obterUsuario()
    }, [])

    return (
        <>
            <LinhaSld/>
            <div className={css.main}>
                <div className={css.perfil}>
                    <div>
                        <div className={css.img}>
                            <img src={usuario.getFoto()} alt="Foto de perfil" />
                        </div>
                        <div className={css.identificacao}>
                            <div>
                                <strong>{usuario.getNome()}</strong>
                                <p>{usuario.getEmail()}</p>
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
                            <label>Email:</label>
                            <p>{usuario.getEmail()}</p>
                        </div>
                        <div>
                            <label>Genêro:</label>
                            <p>{usuario.getGenero()}</p>
                        </div>
                        <div>
                            <label>Data de Nascimento:</label>
                            <p>{usuario.getDataNascimento()}</p>
                        </div>
                        <div>
                            <label>Altura:</label>
                            <p>{usuario.getAltura()}</p>
                        </div>
                        <div>
                            <label>Peso:</label>
                            <p>{usuario.getPeso()}</p>
                        </div>
                        <div>
                            <label>IMC:</label>
                            <p>{usuario.calcularIMC()}</p>
                        </div>
                        <div>
                            <label>Objetivo:</label>
                            <p>{usuario.getObjetivoPeso()}</p>
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
                        <button onClick={obterUsuario}>ADICIONAR ALIMENTO</button>
                    </div>
                </div>
            </div>
        </>
    )
}