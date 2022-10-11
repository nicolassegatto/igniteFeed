import {format, formatDistanceToNow} from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from 'react'
import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comments/Comments'
import styles from './Post.module.css'

export function Post({author, publishedAt, content}) {

  const [NewComment,setNewComment] = useState('')
  const [comments,setComments] = useState([])

  const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publisedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale:ptBR,
    addSuffix: true,
  })

  function handleNewComment(){
    setNewComment(event.target.value);
  }

  function handleAddToComments(){
    event.preventDefault();
    setComments([...comments, NewComment])
    setNewComment('');
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorinfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
          {publisedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>

      {content.map(OBJ => {
        if (OBJ.type === 'paragraph') {
          return(<p key={OBJ.content}>{OBJ.content}</p>)
        } else if (OBJ.type === 'link'){
          return(<p key={OBJ.content}><a href="#">{OBJ.content}</a></p>)
        }
      })}

      </div>

      <form onSubmit={handleAddToComments} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea  
          onChange={handleNewComment}
          value={NewComment}
          placeholder='Deixe um comentario' 
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(OBJ => {
          return <Comment key={OBJ} content={OBJ}/>
        })}
      </div>
    </article>
  )
}
