"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GithubIcon, ExternalLink, ArrowUpRight } from "lucide-react"
import type { Project } from "@/types/project"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"

interface ProjectCardProps {
    project: Project
    /** Eagerly load the image — set on the first card, which is the page LCP. */
    priority?: boolean
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
    const href = `/portfolio/${project.slug}`

    return (
        // The whole card is one click target for the detail page. A stretched
        // overlay link (rather than wrapping the card in <a>) keeps the GitHub
        // and demo buttons as their own valid links, layered above it.
        <Card className="group relative overflow-hidden border-border/50 bg-background hover:border-primary/50 focus-within:border-primary/50 transition-all duration-500 rounded-[2rem]">
            <Link
                href={href}
                aria-label={`View ${project.title} project details`}
                className="absolute inset-0 z-10 rounded-[2rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            />

            <div className="relative aspect-video overflow-hidden bg-muted/30">
                <ImageWithFallback
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority={priority}
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    fallbackLabel={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <CardHeader className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold bg-muted/50 text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            {tech}
                        </Badge>
                    ))}
                </div>
                <CardTitle as="h2" className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-lg leading-relaxed line-clamp-2">
                    {project.description}
                </CardDescription>
            </CardHeader>

            <CardContent className="px-8 pb-4">
                <ul className="space-y-2">
                    {project.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="h-1 w-1 rounded-full bg-primary/40" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </CardContent>

            <CardFooter className="relative z-20 p-8 pt-4 gap-3">
                <Button className="rounded-full px-6 flex-1 md:flex-none" asChild>
                    <Link href={href}>
                        View Details <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                </Button>
                {project.github && (
                    <Button variant="outline" className="rounded-full w-12 h-12 p-0" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}>
                            <GithubIcon className="h-5 w-5" />
                        </a>
                    </Button>
                )}
                {project.liveDemo && (
                    <Button variant="outline" className="rounded-full w-12 h-12 p-0" asChild>
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
                            <ExternalLink className="h-5 w-5" />
                        </a>
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
}
