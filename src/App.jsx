import { Header } from './components/Header'
import { Post} from './components/Post'
import { Sidebar } from './components/Sidebar'

import style from './App.module.css'
import './global.css'

function App() {

  return (
    <div >
      <Header/>
      
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="mpvasco" 
            content="nojiafhidoash ihdfsdfhu syhgdgddg sd d fd sa sad "
          />
          <Post 
            author="yevercoza" 
            content="nojiafhidoash ihdfsdfhu syhgdgddg sd d fd sa sad "
          />
        </main>
      </div>

    </div>
  )
}

export default App
