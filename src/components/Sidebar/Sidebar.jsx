import styles from "./Sidebar.module.css"
import {PencilLine} from 'phosphor-react'

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://blog.rocketseat.com.br/content/images/2020/08/boost.png" alt="cover" />
        <div className={styles.profile}>
          <img className={styles.profilepic} src="https://avatars.githubusercontent.com/u/39110220?v=4" alt="profilePic" />
          
          <strong>Nicolas Segatto</strong>
          <span>FullStack Developer</span>
        </div>
        <footer>
          <a href="#">
            <PencilLine size={20}/> Editar seu perfil
          </a>
        </footer>   
    </aside>
  )
}