export type Tag = {
    tag: string 
    icon: string
}

export type Project = {
    client: string
    description: string
    url: string
    github: string
    stack: Array<Tag>
}

export type Projects = Project[]