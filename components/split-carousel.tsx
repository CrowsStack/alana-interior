"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselItem {
  id: number
  title: string
  description: string
  image: string
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    title: "Modern Minimalism",
    description: "Clean lines and functional spaces that embody the essence of modern living.",
    image: "/placeholder.svg?height=600&width=800&text=Modern+Minimalism",
  },
  {
    id: 2,
    title: "Luxurious Comfort",
    description: "Opulent designs that blend comfort with sophisticated aesthetics.",
    image: "/placeholder.svg?height=600&width=800&text=Luxurious+Comfort",
  },
  {
    id: 3,
    title: "Natural Harmony",
    description: "Spaces that connect with nature, bringing the outside world into your home.",
    image: "/placeholder.svg?height=600&width=800&text=Natural+Harmony",
  },
  {
    id: 4,
    title: "Urban Chic",
    description: "Contemporary designs for the modern city dweller with an eye for style.",
    image: "/placeholder.svg?height=600&width=800&text=Urban+Chic",
  },
]

export default function SplitCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
    }, 5000)
  }

  useEffect(() => {
    startAutoPlay()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const handlePrev = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
    startAutoPlay()
  }

  const handleNext = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
    startAutoPlay()
  }

  const currentItem = carouselItems[currentIndex]

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  }

  const textVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 20 : -20,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction < 0 ? 20 : -20,
      opacity: 0,
    }),
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Design Philosophy</h2>
          <p className="section-subtitle">Explore our approach to creating spaces that inspire and transform.</p>
        </div>

        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="h-[400px] md:h-[500px] relative overflow-hidden rounded-lg border border-gold/30">
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={currentItem.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0"
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${currentItem.image})` }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative h-[300px] flex items-center">
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={currentItem.id}
                  custom={direction}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    y: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="w-full"
                >
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">{currentItem.title}</h3>
                    <p className="text-gray-600 mb-6 max-w-md">{currentItem.description}</p>
                    <div className="flex justify-center md:justify-start">
                      <button
                        onClick={handlePrev}
                        className="p-2 rounded-full border border-gold/30 mr-2 hover:bg-gold/10 transition-colors"
                        aria-label="Previous slide"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={handleNext}
                        className="p-2 rounded-full border border-gold/30 hover:bg-gold/10 transition-colors"
                        aria-label="Next slide"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

