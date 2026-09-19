import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Check, ExternalLink, GithubIcon } from "lucide-react"
import { projects } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProjectGallery } from "@/components/project-gallery"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, graph, softwareApplicationSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/metadata"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((project) => project.slug === slug)

  if (!project) {
    return { title: "Project not found", robots: { index: false, follow: true } }
  }

  return pageMetadata({
    title: `${project.title} — ${project.type} Project`,
    description: project.description,
    path: `/portfolio/${project.slug}`,
    image: project.image,
  })
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((project) => project.slug === slug)

  if (!project) {
    notFound()
  }

  // Same-stack projects first so "More Projects" stays relevant.
  const otherProjects = [...projects]
    .filter((p) => p.slug !== slug)
    .sort((a, b) => Number(b.type === project.type) - Number(a.type === project.type))
    .slice(0, 2)

  return (
    <div className="min-h-screen bg-background pb-32 pt-24 md:pt-32">
      <JsonLd
        schema={graph(
          softwareApplicationSchema(project),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
            { name: project.title, path: `/portfolio/${project.slug}` },
          ]),
        )}
      />
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Back Navigation */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-12 transition-all active:scale-95"
          >
            <ArrowLeft className="h-3 w-3" /> Back to Portfolio
          </Link>

          {/* Project Header */}
          <div className="space-y-8 mb-16">
            <Badge className="bg-primary/10 text-primary border-none px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              {project.type}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold font-serif leading-[1.1] tracking-tight">
              {project.title}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.liveDemo && (
                <Button className="rounded-full px-6" asChild>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              )}
              {project.github && (
                <Button variant="outline" className="rounded-full px-6" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="mr-2 h-4 w-4" /> Source Code
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-[2.5rem] mb-16 bg-muted/30 border border-border/50 shadow-2xl">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Overview: features + tech stack */}
          <div className="grid md:grid-cols-[1fr_280px] gap-12 lg:gap-16 mb-24">
            <section className="space-y-8">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Key Features</h2>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4 text-lg text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <aside className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold bg-muted/50 text-muted-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Platform</h2>
                <p className="text-sm font-bold tracking-tight">{project.type}</p>
              </div>
            </aside>
          </div>

          {/* Screenshots */}
          {project.uiImages.length > 0 && (
            <section className="space-y-8 mb-24">
              <div className="space-y-2">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Screens</h2>
                <p className="text-sm text-muted-foreground">Tap any screen to open the full-size gallery.</p>
              </div>
              <ProjectGallery title={project.title} images={project.uiImages} />
            </section>
          )}

          {/* Footer Navigation */}
          <div className="pt-16 border-t border-border/50">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">
              <div className="max-w-xs space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Have a project in mind?</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I build Flutter, Kotlin Multiplatform and native Android apps from idea to store release.
                </p>
                <div className="pt-2">
                  <Button size="sm" variant="outline" className="rounded-full font-bold uppercase tracking-widest text-[10px]" asChild>
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>

              <div className="flex-1 space-y-8">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">More Projects</h4>
                <div className="grid sm:grid-cols-2 gap-8">
                  {otherProjects.map((other) => (
                    <Link key={other.slug} href={`/portfolio/${other.slug}`} className="group space-y-4 block">
                      <div className="relative aspect-video rounded-3xl overflow-hidden bg-muted/30 border border-border/50 group-hover:border-primary/50 transition-colors">
                        <Image src={other.image || "/placeholder.svg"} alt={other.title} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-contain transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">{other.type}</span>
                        <h5 className="font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                          {other.title}
                        </h5>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
