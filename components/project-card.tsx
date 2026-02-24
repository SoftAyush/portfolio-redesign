"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GithubIcon, Eye, ExternalLink } from "lucide-react";
import type { Project } from "@/types/project"
import { useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { UIModal } from "@/components/ui-modal"

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <Card className="group overflow-hidden border-border/50 bg-background hover:border-primary/50 transition-all duration-500 rounded-[2rem]">
            <div className="relative aspect-video overflow-hidden">
                {!imageLoaded && <Skeleton className="absolute inset-0" />}
                <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    onLoad={() => setImageLoaded(true)}
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
                <CardTitle className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
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

            <CardFooter className="p-8 pt-4 gap-3">
                <Button onClick={() => setIsModalOpen(true)} className="rounded-full px-6 flex-1 md:flex-none">
                    View Solution
                </Button>
                {project.github && (
                    <Button variant="outline" className="rounded-full w-12 h-12 p-0" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <GithubIcon className="h-5 w-5" />
                        </a>
                    </Button>
                )}
                {project.liveDemo && (
                    <Button variant="outline" className="rounded-full w-12 h-12 p-0" asChild>
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-5 w-5" />
                        </a>
                    </Button>
                )}
            </CardFooter>

            <UIModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={project.title}
                images={project.uiImages}
            />
        </Card>
    )
}

