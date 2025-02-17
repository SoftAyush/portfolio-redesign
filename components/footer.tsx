import { Github, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 py-8 mx-auto  px-4 md:px-6 lg:px-8 mx-auto">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ayush Timalsina. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="https://instagram.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Instagram className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

