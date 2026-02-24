"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { skillCategories } from "@/data/skills"

export function SkillsShowcase() {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      {/* Immersive background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="container px-4 md:px-6 lg:px-8 mx-auto relative z-10">
        <div className="max-w-2xl mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.5em] text-primary mb-6 block"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 font-serif italic"
          >
            Technical Mastery.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-xl leading-relaxed max-w-lg"
          >
            A curated stack of technologies and methodologies designed for high-performance engineering.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: categoryIndex * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="group relative h-full"
              >
                {/* Premium Layered Glow */}
                <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative h-full glass border border-white/10 dark:border-white/5 rounded-3xl p-8 md:p-10 flex flex-col shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] transition-all duration-700 group-hover:border-primary/30 group-hover:bg-primary/[0.02]">
                  <h3 className="text-2xl font-bold mb-8 tracking-tight group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.05),
                        }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-white/5 text-foreground/80 border-white/10 px-4 py-1.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

