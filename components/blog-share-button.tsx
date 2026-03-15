"use client"

import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"
import { toast } from "sonner"

interface BlogShareButtonProps {
  title: string
  slug: string
}

export function BlogShareButton({ title, slug }: BlogShareButtonProps) {
  const handleShare = async () => {
    const url = `${window.location.origin}/blog/${slug}`

    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Check out this blog post: ${title}`,
          url: url,
        })
        return;
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          console.error("Error sharing:", error)
        } else {
          return; // User cancelled
        }
      }
    }

    // Fallback: Copy to clipboard
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url)
        toast.success("Link copied to clipboard!")
      } else {
        // Legacy fallback
        const textArea = document.createElement("textarea")
        textArea.value = url
        textArea.style.position = "fixed"
        textArea.style.left = "-9999px"
        textArea.style.top = "0"
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        try {
          document.execCommand('copy')
          toast.success("Link copied to clipboard!")
        } catch (err) {
          console.error('Fallback copy failed', err)
          toast.error("Failed to copy link")
        }
        document.body.removeChild(textArea)
      }
    } catch (error) {
      console.error("Failed to copy:", error)
      toast.error("Failed to copy link")
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full text-muted-foreground hover:text-primary transition-all active:scale-90"
      onClick={handleShare}
      title="Share article"
    >
      <Share2 className="h-5 w-5" />
    </Button>
  )
}
