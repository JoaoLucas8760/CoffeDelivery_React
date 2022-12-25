import styles from '../styles/removebutton.module.css'
import {Trash} from 'phosphor-react'

export function Removebutton () {
    return(
        <article className={styles.article}>
            <button> <Trash className={styles.icontrash} size={16} />REMOVER</button>
        </article>
    )
}