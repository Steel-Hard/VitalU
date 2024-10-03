import Profile from "../class/Profile"
import css from "../styles/perfilPage.module.css"
import config from "../assets/config.svg"
import MesesDoAno from "../enum/MesesDoAno"
import Alimento from "../class/Alimento"
import AlimentoDoDia from "../class/AlimentosDoDia"
import { LinhaSld } from "../components/index"



import { useEffect } from "react"
import user from "../services/user"


export default function Perfil() {
    const mesesDoAno = Object.values(MesesDoAno)
    const dataAtual = new Date()

    // variaveis de teste
    const usuario = new Profile()
    const alimentoDoDia1: AlimentoDoDia = new AlimentoDoDia(new Alimento("Maçã"), 1, new Date("2021-10-10 08:14:12"))
    const alimentoDoDia2: AlimentoDoDia = new AlimentoDoDia(new Alimento("Banana"), 2, new Date("2021-10-10 12:30:00"))
    const alimentoDoDia3: AlimentoDoDia = new AlimentoDoDia(new Alimento("Barra de cereal"), 3, new Date("2021-10-10 18:03:42"))
    usuario.adicionarAlimentoConsumido(alimentoDoDia1)
    usuario.adicionarAlimentoConsumido(alimentoDoDia2)
    usuario.adicionarAlimentoConsumido(alimentoDoDia3)

    useEffect(() => {
        user.obterDados();
    })

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
                        <button>ADICIONAR ALIMENTO</button>
                    </div>
                </div>
            </div>
        </>
    )
}