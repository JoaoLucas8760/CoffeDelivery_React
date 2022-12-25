import styles from "../styles/checkout.module.css";
import {
  CurrencyDollar,
  MapPinLine,
  CreditCard,
  Money,
  Bank,
} from "phosphor-react";

import { Cafeselected } from "../components/Cafeselected";

export function Checkout({ cart }: any) {
  const carrinho = JSON.parse(`${localStorage.getItem("carrinho")}`);
  console.log(carrinho);
  return (
    <article className={styles.article}>
      <div className={styles.header}>
        <span>Complete seu pedido</span>
        <span>Cafés selecionados</span>
      </div>

      <article className={styles.mainpage}>
        <section className={styles.ladoesquerdo}>
          <section className={styles.mainbox}>
            <div className={styles.headerdiv}>
              <MapPinLine className={styles.iconmappin} size={22} />
              <p>Endereço de entrega</p>
            </div>
            <div className={styles.subheader}>
              <span> Informe o endereço onde deseja receber o seu pedido</span>
            </div>

            <article className={styles.inputs}>
              <input
                className={styles.cepinput}
                type="text"
                placeholder="CEP"
              />
              <input className={styles.rua} type="text" placeholder="Rua" />
              <div className={styles.numeroEcomplemento}>
                <input
                  className={styles.numero}
                  type="text"
                  placeholder="Número"
                />
                <input
                  className={styles.complemento}
                  type="text"
                  placeholder="Complemento"
                />
              </div>

              <div className={styles.bairroEcidadeEuf}>
                <input
                  className={styles.bairro}
                  type="text"
                  placeholder="Bairro"
                />
                <input
                  className={styles.cidade}
                  type="text"
                  placeholder="Cidade"
                />
                <input className={styles.uf} type="text" placeholder="UF" />
              </div>
            </article>
          </section>

          <div className={styles.areapagamentos}>
            <div className={styles.headerpag}>
              <CurrencyDollar className={styles.icondollar} size={22} />
              <span>Pagamento</span>
            </div>
            <div className={styles.subheaderpag}>
              <span>
                O pagamennto é feito na entrega. Escolha a forma que deseja
                pagar
              </span>
            </div>

            <div className={styles.metodos}>
              <div className={styles.buttons}>
                <CreditCard className={styles.iconmethods} size={16} />
                <button>CARTÃO DE CRÉDITO</button>
              </div>
              <div className={styles.buttons}>
                <Bank className={styles.iconmethods} size={16} />
                <button>CARTÃO DE DÉBITO</button>
              </div>

              <div className={styles.buttons}>
                <Money className={styles.iconmethods} size={16} />
                <button>DINHEIRO</button>
              </div>
            </div>
          </div>
        </section>

        <Cafeselected />
      </article>
    </article>
  );
}
