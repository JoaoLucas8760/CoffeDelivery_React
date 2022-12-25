import styles from "../styles/posheader.module.css";
import { ShoppingCartSimple, Package, Timer, Coffee } from "phosphor-react";

import img from "../assets/Imagem.svg";
import { Listcoffes } from "../components/Listcoffes";

export function Home() {
  return (
    <div>
      <article className={styles.article}>
        <div className={styles.ladoesquerdodapagina}>
          <header className={styles.header}>
            <p>
              Encontre o café perfeito <br></br> Para qualquer hora do dia{" "}
            </p>

            <span>
              Com o Coffe delivery você recebe seu café onde estiver, a qualquer
              hora
            </span>
          </header>

          <div className={styles.icons}>
            <article className={styles.line1}>
              <section className={styles.elemento1}>
                <div className={styles.iconcarrinho}>
                  <ShoppingCartSimple size={16} weight="fill" />
                </div>
                <p>Compra simples e segura</p>
              </section>

              <section className={styles.elemento2}>
                <div className={styles.iconbox}>
                  <Package size={16} />
                </div>
                <p>Embalagem Mantem o café intacto</p>
              </section>
            </article>

            <article className={styles.line1}>
              <section className={styles.elemento3}>
                <div className={styles.icontimer}>
                  <Timer size={16} weight="fill" />
                </div>
                <p>Entrega Rápida e rastreada</p>
              </section>

              <section className={styles.elemento4}>
                <div className={styles.iconcoffe}>
                  <Coffee size={16} weight="fill" />
                </div>
                <p>O café chega fresquinho até você</p>
              </section>
            </article>
          </div>
        </div>

        <div className={styles.ladodireitodapagina}>
          <img src={img} />
        </div>
      </article>

      <Listcoffes />
    </div>
  );
}
