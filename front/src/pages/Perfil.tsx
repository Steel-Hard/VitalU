import Profile from "../class/Profile"
import css from "../styles/perfilPage.module.css"
import config from "../assets/config.svg"

export default function Perfil() {
    const usuario = new Profile()

    return (
        <div className={css.main}>
            <div className={css.perfil}>
                <div>
                    <img src={usuario.getFoto()} alt="Foto de perfil" />
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

            </div>
        </div>
    )
}