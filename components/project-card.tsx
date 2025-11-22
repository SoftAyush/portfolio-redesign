"use client"

import Image from "next/image"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import { GithubIcon, Eye, ExternalLink } from "lucide-react";
import type {Project} from "@/types/project"
import {useState} from "react"
import {Skeleton} from "@/components/ui/skeleton"
import {UIModal} from "@/components/ui-modal"

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({project}: ProjectCardProps) {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <Card className="overflow-hidden group">
            <div className="relative aspect-video overflow-hidden">
                {!imageLoaded && <Skeleton className="absolute inset-0"/>}
                <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    onLoad={() => setImageLoaded(true)}
                />
            </div>
            <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                            {tech}
                        </Badge>
                    ))}
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter className="gap-2">
                <Button onClick={() => setIsModalOpen(true)}>
                    <Eye className="mr-2 h-4 w-4"/>
                    View UI
                </Button>
                <Button variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="mr-2 h-4 w-4"/>
                        Source
                    </a>
                </Button>
                {project.liveDemo && (
                    <Button variant="outline" asChild>
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live
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

