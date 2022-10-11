import { HandsClapping, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../Avatar/Avatar'
import styles from './Comments.module.css'

export function Comment({ content, onDeleteComment }) {

  const [Aplausos, setAplausos] = new useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleAplaudirComentario() {
    setAplausos((AplausosAtualizado) => {
      return AplausosAtualizado + 1
    })
    /*
    USAR ESTA FUNÇÃO PASSANDO UMA ARROW FUNC
    PERMITE COM QUE EU PEGUE SEMPRE O VALOR ATUALIZADO
    DO APLAUSO, AO INVES DE PEGAR O VALOR DO ESTADO.
    setAplausos((AplausosAtualizado) => {
      return AplausosAtualizado + 1
    })
    */
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/diego3g.png" hasBorder={false} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.autorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title='11 de maio as 08hr' dateTime="2022-05-11 08:11:00">
                Cerca de 1hr atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title='excluir comentario'> <Trash size={24} /> </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleAplaudirComentario}>
            <HandsClapping size={24} />
            Aplaudir <span>{Aplausos}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}