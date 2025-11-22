export interface Project {
  id: string
  title: string
  description: string
  type: "Flutter" | "Native Android" | "Web"
  image: string
  technologies: string[]
  features: string[]
  github: string
  uiImages: {
    src: string
    caption: string
  }[]
  liveDemo: any,
}

