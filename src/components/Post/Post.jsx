import { Comment } from '../comments/Comments'
import styles from './Post.module.css'

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/39110220?v=4" alt="postprofile" />
          <div className={styles.authorinfo}>
            <strong>Nicolas</strong>
            <span>FullStack Developer</span>
          </div>
        </div>
        <time title='11 de maio as 08hr' dateTime="2022-05-11 08:11:00">
          Publicado há 1hr
        </time>
      </header>

      <div className={styles.content}>

        <p>Fala galeraa 👋.</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.</p>
        <p>O nome do projeto é DoctorCare 🚀:</p>
        <p><a href='jane.design/doctorcare'>👉 Projetinho</a></p>
        <p>
          <a href=''>#novoprojeto</a>{' '}
          <a href=''>#nlw</a>{' '}
          <a href=''>#rocketseat</a>{' '}
        </p>

      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe um comentario'/>

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  )
}
