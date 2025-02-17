import { BlogList } from "@/components/blog-list"
import { blogPosts } from "@/data/blog-posts"

export default function BlogPage() {

  return (
    <div className="container mx-auto px-4 pt-4 pb-8">
      <BlogList />
    </div>
  )
}

