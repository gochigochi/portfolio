export type Tag = {
    tag: string 
    icon: string
}

export type Project = {
    client: string
    description: string
    url?: string
    github: string
    stack: Array<Tag>
}

export type Projects = Project[]

export type Experience = {
    id: number
    title: string
    company: string
    period: string
    description: string
}

export type Experiences = Experience[]

export type Tech = {
    id: number
    src: string
    alt: string
}

export type StackTypes = Tech[]

export type Grade = {
    id: number
    title: string
    school: string
    year: string
}