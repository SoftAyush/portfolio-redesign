import { BlogPost } from "@/components/blog-post"

interface OtherBlogPostsProps {
  posts: {
    title: string
    slug: string
    date: string
    category: string
    excerpt: string
  }[]
}

// export function OtherBlogPosts({ posts }: OtherBlogPostsProps) {
//     return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Other Blog Posts</h2>
//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {posts.map((post) => (
//           <BlogPost key={post.slug} post={post} />
//         ))}
//       </div>
//     </div>
//   )
// }

