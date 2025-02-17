import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon } from "lucide-react"

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
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <Card className="flex flex-col h-full transition-shadow hover:shadow-lg">
        <div className="relative w-full h-48">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-t-lg" />
        </div>
        <CardHeader>
          <CardTitle className="text-xl">{post.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground text-sm">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Badge variant="secondary">{post.category}</Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarIcon className="mr-1 h-3 w-3" />
            {post.date}
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

