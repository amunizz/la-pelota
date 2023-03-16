
import MenuLink from "../MenuLink";
import styles from "./Menu.module.css";

export default function Menu() {


    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink path="/" texto="início" />
                //
                <MenuLink path="/manifesto" texto="manifesto" />
                //
                <MenuLink path="/servicos" texto="serviços" />
                //
                <MenuLink path="/contato" texto="contato" />
            </nav>
        </header>
    )
}