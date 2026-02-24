"use client"

import { useState } from "react"
import { BlogPost } from "@/components/blog-post"
import { blogPosts } from "@/data/blog-posts"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function BlogList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = ["all", ...Array.from(new Set(blogPosts.map((post) => post.category)))]

  return (
    <div className="space-y-16 py-20">
      <div className="flex flex-col md:flex-row gap-8 items-end justify-between border-b border-border/50 pb-12">
        <div className="max-w-md w-full space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase">Journal.</h1>
          <p className="text-muted-foreground text-lg">Insights on mobile engineering, design systems, and product strategy.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="flex-1 sm:w-64">
            <Label htmlFor="search" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Search Articles</Label>
            <Input
              id="search"
              placeholder="Keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-12 rounded-xl bg-muted/50 border-none px-4 focus-visible:ring-primary"
            />
          </div>
          <div className="w-full sm:w-48">
            <Label htmlFor="category" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Industry</Label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger id="category" className="h-12 rounded-xl bg-muted/50 border-none px-4 focus:ring-primary">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-border/50">
                {categories.map((category) => (
                  <SelectItem key={category} value={category} className="rounded-lg">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <BlogPost key={post.slug} post={post} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-2xl font-bold text-muted-foreground/40">No articles found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}

