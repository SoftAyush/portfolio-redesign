"use client"

import { Button } from "@/components/ui/button"
import { useProjectFilter } from "@/hooks/use-project-filter"

const filters = ["All", "Flutter", "Native Android", "Web",] as const

export function ProjectFilters() {
  const { activeFilter, setActiveFilter } = useProjectFilter()

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={activeFilter === filter ? "default" : "outline"}
          onClick={() => setActiveFilter(filter)}
          className="rounded-full"
        >
          {filter}
        </Button>
      ))}
    </div>
  )
}

