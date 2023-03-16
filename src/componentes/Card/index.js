import styles from "./Card.module.css";


export default function Card({ path, alt, large, largePic }) {
    return (
        <div className={`${styles.cardBox} ${styles[large]}`}>
            <img className={`${styles.cardBoxImage} ${styles[largePic]}`} alt={alt} src={path} />


        </div>
    )
}