import { Header } from "../../components/Header/Header";
import { Post } from "../../components/Post/Post";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import styles from './Home.module.css'

export function Home() {

  let titulo = "Titulo"
  let texto = "lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, consectetur adip"

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post title={titulo} text={texto} />
          <Post title={titulo} text={texto} />
        </main>
      </div>
    </div>
  )
}