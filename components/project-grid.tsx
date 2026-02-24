"use client"

import { ProjectCard } from "@/components/project-card"
import { useProjectFilter } from "@/hooks/use-project-filter"
import { motion } from "framer-motion"
import { projects } from "@/data/projects"

export function ProjectGrid() {
  const { activeFilter } = useProjectFilter()

  const filteredProjects = projects.filter((project) => (activeFilter === "All" ? true : project.type === activeFilter))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
      {filteredProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  )
}

