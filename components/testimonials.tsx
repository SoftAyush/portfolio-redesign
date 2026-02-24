"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { testimonials } from "@/data/testimonials"
import { useRef, useState, useEffect } from "react"

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleScroll = () => {
      // Calculate the approximate index based on scroll position
      // This assumes all items have roughly the same width and are snapped
      const scrollLeft = el.scrollLeft
      const scrollWidth = el.scrollWidth
      const clientWidth = el.clientWidth
      const itemWidth = clientWidth / (el.children.length > 0 ? el.children.length : 1) // Approximate item width

      // Calculate the index based on the scroll position relative to the total scrollable width
      // and the number of items.
      // A more robust solution might involve observing intersection or calculating based on actual item widths.
      const totalItems = testimonials.length
      const scrollPercentage = scrollLeft / (scrollWidth - clientWidth)
      const newIndex = Math.round(scrollPercentage * (totalItems - 1))

      setActiveIndex(newIndex)
    }

    el.addEventListener("scroll", handleScroll, { passive: true })
    // Initial check in case the component mounts with a non-zero scroll position
    handleScroll()
    return () => el.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="py-32 relative overflow-hidden bg-background">
      {/* Immersive background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[160px]" />
      </div>

      <div className="container px-4 md:px-6 lg:px-8 mx-auto relative z-10">
        <div className="max-w-2xl mb-24 relative z-0">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.5em] text-primary mb-6 block"
          >
            Kind Words
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 font-serif italic"
          >
            What They Say.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-xl leading-relaxed max-w-lg"
          >
            Testimonials from partners and visionaries who share a passion for exceptional digital engineering.
          </motion.p>
        </div>

        <div className="relative group/container z-10">
          {/* Enhanced Ambient Lighting */}
          <div className="absolute inset-0 pointer-events-none -z-10">
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] mix-blend-screen" />
          </div>

          <div
            ref={scrollRef}
            className="flex flex-nowrap gap-10 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-24 pt-4 -mx-4 px-4 md:-mx-8 md:px-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="w-full min-w-full md:w-[calc(50%-1.25rem)] md:min-w-[calc(50%-1.25rem)] lg:w-[calc(33.33%-1.66rem)] lg:min-w-[calc(33.33%-1.66rem)] snap-center shrink-0 relative z-0 hover:z-10"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="group relative h-full"
                >
                  {/* Premium Layered Glow */}
                  <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative h-full glass border border-white/10 dark:border-white/5 rounded-3xl p-8 md:p-10 flex flex-col shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] transition-all duration-700 group-hover:border-primary/30 group-hover:bg-primary/[0.02]">
                    {/* Header: Avatar + Info */}
                    <div className="flex items-center gap-5 mb-8">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Avatar className="h-14 w-14 rounded-full border border-primary/20 relative z-10 transition-transform duration-500 group-hover:scale-110">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} className="object-cover" />
                          <AvatarFallback className="bg-primary/5 text-primary text-sm font-bold">
                            {testimonial.name.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-lg text-foreground tracking-tight group-hover:text-primary transition-colors duration-300 truncate">
                          {testimonial.name}
                        </h3>
                        <p className="text-[11px] text-muted-foreground font-bold uppercase tracking-[0.2em] mt-1.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Quote Content Below */}
                    <div className="relative mt-auto">
                      <div className="absolute -top-10 -left-6 text-7xl font-serif text-primary/5 pointer-events-none animate-float select-none">“</div>
                      <p className="text-[16px] md:text-lg text-foreground/90 leading-relaxed antialiased font-serif italic tracking-tight relative z-10">
                        {testimonial.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Minimalist Progress Indicator */}
          <div className="flex justify-center gap-3 mt-4">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${i === activeIndex
                  ? 'w-10 bg-primary opacity-100 shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                  : 'w-2 bg-primary/20 opacity-50'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
