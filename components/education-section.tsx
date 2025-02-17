"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {education} from "@/data/education"

export function EducationSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <Card>
                <CardHeader>
                  <CardTitle>{edu.degree}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">{edu.year}</p>
                  <p className="text-sm">{edu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

