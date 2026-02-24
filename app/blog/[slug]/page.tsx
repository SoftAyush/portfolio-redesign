import Image from "next/image"
import { blogPosts } from "@/data/blog-posts"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Clock } from "lucide-react"
import Link from "next/link"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-background pb-32 pt-24 md:pt-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-[740px] mx-auto">
          {/* Back Navigation */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-12 transition-all active:scale-95"
          >
            <ArrowLeft className="h-3 w-3" /> Back to Journal
          </Link>

          {/* Article Header */}
          <div className="space-y-8 mb-16">
            <Badge className="bg-primary/10 text-primary border-none px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              {post.category}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold font-serif leading-[1.1] tracking-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between border-y border-border/50 py-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 ring-2 ring-primary/5">
                  <AvatarImage src="/assets/Aayush.jpg" alt="Ayush Timalsina" />
                  <AvatarFallback className="bg-primary/5 text-primary text-xs font-bold">AT</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-bold tracking-tight">Ayush Timalsina</span>
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3" /> 5 min read
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex gap-4">
                {/* Placeholder for share buttons/actions if needed */}
                <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2.5rem] mb-16 shadow-2xl">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-stone dark:prose-invert max-w-none">
            <div className="text-2xl md:text-3xl text-foreground font-serif leading-relaxed mb-12 opacity-80">
              {post.excerpt}
            </div>

            <div
              className="prose-h2:text-4xl prose-h2:font-serif prose-h2:tracking-tight prose-h2:mt-16 prose-h2:mb-8 prose-p:text-xl prose-p:leading-[1.85] prose-p:text-muted-foreground prose-p:mb-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Footer Navigation */}
          <div className="mt-32 pt-16 border-t border-border/50">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
              <div className="max-w-xs space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">The Author</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Specialized Mobile Engineer crafting high-end digital experiences with Kotlin, Flutter, and Modern Web.
                </p>
                <div className="pt-2">
                  <Button size="sm" variant="outline" className="rounded-full font-bold uppercase tracking-widest text-[10px]" asChild>
                    <Link href="/about">About Me</Link>
                  </Button>
                </div>
              </div>

              <div className="flex-1 space-y-8">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Read Next</h4>
                <div className="grid sm:grid-cols-2 gap-8">
                  {otherPosts.map((other) => (
                    <Link key={other.slug} href={`/blog/${other.slug}`} className="group space-y-4 block">
                      <div className="relative aspect-video rounded-3xl overflow-hidden bg-muted">
                        <Image src={other.image || "/placeholder.svg"} alt={other.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <h5 className="font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {other.title}
                      </h5>
                    </Link>
                  ))}
                  {otherPosts.length === 0 && (
                    <p className="text-muted-foreground text-sm italic">Stay tuned for more insights.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
