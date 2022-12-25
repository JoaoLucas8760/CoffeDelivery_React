import styles from "../styles/header.module.css";
import { ShoppingCart, MapPin } from "phosphor-react";

import logo from "../assets/coffedeliveryheader.svg";

export function Header() {
  return (
    <article>
      <section className={styles.article}>
        <div>
          <a href="/">
            <img src={logo} />
          </a>
        </div>

        <div className={styles.locationANDshopicon}>
          <div className={styles.location}>
            <MapPin className={styles.iconmap} size={22} weight="fill" />
            <span>Fortaleza, CE</span>
          </div>

          <div className={styles.shopicon}>
            <a href="/checkout">
              <ShoppingCart size={22} weight="fill" />
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
