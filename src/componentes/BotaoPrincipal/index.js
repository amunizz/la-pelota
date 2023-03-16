import styles from "./BotaoPrincipal.module.css";

export default function BotaoPrincipal({ children, filled }) {
    return (
        <button className={`
                ${styles.botao}
                ${styles[filled]}
                `}>
            {children}
        </button>
    )
}