import { pageMetadata } from "@/lib/metadata"
import { AboutSection } from "@/components/about-section"
import { SkillsShowcase } from "@/components/skills-showcase"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { Testimonials } from "@/components/testimonials"

export const metadata = pageMetadata({
  title: "About",
  description:
    "Mobile engineer specialising in Flutter, Kotlin Multiplatform and native Android. Background, skills, experience and the engineering principles behind the work.",
  path: "/about",
  type: "profile",
})

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
