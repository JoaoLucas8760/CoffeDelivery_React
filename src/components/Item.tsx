import styles from "../styles/item.module.css";

import { Input } from "./input";
import { Removebutton } from "./Removebutton";

export function Item(props: any) {
  return (
    <div className={styles.div}>
      <article className={styles.article}>
        <section className={styles.imgANDinfos}>
          <img src={props.img} className={styles.img} />
          <div className={styles.nameANDbuttons}>
            <div className={styles.namecoffe}>
              <p>{props.nome}</p>
            </div>
            <div className={styles.inputANDbutton}>
              <Input />
              <Removebutton />
            </div>
          </div>
        </section>

        <div className={styles.price}>
          <span>R$ 9,90</span>
        </div>
      </article>
    </div>
  );
}
