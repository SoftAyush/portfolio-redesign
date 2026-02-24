"use client"

import { motion } from "framer-motion"
import { experience } from "@/data/experience"

export function ExperienceSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto relative z-10">
        <div className="mb-24 relative z-0 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.5em] text-primary mb-6 block"
          >
            The Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 font-serif italic"
          >
            Professional Trajectory.
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="space-y-16">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="group relative"
                >
                  {/* Premium Layered Glow */}
                  <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="grid md:grid-cols-[1fr_2fr] gap-10 p-10 rounded-[2.5rem] glass border border-white/10 dark:border-white/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] transition-all duration-700 group-hover:border-primary/30 group-hover:bg-primary/[0.02]">
                    <div className="flex flex-col gap-4">
                      <div className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm self-start group-hover:border-primary/30 transition-colors duration-500">
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold group-hover:text-primary transition-colors duration-500 tracking-tight">
                        {exp.company}
                      </h3>
                      <p className="text-xl font-medium text-muted-foreground/80 font-serif italic">
                        {exp.position}
                      </p>
                    </div>

                    <div className="flex flex-col gap-4">
                      <ul className="space-y-4">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex gap-4 text-muted-foreground leading-relaxed">
                            <span className="mt-3 h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0 group-hover:bg-primary transition-colors duration-500" />
                            <span className="text-lg antialiased">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section >
  )
}

