import styles from "../styles/input.module.css";

export function Input(props: any) {
  function adicionar() {
    props.setValor((prev) => prev + 1);
  }

  function diminuir() {
    props.setValor((prev) => {
      if (prev - 1 < 0) {
        return prev;
      }
      return prev - 1;
    });
  }

  return (
    <article className={styles.article}>
      <button onClick={diminuir}>-</button>

      <span>{props.valor}</span>
      <button onClick={adicionar}>+</button>
    </article>
  );
}
