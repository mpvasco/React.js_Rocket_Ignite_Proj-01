import { Header } from './components/Header'
import { Post} from './components/Post'
import { Sidebar } from './components/Sidebar'

import style from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/mpvasco.png',
      name: 'mpvasco',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-07-25 02:56:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernanfes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      {type: 'paragraph', content: '2 Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-07-25 02:56:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/filipedeschamps.png',
      name: 'Filipe Deschamps',
      role: 'Irmão do Diego'
    },
    content: [
      {type: 'paragraph', content: '3 Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-07-26 02:56:00'),
  },
]





function App() {

  return (
    <div >
      <Header/>
      
      <div className={style.wrapper}>
        <Sidebar />
        <main>
            {posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })}
        </main>
      </div>

    </div>
  )
}

export default App
