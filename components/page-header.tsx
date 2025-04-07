"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Menu, X, Phone, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils" // Assuming you have a utility for conditional class names

interface PageHeaderProps {
  title: string
  subtitle?: string
  currentPage: string
}

export default function PageHeader({ title, subtitle, currentPage }: PageHeaderProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true) // Initially visible
  const [isAtHeroSection, setIsAtHeroSection] = useState(true)
  const headerRef = useRef<HTMLDivElement>(null)
  const [isTopInfoBarVisible, setIsTopInfoBarVisible] = useState(true) // Initially visible

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const heroSection = document.querySelector(".hero-section") // Add this class to your hero section
      const heroSectionHeight = heroSection ? heroSection.offsetHeight : window.innerHeight

      // Check if we are at the hero section
      const isInHeroSection = currentScrollY < heroSectionHeight - 50 // Adjust threshold as needed
      setIsAtHeroSection(isInHeroSection)

      // Determine scroll direction
      const isScrollingUp = currentScrollY < lastScrollY

      // Control floating header visibility
      if (!isInHeroSection) {
        setIsHeaderVisible(isScrollingUp)
      } else {
        setIsHeaderVisible(true) // Show transparent header in hero
      }

      // Control top info bar visibility
      if (currentScrollY > 50) {
        setIsTopInfoBarVisible(!isScrollingUp)
      } else {
        setIsTopInfoBarVisible(true)
      }

      setIsScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "THE STUDIO", path: "/studio" },
    { name: "SERVICES", path: "/services" },
    { name: "PORTFOLIO", path: "/portfolio" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT US", path: "/contact" },
  ]

  const headerClasses = cn(
    "py-4 md:py-5 fixed w-full z-40 transition-all duration-300",
    isAtHeroSection
      ? "bg-transparent border-b border-white/10"
      : "bg-black/90 backdrop-blur-sm border-b border-white/10",
    !isAtHeroSection && !isHeaderVisible && "-translate-y-full", // Hide floating header
  )

  const topInfoBarClasses = cn(
    "py-1.5 border-b border-white/10 w-full z-50 transition-transform duration-300",
    isTopInfoBarVisible ? "translate-y-0" : "-translate-y-full",
    "hidden md:block fixed top-0 bg-black/80",
  )

  return (
    <>
      {/* Top info bar */}
      <motion.div className={topInfoBarClasses}>
        <div className="container-custom flex justify-between items-center mx-auto px-4">
          <div className="flex space-x-6 text-xs text-white/70">
            <span className="hover:text-white transition-colors flex items-center">
              <span>• 206 Mail Parking Nuages, 14529 Levallois-Perret, France</span>
            </span>
            <span className="hover:text-white transition-colors flex items-center">
              <span>• Maikoarchitecture@gmail.com</span>
            </span>
            <span className="hover:text-white transition-colors flex items-center">
              <span>• +8120-360-4027</span>
            </span>
          </div>
          <div className="flex items-center space-x-4 text-xs">
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              EN
            </a>
            <span className="text-white/30">/</span>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Fb
            </a>
            <span className="text-white/30">.</span>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Ins.
            </a>
            <span className="text-white/30">.</span>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Sky.
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.header ref={headerRef} className={headerClasses}>
        <div className="container-custom flex items-center justify-between mx-auto px-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-12 h-12">
              <Image
                src="https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-rkSlPFfEh1RaTsXPhk4SHKzD7WKtvj.png&w=384&q=75"
                alt="alana o Logo"
                fill
                className="object-contain filter-grayscale invert"
                priority
              />
            </div>
            {!isMobile && (
              <div>
                <div className="text-base font-semibold text-white">ALANA O INTERIORS</div>
                <div className="text-xs text-white/70"></div>
              </div>
            )}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={`text-sm px-4 py-2 ${
                  item.path === currentPage ? "text-white" : "text-white/80 hover:text-white"
                } transition-colors relative`}
              >
                {item.name}
                {index < menuItems.length - 1 && (
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-white/30">/</span>
                )}
              </Link>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-white/80 hover:text-white transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
            <Link
              href="/contact"
              className="hidden md:flex items-center bg-white text-black px-6 py-2 text-sm font-medium group"
            >
              <span>Get Architecture Consulting</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            {/* Hamburger Menu Button (Mobile) */}
            {isMobile && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-white/80 hover:text-white transition-colors lg:hidden"
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
            )}
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-black fixed inset-0 z-50 overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="relative w-16 h-16">
                    <Image
                      src="https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-rkSlPFfEh1RaTsXPhk4SHKzD7WKtvj.png&w=384&q=75"
                      alt="alana o Logo"
                      fill
                      className="object-contain filter-grayscale invert"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">ALANA O INTERIORS</div>
                    <div className="text-xs text-white/70"></div>
                  </div>
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-white/80 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col space-y-6">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    className="text-xl font-medium py-2 border-b border-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-4">
                  <a href="tel:+8120-360-4027" className="flex items-center text-white/70 hover:text-white">
                    <Phone size={18} className="mr-2" />
                    <span>+8120-360-4027</span>
                  </a>
                  <a
                    href="mailto:Maikoarchitecture@gmail.com"
                    className="flex items-center text-white/70 hover:text-white"
                  >
                    <Mail size={18} className="mr-2" />
                    <span>Maikoarchitecture@gmail.com</span>
                  </a>
                </div>
                <Link
                  href="/contact"
                  className="block bg-white text-black px-6 py-3 text-sm font-medium text-center mt-4 w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Architecture Consulting
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

