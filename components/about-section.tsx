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
    <section className="py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="relative aspect-square">
              {!imageLoaded && <Skeleton className="absolute inset-0" />}
              <Image
                src="/assets/Aayush.jpg"
                alt="Ayush working on a project"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-lg text-muted-foreground">
              I'm a passionate mobile developer with a keen eye for design and a drive for creating
              seamless user experiences. With expertise in Flutter, and native app development, I bring
              ideas to life across multiple platforms.
            </p>
            <p className="text-lg text-muted-foreground">
              My journey in mobile development started 2 years ago, and since then, I've had the privilege
              of working on diverse projects ranging from startup MVPs to enterprise-level applications. I thrive on
              challenges and constantly push myself to learn new technologies and methodologies.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you can find me exploring new hiking trails, experimenting with
              photography, or contributing to open-source projects.
            </p>
            <Button size="lg" variant="outline" asChild className="w-fit">
              <Link href="/portfolio">View My Portfolio</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

