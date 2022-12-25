import styles from "../styles/card.module.css";
import expresso from "../assets/expressocoffe.svg";
import { Input } from "./input";
import { ShoppingCartSimple } from "phosphor-react";
import { useState } from "react";

export function Card({ img, type, nome, onClick }: any) {
  const [valor, setValor] = useState(0);

  return (
    <article className={styles.article}>
      <img src={img} className={styles.imgcoffe} />
      <div className={styles.typecoffe}>
        <span>{type}</span>
      </div>

      <div className={styles.infos}>
        <p>{nome}</p>

        <span>O Tradicional café com água quente e grãos moidos</span>
      </div>
      <div className={styles.addcar}>
        <div className={styles.price}>
          <span>R$</span>

          <p>9,90</p>
        </div>

        <div className={styles.inputANDicon}>
          <Input valor={valor} setValor={setValor} />

          <button onClick={onClick} className={styles.iconcar}>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </div>
      </div>
    </article>
  );
}
