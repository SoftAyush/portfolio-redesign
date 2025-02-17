"use client"

import { ProjectCard } from "@/components/project-card"
import { useProjectFilter } from "@/hooks/use-project-filter"
import { motion } from "framer-motion"
import { projects } from "@/data/projects"

export function ProjectGrid() {
  const { activeFilter } = useProjectFilter()

  const filteredProjects = projects.filter((project) => (activeFilter === "All" ? true : project.type === activeFilter))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  )
}

