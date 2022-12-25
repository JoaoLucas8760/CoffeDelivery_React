import { useState } from "react";

import styles from "../styles/cafeselected.module.css";
import { Item } from "./Item";
import expresso from "../assets/expressocoffe.svg";
import expressotradicional from "../assets/expressotradicionalcoffe.svg";
import expressogelado from "../assets/expressogelado.svg";

export function Cafeselected(id: any) {
  const [cart, setCart] = useState([]);

  function addCoffe() {}

  function remcafe() {}

  return (
    <article className={styles.article}>
      <div className={styles.cafeselecionados}>
        <Item img={expressotradicional} nome="Expresso Tradicional" />
        <Item img={expressogelado} nome="Expresso Gelado" />
      </div>

      <div className={styles.valores}>
        <div className={styles.totalitens}>
          <span>Total de itens</span>
          <p>R$ 29,70</p>
        </div>

        <div className={styles.entrega}>
          <span>Entrega</span>
          <p>R$ 3,50</p>
        </div>

        <div className={styles.total}>
          <span>Total</span>
          <p>R$ 33,20</p>
        </div>
      </div>

      <section className={styles.button}>
        <button>CONFIRMAR PEDIDO</button>
      </section>
    </article>
  );
}
