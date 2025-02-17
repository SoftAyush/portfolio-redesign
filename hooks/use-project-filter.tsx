"use client"

import { create } from "zustand"

type Filter = "All"| "Flutter" | "Android" | "Web"

interface ProjectFilterStore {
  activeFilter: Filter
  setActiveFilter: (filter: Filter) => void
}

export const useProjectFilter = create<ProjectFilterStore>((set) => ({
  activeFilter: "All",
  setActiveFilter: (filter) => set({ activeFilter: filter }),
}))

