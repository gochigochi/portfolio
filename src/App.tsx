import Hero from "./components/hero/Hero"
import Nav from "./components/layout/nav/Nav"
import Projects from "./components/projects/Projects"
import Experience from "./components/experience/Experience"
import Stack from "./components/stack/Stack"
import Academic from "./components/academic/Academic"
import { projects, sideProjects } from "./consts/projects"
import { altStack, mainStack } from "./consts/stacks"
import Footer from "./components/layout/footer/Footer"
import Langs from "./components/langs/Langs"
import Scroll from "./components/layout/scroll/Scroll"

function App() {
  return (
    <div>
      <Nav />
      <Scroll />
      <main className="flex flex-col gap-20 lg:gap-24 mt-6">
        <Hero />
        <div className="section grid gap-x-4 gap-y-16 lg:gap-y-2 grid-cols-12">
          <div className="col-span-12 lg:col-span-7 lg:pb-20 order-2 lg:order-none">
            <Projects title="Proyectos recientes" projects={projects} />
          </div>
          <div className="col-span-12 lg:col-span-5 order-first lg:order-none">
            <div className="sticky top-4">
              <Experience />
              <div className="mt-2">
                <Stack title="Stack principal" stack={mainStack} />
              </div>
              <div className="block lg:hidden mt-2">
                <Stack title="Experiencia usando" stack={altStack} />
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 order-3 lg:order-none">
            <Projects title="Proyectos personales" projects={sideProjects} />
          </div>
          <div className="col-span-12 lg:col-span-5 order-last lg:order-none">
            <div className="top-4">
              <div className="hidden lg:block">
                <Stack title="Experiencia usando" stack={altStack} />
              </div>
              <div className="mt-2">
                <Academic />
              </div>
              <div className="mt-2">
                <Langs />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
