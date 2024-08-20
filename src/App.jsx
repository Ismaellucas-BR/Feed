import Aside from "./components/Aside"
import ContentMain from "./components/ContentMain"
import Header from "./components/Header"

const posts=[
  {
    id:0,
    author:{
      avatarUrl:'https://avatars.githubusercontent.com/u/101995298?s=100&v=4',
      name:"Jonas Nunes",
      role:"Desenvolvedor Front-end"
    },
    content:[
      {type:'paragraph',content:'Fala galeraa 👋'},
      {type:'paragraph',content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link',content:'👉 jane.design/doctorcare'},
      {type:'link',content:'#novoprojeto'},
      {type:'link',content:'#nlw'},
      {type:'link',content:'#rocketseat'},
    ],
    publishedAt:new Date("2024-08-16 08:00:00"),
  },
  {
    id:1,
    author:{
      avatarUrl:'https://avatars.githubusercontent.com/u/39921021?s=80&v=4',
      name:"Victor Vinicius",
      role:"Desenvolvedor Front-end"
    },
    content:[
      {type:'paragraph',content:'eai Rei 👋'},
      {type:'paragraph',content:'Acabei de subir n mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link',content:'👉 aleixo.design/pokemon'},
      {type:'link',content:'#novoprojetoo'},
      {type:'link',content:'#nlww'},
      {type:'link',content:'#rocketseatt'},
    ],
    publishedAt: new Date("2024-08-17 18:33:00"),
  },
]

function App() {

  return (
    <>
      <Header/>
      <div className="grid grid-cols-1 sm:grid-cols-[256px_1fr] max-w-[70rem] my-8 mx-auto py-0 px-4 gap-8 items-start">
        <Aside/>
        <main>
          {posts.map(post=>{
            return (
              <ContentMain
               key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
