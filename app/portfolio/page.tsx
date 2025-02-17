import { ProjectGrid } from "@/components/project-grid"
import { ProjectFilters } from "@/components/project-filters"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24 pb-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Portfolio</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A showcase of my development projects, featuring Flutter, native Android
            applications and Web development.
          </p>
        </div>
        <ProjectFilters />
        <ProjectGrid />
      </div>
    </div>
  )
}

