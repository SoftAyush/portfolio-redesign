"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import { education } from "@/data/education"

export function EducationSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

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
            Academic Background
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 font-serif italic"
          >
            Education.
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div ref={containerRef} className="relative ml-4 md:ml-0 pl-12 md:pl-20 space-y-24">
            {/* Reactive Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/5">
              <motion.div
                className="absolute top-0 left-0 right-0 bottom-0 bg-primary origin-top shadow-[0_0_15px_hsl(var(--primary)/0.5)]"
                style={{ scaleY }}
              />
            </div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary duration-500">
                      {edu.degree}
                    </h3>
                    <p className="text-lg md:text-xl font-medium text-muted-foreground/80 mt-2 font-serif italic">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm self-start group-hover:border-primary/30 transition-colors duration-500">
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary whitespace-nowrap">
                      {edu.year}
                    </span>
                  </div>
                </div>

                <div className="relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 transition-all duration-500 group-hover:border-white/10 group-hover:bg-white/[0.04] max-w-3xl">
                  <p className="text-muted-foreground text-lg leading-relaxed antialiased">
                    {edu.description}
                  </p>
                  {/* Subtle decorative quote/element if needed */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

