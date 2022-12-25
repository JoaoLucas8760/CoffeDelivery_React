import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartContext } from "./contexts/CartContext";

import { Header } from "./components/Header";
import { Checkout } from "./screens/Checkout";
import styles from "./styles/home.module.css";
import { ShoppingCartSimple, Package, Timer, Coffee } from "phosphor-react";
import img from ".//assets/Imagem.svg";
import { Card } from "./components/card";

import expresso from "../src/assets/expressocoffe.svg";
import expressotradicional from "../src/assets/expressotradicionalcoffe.svg";
import expressogelado from "../src/assets/expressogelado.svg";
import cafeComLeite from "../src/assets/cafe-com-leite.svg";
import capuccino from "../src/assets/capuccino.svg";
import { useState } from "react";

const cafes = [
  {
    id: 1,
    nome: "Expresso Tradicional",
    type: "Tradicional",
    img: expressotradicional,
  },
  {
    id: 2,
    nome: "Expresso Americano",
    type: "Tradicional",
    img: expresso,
  },
  {
    id: 3,
    nome: "Expresso Gelado",
    type: "Tradicional",
    img: expressogelado,
  },
  {
    id: 4,
    nome: "Café com Leite",
    img: cafeComLeite,
  },
  {
    id: 5,
    nome: "Capuccino",
    img: capuccino,
  },
];

export function App() {
  const [cart, setCart] = useState([]);

  function addCoffeToCart(cafe: any) {}
  return (
    <CartContext.Provider value={{}}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <div>
                    <article className={styles.article}>
                      <div className={styles.ladoesquerdodapagina}>
                        <header className={styles.header}>
                          <p>
                            Encontre o café perfeito <br></br> Para qualquer
                            hora do dia{" "}
                          </p>

                          <span>
                            Com o Coffe delivery você recebe seu café onde
                            estiver, a qualquer hora
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

                    <article className={styles.ListCoffes}>
                      <h1>Nossos Cafés</h1>

                      <div className={styles.coffesFromListCoffes}>
                        {cafes.map((cafe) => {
                          return (
                            <Card
                              id={cafe.id}
                              key={cafe.id}
                              img={cafe.img}
                              type={cafe.type}
                              nome={cafe.nome}
                              onClick={() => addCoffeToCart(cafe)}
                            />
                          );
                        })}
                      </div>
                    </article>
                  </div>
                </div>
              }
            />
            <Route path="/checkout" element={<Checkout cart={cart} />} />
          </Routes>
        </div>
      </Router>
    </CartContext.Provider>
  );
}
