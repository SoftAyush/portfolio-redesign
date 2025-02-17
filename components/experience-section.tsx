"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {experience} from "@/data/experience"

export function ExperienceSection() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Professional Experience</h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{exp.position}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

