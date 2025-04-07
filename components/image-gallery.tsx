"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface GalleryItem {
  id: number
  title: string
  description: string
  category: string
  image: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Modern Living Room",
    description: "Minimalist design with a focus on comfort and functionality.",
    category: "Living Room",
    image: "/placeholder.svg?height=600&width=800&text=Modern+Living+Room",
  },
  {
    id: 2,
    title: "Luxury Kitchen",
    description: "High-end appliances and premium materials for the culinary enthusiast.",
    category: "Kitchen",
    image: "/placeholder.svg?height=800&width=600&text=Luxury+Kitchen",
  },
  {
    id: 3,
    title: "Serene Bedroom",
    description: "A peaceful retreat designed for ultimate relaxation.",
    category: "Bedroom",
    image: "/placeholder.svg?height=600&width=800&text=Serene+Bedroom",
  },
  {
    id: 4,
    title: "Executive Office",
    description: "Sophisticated workspace that balances productivity and style.",
    category: "Office",
    image: "/placeholder.svg?height=800&width=600&text=Executive+Office",
  },
  {
    id: 5,
    title: "Elegant Bathroom",
    description: "Spa-like experience with luxurious fixtures and finishes.",
    category: "Bathroom",
    image: "/placeholder.svg?height=600&width=800&text=Elegant+Bathroom",
  },
  {
    id: 6,
    title: "Outdoor Living",
    description: "Extending your living space to embrace the outdoors.",
    category: "Outdoor",
    image: "/placeholder.svg?height=800&width=600&text=Outdoor+Living",
  },
  {
    id: 7,
    title: "Contemporary Dining Room",
    description: "Elegant dining spaces for entertaining and family gatherings.",
    category: "Dining Room",
    image: "/placeholder.svg?height=600&width=800&text=Contemporary+Dining",
  },
  {
    id: 8,
    title: "Luxury Penthouse",
    description: "Panoramic views with sophisticated urban design elements.",
    category: "Penthouse",
    image: "/placeholder.svg?height=800&width=600&text=Luxury+Penthouse",
  },
  {
    id: 9,
    title: "Cozy Reading Nook",
    description: "Intimate spaces designed for relaxation and reflection.",
    category: "Living Room",
    image: "/placeholder.svg?height=600&width=800&text=Cozy+Reading+Nook",
  },
]

export default function ImageGallery() {
  const [activeFilter, setActiveFilter] = useState("All")
  const categories = ["All", ...Array.from(new Set(galleryItems.map((item) => item.category)))]

  const filteredItems =
    activeFilter === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">Explore our collection of meticulously crafted interior designs.</p>
        </div>

        <div className="flex justify-center mb-8 overflow-x-auto pb-4">
          <div className="flex space-x-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === category
                    ? "bg-gold text-white"
                    : "bg-white text-gray-600 border border-gold/30 hover:bg-gold/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              key={item.id}
              className="group relative overflow-hidden rounded-lg border-2 border-gold/30 hover:border-gold transition-colors duration-300"
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end">
                  <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-bold mb-2 font-playfair">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                    <div className="mt-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/20 text-gold rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

