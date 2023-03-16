import Card from "componentes/Card";
import card1 from "assets/cards/card1fernandao.png";
import card2 from "assets/cards/card2skate.png";
import card3 from "assets/cards/card3inter.png";
import styles from "./CardBox.module.css";

export default function CardBox() {
    return (
        <div className={styles.cardBox}>
            <Card alt="Card do Jogador Fernandão erguendo taça da Copa Libertadores" path={card1} />
            <Card alt="Card do Jogador Fernandão erguendo taça da Copa Libertadores" path={card2} />
            <Card alt="Card do Jogador Fernandão erguendo taça da Copa Libertadores" path={card3} large="largeBox" largePic="largeCard" />
        </div>
    )
}