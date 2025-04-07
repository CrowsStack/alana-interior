"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  slug: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Palmiero Residence",
    category: "Residential",
    image:
      "https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-4IYEJElO4vMh1UgrtfEXk6XnT0Gh1e.png&w=384&q=75",
    slug: "architecture-home-1",
  },
  {
    id: 2,
    title: "Farrington Residence",
    category: "Residential",
    image:
      "https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-JVzv24i7f2GPG2e29G9fS4C0mTvq7O.png&w=1920&q=75",
    slug: "architecture-home-2",
  },
  {
    id: 3,
    title: "Bond Residence",
    category: "Residential",
    image:
      "https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-2q9o1tUFmjrvQHiqIOXvdMcqZNkE7w.png&w=384&q=75",
    slug: "architecture-home-3",
  },
  {
    id: 4,
    title: "Lovell Residence",
    category: "Residential",
    image:
      "https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-QMbVEr4YwdTD2F76cEQNlDvyde3OyN.png&w=384&q=75",
    slug: "home-apartment",
  },
]

export default function PortfolioGrid() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative overflow-hidden group"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href={`/projects/${item.slug}`}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:opacity-60" />

                  {/* Arrow icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="text-white" size={24} />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-medium">{item.title}</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

