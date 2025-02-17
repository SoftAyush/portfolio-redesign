import Image from "next/image"
import { blogPosts } from "@/data/blog-posts"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon } from "lucide-react"
import { OtherBlogPosts } from "@/components/other-blog-posts"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== params.slug)

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <article className="prose dark:prose-invert lg:prose-xl max-w-none">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 mb-8">
          <Badge variant="secondary">{post.category}</Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarIcon className="mr-1 h-3 w-3" />
            {post.date}
          </div>
        </div>
        <div className="relative w-full h-64 mb-8">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-lg" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
      <hr className="my-8" />
      <OtherBlogPosts posts={otherPosts} />
    </div>
  )
}

