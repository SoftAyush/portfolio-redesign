"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, Home, User, Briefcase, Mail, BookOpen, ChevronRight } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"

const routes = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Portfolio", path: "/portfolio", icon: Briefcase },
  { name: "Blog", path: "/blog", icon: BookOpen },
  { name: "Contact", path: "/contact", icon: Mail },
]

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-14 md:h-16 items-center justify-between">
          <div className="flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] pr-0">
                <SheetHeader>
                  <SheetTitle className="text-left text-lg font-bold">Menu</SheetTitle>
                </SheetHeader>
                <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                  <div className="flex flex-col space-y-3">
                    {routes.map((route) => (
                      <MobileLink
                        key={route.path}
                        href={route.path}
                        onOpenChange={setIsOpen}
                        className="flex items-center space-x-4 py-2 text-foreground/60 transition-colors hover:text-foreground"
                      >
                        <route.icon className="h-5 w-5" />
                        <span className="font-medium text-lg">{route.name}</span>
                        <ChevronRight className="ml-auto h-5 w-5" />
                      </MobileLink>
                    ))}
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
            <Link href="/" className="flex items-center space-x-2 md:ml-0">
              <span className="font-bold text-xl hidden md:inline">AT</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === route.path ? "text-foreground" : "text-foreground/60",
                )}
              >
                {route.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

interface MobileLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
  const pathname = usePathname()
  return (
    <Link
      href={`${href}`}
      onClick={() => {
        onOpenChange?.(false)
      }}
      className={cn(
        "text-foreground/70 transition-colors hover:text-foreground",
        pathname === href && "text-foreground font-bold",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  )
}

