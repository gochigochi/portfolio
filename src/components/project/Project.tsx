import { Project } from "../../types"
import Links from "./links/Links"
import Stack from "./stack/Stack"

type PropsTypes = {
    project: Project
}

const Project = ({ project } : PropsTypes) => {
  return (
    <article className="flex flex-col gap-4">
        <header className="flex gap-6 sticky top-0 themed-bg bg-white z-10 py-2 lg:relative lg:py-0">
            <h3 className="font-bold text-2xl">{project.client}</h3>
            <div className="relative pt-2">
                <Links url={project.url} github={project.github} />
            </div>
        </header>
        <p className="max-w-xl">{project.description}</p>
        <Stack stack={project.stack} />
    </article>
  )
}

export default Project