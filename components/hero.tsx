"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Download, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"

export function Hero() {
    const [imageLoaded, setImageLoaded] = useState(false)

    const handleDownloadCV = () => {
        const link = document.createElement("a")
        link.href = "/assets/Ayush-Timalsina-Resume.pdf"
        link.download = "Ayush-Timalsina-Resume.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
            <div className="noise-overlay opacity-[0.02]" />
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-8"
                    >
                        <div>
                            <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
                                Available for Projects
                            </span>
                            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter uppercase mb-6">
                                Ayush <br />
                                <span className="text-muted-foreground/40">Timalsina.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                                Senior Mobile Engineer & UI Architect. I build high-performance, design-led digital products that scale.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="h-16 px-8 rounded-full text-lg font-bold group" asChild>
                                <Link href="/contact">
                                    Let&apos;s Talk
                                    <Mail className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="h-16 px-8 rounded-full text-lg font-bold" onClick={handleDownloadCV}>
                                Download CV
                                <Download className="ml-2 h-5 w-5" />
                            </Button>
                        </div>

                        <div className="flex items-center gap-8 pt-8 border-t border-border/50">
                            <div>
                                <p className="text-2xl font-bold">2+</p>
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Years Experience</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold">15+</p>
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Projects Delivered</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold">Nepal</p>
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Based Location</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 bg-muted shadow-2xl">
                            {!imageLoaded && <Skeleton className="absolute inset-0" />}
                            <Image
                                src="/assets/Aayush.jpg"
                                alt="Ayush Timalsina"
                                fill
                                className="object-cover"
                                priority
                                onLoad={() => setImageLoaded(true)}
                            />
                        </div>

                        {/* Magnetic Float Element */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 md:-left-12 glass p-6 rounded-3xl hidden md:block"
                        >
                            <p className="text-sm font-bold uppercase tracking-widest mb-1">Focusing on</p>
                            <p className="text-xl font-bold">Mobile Engineering</p>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
