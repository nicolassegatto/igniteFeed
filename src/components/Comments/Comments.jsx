import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'
import styles from './Comments.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/diego3g.png" hasBorder={false}/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.autorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title='11 de maio as 08hr' dateTime="2022-05-11 08:11:00">
                Cerca de 1hr atrás
              </time>
            </div>
            <button title='excluir comentario'> <Trash size={24} /> </button>
          </header>
          <p>Adorei seu portfolio!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={24} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}