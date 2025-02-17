"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skills = [
  "HTML",
  "CSS",
  "Vanilla JavaScript ",
  "PHP",
  "Laravel",
  "MSSQL/MYSQL",
  "Java Native",
  "Kotlin",
  "Firebase",
  "Flutter",
  "Dart",
  "Kotlin Multiplatform",
  "Agile Development",
  "CI/CD",
  "App Store Optimization",
]

export function SkillsShowcase() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Skills & Expertise</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Badge variant="secondary" className="text-lg py-2 px-4">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

