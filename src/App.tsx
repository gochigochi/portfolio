import Hero from "./components/hero/Hero"
import Nav from "./components/layout/nav/Nav"
import Projects from "./components/projects/Projects"

function App() {

  return (
    <div>
      <Nav />
      <main className="flex flex-col gap-24 mt-6">
        <Hero />
        <Projects />
      </main>
    </div>
  )
}

export default App
