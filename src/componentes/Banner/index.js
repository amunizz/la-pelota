import styles from "./Banner.module.css";
import imagemBanner from "assets/banner.png";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <img alt="imagem do jogador Hadar" src={imagemBanner} />
        </div>
    )
}