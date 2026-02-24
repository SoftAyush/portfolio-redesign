"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

interface BlogPostProps {
  post: {
    title: string
    slug: string
    date: string
    category: string
    excerpt: string
    image: string
  }
}

export function BlogPost({ post }: BlogPostProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="space-y-6">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-muted shadow-lg">
          {!imageLoaded && <Skeleton className="absolute inset-0" />}
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute top-6 left-6">
            <Badge className="bg-background/80 backdrop-blur-md text-foreground border-none px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              {post.category}
            </Badge>
          </div>
        </div>

        <div className="space-y-4 px-2">
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span className="h-1 w-1 rounded-full bg-primary/20" />
            <span>5 min read</span>
          </div>

          <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-muted-foreground leading-relaxed line-clamp-3 text-sm">
            {post.excerpt}
          </p>

          <div className="pt-2 flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
            Read Article <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </article>
    </Link>
  )
}

