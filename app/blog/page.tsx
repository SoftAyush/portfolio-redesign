import { BlogList } from "@/components/blog-list"
import { blogPosts } from "@/data/blog-posts"

export default function BlogPage() {

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-32">
      <BlogList />
    </div>
  )
}

