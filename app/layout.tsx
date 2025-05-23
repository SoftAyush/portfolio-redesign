import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import type React from "react"
import { Footer } from "@/components/footer"
import './globals.css'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ayush Timalsina - Developer Portfolio",
  description: "Personal portfolio and resume website",
  icons:"/assets/favIcon/icon.ico"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-4 md:pt-8">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
