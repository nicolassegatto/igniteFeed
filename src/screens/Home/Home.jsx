import { Header } from "../../components/Header/Header";
import { Post } from "../../components/Post/Post";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import styles from './Home.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/nicolassegatto.png",
      name: "Nicolas Segatto",
      role: "FullStack Developer",
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa ð." },
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat." },
      { type: 'paragraph', content: "O nome do projeto Ã© DoctorCare ð:" },
      { type: 'link', content: "ð Projetinho jane.design/doctorcare" },
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO at RocketSeat",
    },
    content: [
      { type: 'paragraph', content: "Fala Deeev ð." },
      { type: 'paragraph', content: "Espero que estejam aprendendo bastante com o curso" },
      { type: 'paragraph', content: "O nome do projeto Ã© RocketSeat ð:" },
      { type: 'link', content: "ð Projetinho jane.design/doctorcare" },
    ],
    publishedAt: new Date('2022-05-06 18:00:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/JoojVitor.png",
      name: "JoÃ£o Vitor",
      role: "Software Engineer",
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa ð." },
      { type: 'paragraph', content: "Salve salve salve, Ã© o homi" },
      { type: 'paragraph', content: "O nome do projeto Ã© algarb2b ð:" },
      { type: 'link', content: "ð Projetinho jane.design/doctorcare" },
    ],
    publishedAt: new Date('2022-04-03 22:00:00')
  },
];

export function Home() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(OBJ => {
            return (
              <Post
                key={OBJ.id}
                author={OBJ.author}
                content={OBJ.content}
                publishedAt={OBJ.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}