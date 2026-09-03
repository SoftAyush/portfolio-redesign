import { pageMetadata } from "@/lib/metadata"
import { BlogList } from "@/components/blog-list"

export const metadata = pageMetadata({
  title: "Mobile Engineering Journal",
  description:
    "Writing on mobile architecture: Kotlin Multiplatform, Flutter, Jetpack Compose and the trade-offs behind cross-platform decisions.",
  path: "/blog",
})

export default function BlogPage() {

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-8 md:pt-12 pb-32">
      <BlogList />
    </div>
  )
}
