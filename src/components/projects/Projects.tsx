import { Projects } from "../../types"
import Project from "../project/Project"

type PropsTypes = {
    title?: string
    projects: Projects
}

const Projects = ({ title = "", projects }: PropsTypes) => {
    return (
        <section className="w-full max-w-6xl flex flex-col gap-12 lg:gap-20">
            {title ? <h2>{title}</h2> : null}
            {
                projects.map(project => {
                    return <Project key={project.client} project={project} />
                })
            }
        </section>
    )
}

export default Projects