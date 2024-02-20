import Project from "../project/Project"
import { projects, sideProjects } from "./consts"

const Projects = () => {
  return (
    <section className="section flex flex-col gap-20">
        <h2>Proyectos Destacados</h2>
        {
            projects.map(project => {
                return <Project project={project} />
            })
        }
        <h2>Proyectos Personales</h2>
        {
            sideProjects.map(project => {
                return <Project project={project} />
            })
        }
    </section>
  )
}

export default Projects