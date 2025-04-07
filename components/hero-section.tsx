"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useSpring } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import MazeLoader from "./maze-loader"

interface CursorPosition {
  x: number
  y: number
  isDragging: boolean
}

interface CarouselItem {
  id: number
  title: string
  image: string
  link: string
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    title: "Interior Design",
    image:
      "https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-U5ypfbvzRc0J5buLVzyJ5sHzlFXiBS.png&w=1080&q=75",
    link: "/portfolio/modern-interior",
  },
  {
    id: 2,
    title: "Kitchen Renovations",
    image:
      "https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-6it2JIYOnpNWGfmNuHGjdo3lEnlDT2.png&w=1920&q=75",
    link: "/portfolio/kitchen-renovations",
  },
  {
    id: 3,
    title: "Living Space Transformations",
    image:
      "https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-BXmjzDDZfWM5SEsKKVXh10Ygk6ZrAB.png&w=1080&q=75",
    link: "/portfolio/living-spaces",
  },
  {
    id: 4,
    title: "Modern Interior Design",
    image:
      "https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-BXwlPj74ZYuWMQWbC6sxIOeIrfDmd7.png&w=384&q=75",
    link: "/portfolio/modern-interior",
  },
  {
    id: 5,
    title: "Office Interiors Decor",
    image:
      "https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-HTAKOeOuSscwBTiXvgj7XvsG0KyUa1.png&w=1080&q=75",
    link: "/portfolio/kitchen-renovations",
  },
  {
    id: 6,
    title: "Space Transformations",
    image:
      "https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-s6zbz1po7IP2UFWNhEJzuUJsxNFsW6.png&w=828&q=75",
    link: "/portfolio/living-spaces",
  },
]

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const [cursorPos, setCursorPos] = useState<CursorPosition>({
    x: 0,
    y: 0,
    isDragging: false,
  })
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHoveringLink, setIsHoveringLink] = useState(false)
  const [isHoveringCursor, setIsHoveringCursor] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Spring physics for faster, more responsive dragging
  const springX = useSpring(0, {
    stiffness: 1000,
    damping: 30,
    mass: 0.5,
  })

  const springY = useSpring(0, {
    stiffness: 1000,
    damping: 30,
    mass: 0.5,
  })

  // Carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      console.log("isMobile:", window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Simulate loading completion
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => {
      window.removeEventListener("resize", checkMobile)
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (!heroRef.current || !cursorRef.current || isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const rect = heroRef.current!.getBoundingClientRect()

      const x = clientX - rect.left
      const y = clientY - rect.top

      const xPercent = x / rect.width
      const yPercent = y / rect.height

      heroRef.current!.style.setProperty("--mouse-x", `${xPercent}`)
      heroRef.current!.style.setProperty("--mouse-y", `${yPercent}`)

      if (cursorPos.isDragging && dragStart) {
        const deltaX = clientX - dragStart.x
        const deltaY = clientY - dragStart.y

        setCursorPos((prev) => {
          const targetX = clientX - 48 // Center cursor on mouse
          const targetY = clientY - 48
          const newX = Math.min(Math.max(targetX, rect.left), rect.right - 96)
          const newY = Math.min(Math.max(targetY, rect.top), rect.bottom - 96)
          return {
            x: newX,
            y: newY,
            isDragging: true,
          }
        })
        setDragStart({ x: clientX, y: clientY })
      } else {
        setCursorPos((prev) => ({
          ...prev,
          x: clientX - 48,
          y: clientY - 48,
          isDragging: false,
        }))
      }
      console.log("cursorPos:", cursorPos)
    }

    const handleMouseDown = (e: MouseEvent) => {
      setCursorPos((prev) => ({ ...prev, isDragging: true }))
      setDragStart({ x: e.clientX, y: e.clientY })
      console.log("isDragging (down):", cursorPos.isDragging)
    }

    const handleMouseUp = () => {
      setCursorPos((prev) => ({ ...prev, isDragging: false }))
      setDragStart(null)
      console.log("isDragging (up):", cursorPos.isDragging)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [cursorPos.isDragging, dragStart, isMobile])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <MazeLoader />
      </div>
    )
  }

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background carousel with overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        key={currentImageIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1.05 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div
          className={`w-full h-full ${!isMobile ? "cursor-none" : ""}`}
          style={{
            backgroundImage: `url('${carouselItems[currentImageIndex].image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.6) contrast(1.2)",
          }}
          onMouseEnter={() => !isMobile && setIsHoveringLink(true)}
          onMouseLeave={() => !isMobile && setIsHoveringLink(false)}
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 px-6 w-full">
        <div className="max-w-6xl mx-auto flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`w-full ${isMobile ? "text-left" : "lg:text-left"}`}
          >
            <div className="space-y-2 md:space-y-3">
              <h1
                className={`font-bold tracking-tight leading-tight text-white ${
                  isMobile ? "text-3xl" : "text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                }`}
              >
                WELCOME TO ALANA O
              </h1>
              <h1
                className={`font-bold tracking-tight leading-tight text-white ${
                  isMobile ? "text-3xl" : "text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                }`}
              >
                INTERIORS STUDIOS IN PERTH.
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className={`mt-4 md:mt-6 max-w-xl ${isMobile ? "text-left" : "lg:text-left"}`}
            >
              <p className={`text-white/70 ${isMobile ? "text-base" : "text-lg md:text-xl"}`}>
                It is not the beauty of a building you should look at its the construction of the foundation that will
                stand the test of time.
              </p>
            </motion.div>
          </motion.div>

          {/* Circular Services Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className={`mt-8 ${isMobile ? "w-full flex justify-center" : "lg:absolute right-24 top-1/2 -translate-y-1/2"}`}
          >
            <Link
              href="/services"
              data-cursor="Our Services"
              data-cursor-drap="Click to view services"
              className="pxl-cursor--cta"
            >
              <motion.div
                className="relative w-40 h-40 rounded-full border border-white/20 flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden group"
                drag={!isMobile}
                dragConstraints={{ top: -30, right: 30, bottom: 30, left: -30 }}
                dragElastic={0.05}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                whileDrag={{ scale: 0.95 }}
                whileHover={{ backgroundColor: "#FFFFFF" }}
              >
                {/* Dot on circle */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full group-hover:bg-black transition-colors"></div>

                {/* Service Text and Arrow */}
                <div className="text-center">
                  <p className="text-white text-lg font-medium mb-2 group-hover:text-black transition-colors duration-300">
                    Our Services
                  </p>
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="flex justify-center"
                  >
                    <ArrowUpRight
                      className="text-white group-hover:text-black transition-colors duration-300"
                      size={24}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Award Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className={`absolute z-30 ${isMobile ? "bottom-10 left-6" : "bottom-12 left-12"}`}
      >
        <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-1 sm:space-y-0">
          <div className="bg-yellow-500 text-black px-3 py-1 text-xs font-bold">AWARD WINNER 2021-2024</div>
          <div className="border border-white/20 text-white px-3 py-1 text-xs">HOUZZ FEATURED DESIGNER</div>
        </div>
      </motion.div>
    </section>
  )
}

