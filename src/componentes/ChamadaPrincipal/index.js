import Banner from "componentes/Banner";
import BotaoPrincipal from "componentes/BotaoPrincipal";
import CardBox from "componentes/CardBox";
import styles from "./ChamadaPrincipal.module.css";
import logo from "./logo2x.png";


export default function ChamadaPrincipal() {
    return (
        <main className={styles.chamadaPrincipal}>
            <div>
                <img alt="logo da La Pelota" className={styles.logo} src={logo} />
                <h2 className={styles.tagline}>DESIGN // ESTRATÉGIA // CONTEÚDO</h2>
                <BotaoPrincipal>
                    MANIFESTO +
                </BotaoPrincipal>
                <BotaoPrincipal filled="filled">
                    A AGÊNCIA
                </BotaoPrincipal>
                <CardBox />
            </div>
            <Banner />

        </main>
    )
}