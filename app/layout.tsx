import type React from "react"
import { Inter, Space_Grotesk } from "next/font/google"
import { useState, useEffect, useRef } from "react" // Import useRef
import "./globals.css"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import Loader from "@/components/loader"
import CustomCursor from "@/components/custom-cursor" // Import CustomCursor
import PageHeader from "@/components/page-header"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
})

// Metadata needs to be in a separate object since we're using 'use client'
const metadata = {
  title: "Maiko.archi | Precision Plans Architects",
  description: "Architecture studio specializing in modern design solutions",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [loading, setLoading] = useState(true)
  const heroRef = useRef<HTMLDivElement>(null) // Create a ref for the main content
  const [isMobile, setIsMobile] = useState(false)
  const [isHoveringLink, setIsHoveringLink] = useState(false) // You might need to adjust this logic

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="generator" content={metadata.generator} />
      </head>

      <body className="bg-white dark:bg-black min-h-screen flex flex-col cursor-none" suppressHydrationWarning>
        <PageHeader /> {/* Added cursor-none to the body */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {loading && <Loader />}

          <main ref={heroRef} className="flex-grow relative overflow-hidden">
            {" "}
            {/* Apply the ref to the main content */}
            {children}
            <CustomCursor
              heroRef={heroRef}
              isMobile={isMobile}
              isHoveringLink={isHoveringLink}
              setIsHoveringLink={setIsHoveringLink}
            />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

import "./globals.css"



import './globals.css'