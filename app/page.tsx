import { Hero } from "@/components/hero"
import { ServicesSection } from "@/components/services-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServicesSection />
    </div>
  )
}

