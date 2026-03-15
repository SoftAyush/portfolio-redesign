"use client"

import {motion} from "framer-motion"
import {Smartphone, Layout, Lightbulb, Code2} from "lucide-react"

const services = [
    {
        title: "Mobile Development",
        description: "High-performance cross-platform apps built with Flutter and Native technologies.",
        icon: Smartphone,
        tags: ["Flutter", "Kotlin", "Swift", "KMP"]
    },
    {
        title: "UI/UX Architecture",
        description: "Designing intuitive user flows and high-fidelity interfaces that prioritize conversion.",
        icon: Layout,
        tags: ["Flutter Flow", "Prototyping", "Design Systems"]
    },
    {
        title: "Technical Consultation",
        description: "Strategic advice on app architecture, performance optimization, and scaling.",
        icon: Lightbulb,
        tags: ["Architecture", "Scalability", "DevOps"]
    },
    {
        title: "Clean Code Audit",
        description: "Refactoring legacy codebases into modular, testable, and maintainable systems.",
        icon: Code2,
        tags: ["Refactoring", "Testing", "Documentation"]
    }
]

export function ServicesSection() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="max-w-xl mb-16">
                    <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
                        Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Specialized solutions for digital growth.
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        I help businesses launch and scale their mobile presence with intentional engineering.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: index * 0.1}}
                            className="p-8 rounded-[2rem] bg-background border border-border/50 hover:border-primary/50 transition-colors group"
                        >
                            <div
                                className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                <service.icon className="h-6 w-6"/>
                            </div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                                {service.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {service.tags.map((tag) => (
                                    <span key={tag}
                                          className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-muted px-2 py-1 rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
