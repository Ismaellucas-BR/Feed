import Aside from "./components/Aside"
import ContentMain from "./components/ContentMain"
import Header from "./components/Header"

function App() {

  return (
    <>
      <Header/>
      <div className="grid grid-cols-1 sm:grid-cols-[256px_1fr] max-w-[70rem] my-8 mx-auto py-0 px-4 gap-8 items-start">
        <Aside/>
        <main>
          <ContentMain/>
          <ContentMain/>
          <ContentMain/>
          <ContentMain/>
        </main>
      </div>
    </>
  )
}

export default App
