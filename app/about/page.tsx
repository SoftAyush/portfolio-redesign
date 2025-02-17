import { AboutSection } from "@/components/about-section"
import { SkillsShowcase } from "@/components/skills-showcase"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { Testimonials } from "@/components/testimonials"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-4 md:pt-8">
      <main>
        <AboutSection />
        <SkillsShowcase />
        <EducationSection />
        <ExperienceSection />
        <Testimonials />
      </main>
    </div>
  )
}

