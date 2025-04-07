"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { motion } from "framer-motion"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface CarouselItem {
  id: number
  title: string
  description: string
  image: string
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    title: "Modern Living",
    description: "Clean lines and functional spaces that embody the essence of modern living.",
    image: "/placeholder.svg?height=800&width=1200&text=Modern+Living",
  },
  {
    id: 2,
    title: "Luxurious Comfort",
    description: "Opulent designs that blend comfort with sophisticated aesthetics.",
    image: "/placeholder.svg?height=800&width=1200&text=Luxurious+Comfort",
  },
  {
    id: 3,
    title: "Natural Harmony",
    description: "Spaces that connect with nature, bringing the outside world into your home.",
    image: "/placeholder.svg?height=800&width=1200&text=Natural+Harmony",
  },
  {
    id: 4,
    title: "Urban Chic",
    description: "Contemporary designs for the modern city dweller with an eye for style.",
    image: "/placeholder.svg?height=800&width=1200&text=Urban+Chic",
  },
  {
    id: 5,
    title: "Minimalist Elegance",
    description: "Refined simplicity that creates a sense of calm and sophistication.",
    image: "/placeholder.svg?height=800&width=1200&text=Minimalist+Elegance",
  },
]

export default function ScrollCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const panelsRef = useRef<HTMLDivElement[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isScrollLocked, setIsScrollLocked] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  // Set up the scroll-controlled carousel
  useEffect(() => {
    if (typeof window === "undefined" || isMobile) return

    const section = sectionRef.current
    const container = containerRef.current
    const panels = panelsRef.current

    if (!section || !container || panels.length === 0) return

    // Lock body scroll when entering the carousel
    const lockScroll = () => {
      document.body.classList.add("scroll-lock")
      setIsScrollLocked(true)
    }

    // Unlock body scroll when leaving the carousel
    const unlockScroll = () => {
      document.body.classList.remove("scroll-lock")
      setIsScrollLocked(false)
    }

    // Calculate the total width
    const totalWidth = panels.length * 100

    // Set up the horizontal scroll with GSAP
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top",
        end: `+=${totalWidth}%`,
        scrub: 1,
        onEnter: lockScroll,
        onLeaveBack: () => {
          unlockScroll()
          setCurrentIndex(0)
        },
        onLeave: () => {
          unlockScroll()
          setCurrentIndex(panels.length - 1)
        },
        onUpdate: (self) => {
          // Update the current index based on scroll progress
          const newIndex = Math.round(self.progress * (panels.length - 1))
          if (newIndex !== currentIndex) {
            setCurrentIndex(newIndex)
          }
        },
      },
    })

    // Animate the container horizontally
    tl.to(container, {
      x: `-${totalWidth - 100}%`,
      ease: "none",
    })

    // Set up touch events for mobile swipe
    let touchStartX = 0
    let touchEndX = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX
    }

    const handleTouchMove = (e: TouchEvent) => {
      touchEndX = e.touches[0].clientX
    }

    const handleTouchEnd = () => {
      const swipeDistance = touchEndX - touchStartX
      const threshold = 50 // Minimum swipe distance

      if (swipeDistance > threshold && currentIndex > 0) {
        // Swipe right - go to previous
        setCurrentIndex(currentIndex - 1)
      } else if (swipeDistance < -threshold && currentIndex < panels.length - 1) {
        // Swipe left - go to next
        setCurrentIndex(currentIndex + 1)
      }
    }

    section.addEventListener("touchstart", handleTouchStart)
    section.addEventListener("touchmove", handleTouchMove)
    section.addEventListener("touchend", handleTouchEnd)

    return () => {
      // Clean up
      if (ScrollTrigger.getById("carousel")) {
        ScrollTrigger.getById("carousel").kill()
      }

      unlockScroll()

      section.removeEventListener("touchstart", handleTouchStart)
      section.removeEventListener("touchmove", handleTouchMove)
      section.removeEventListener("touchend", handleTouchEnd)
    }
  }, [currentIndex, isMobile])

  // Handle wheel events for mobile
  const handleWheel = (e: React.WheelEvent) => {
    if (isMobile) {
      e.preventDefault()

      if (e.deltaY > 0 && currentIndex < carouselItems.length - 1) {
        // Scroll down - go to next
        setCurrentIndex(currentIndex + 1)
      } else if (e.deltaY < 0 && currentIndex > 0) {
        // Scroll up - go to previous
        setCurrentIndex(currentIndex - 1)
      }
    }
  }

  return (
    <div ref={sectionRef} className="scroll-section" onWheel={handleWheel}>
      <div
        ref={containerRef}
        className={`scroll-container ${isMobile ? "flex flex-col" : ""}`}
        style={
          isMobile
            ? {
                transform: `translateY(-${currentIndex * 100}vh)`,
                transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
              }
            : undefined
        }
      >
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => el && (panelsRef.current[index] = el)}
            className={`scroll-item ${isMobile ? "min-h-screen" : ""}`}
            style={!isMobile ? { left: `${index * 100}%` } : undefined}
          >
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center md:text-left"
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{item.title}</h2>
                  <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">{item.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <button className="btn-primary">Explore More</button>
                    <button className="btn-secondary">View Details</button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden border-2 border-gold/30"
                >
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? "bg-gold" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      {!isMobile && (
        <>
          <button
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 border border-gold/30 ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gold/10"
            }`}
            onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
            disabled={currentIndex === 0}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 border border-gold/30 ${
              currentIndex === carouselItems.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gold/10"
            }`}
            onClick={() => currentIndex < carouselItems.length - 1 && setCurrentIndex(currentIndex + 1)}
            disabled={currentIndex === carouselItems.length - 1}
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-0 right-0 z-10 flex justify-center">
        <div className="text-sm text-gray-500 font-medium bg-white/80 px-4 py-2 rounded-full border border-gold/30">
          {isScrollLocked ? "Scroll to navigate" : "Continue scrolling"}
        </div>
      </div>
    </div>
  )
}

