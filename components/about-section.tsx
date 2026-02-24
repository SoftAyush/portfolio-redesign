"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"

export function AboutSection() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-muted shadow-2xl">
              {!imageLoaded && <Skeleton className="absolute inset-0" />}
              <Image
                src="/assets/Aayush.jpg"
                alt="Ayush Timalsina - Personal Portrait"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
                The Persona
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Engineering <br />
                With Precision.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I am a specialized Mobile Engineer with over 2 years of experience in crafting high-end digital experiences. My approach blends technical excellence with deep appreciation for design aesthetics.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                From early-stage startups to established enterprises, I&apos;ve helped teams deliver robust, scalable applications that users love. I specialize in Flutter, Native Android (Kotlin), and building modular architectures that stand the test of time.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe that software is a craft, and every line of code should serve a purpose—whether it&apos;s improving performance, enhancing security, or simply making the UI feel more human.
              </p>
            </div>

            <div className="pt-8 flex flex-wrap gap-8">
              <div className="flex flex-col">
                <span className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Strategy</span>
                <span className="text-muted-foreground">User-Centric</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Philosophy</span>
                <span className="text-muted-foreground">Clean & Modular</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Focus</span>
                <span className="text-muted-foreground">Mobile Ecosystem</span>
              </div>
            </div>

            <div className="pt-8">
              <Button size="lg" className="rounded-full px-8" asChild>
                <Link href="/portfolio">Explore My Solutions</Link>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

