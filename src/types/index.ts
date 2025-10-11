export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface Skill {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'tools'
  level: number
}

export interface ContactForm {
  name: string
  email: string
  message: string
}


