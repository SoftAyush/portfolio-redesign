import { Hero } from "@/components/hero"
import { ServicesSection } from "@/components/services-section"

// Title, description, canonical and OG card all come from the root layout.
// The FAQ lives on its own page at /faq, linked from the footer.

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServicesSection />
    </div>
  )
}
