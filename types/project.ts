export interface Project {
  id: string
  /** URL segment for the detail page: /portfolio/[slug] */
  slug: string
  title: string
  description: string
  type: "Flutter" | "Native Android" | "Web"
  image: string
  technologies: string[]
  features: string[]
  github: any
  uiImages: {
    src: string
    caption: string
  }[]
  liveDemo: any,
}

