import styles from "./Footer.module.css";
import { ReactComponent as Facebook } from "assets/icones/facebook5.svg";
import { ReactComponent as Instagram } from "assets/icones/instagram.svg";
import { ReactComponent as Behance } from "assets/icones/behance.svg";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.iconesContainer}>
                <Facebook fill="white" className={styles.icone} />
                <Instagram fill="white" className={styles.icone} />
                <Behance fill="white" className={styles.icone} />
            </div>
        </footer>
    )
}