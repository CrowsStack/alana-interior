"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import ScrollObserver from "./scroll-observer"

interface NewsItem {
  id: number
  title: string
  excerpt: string
  date: string
  image: string
  categories: string[]
  slug: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Unknown Works Constructs The Armadillo Pavilion From Eucalyptus Wood",
    excerpt: "Archiwork Creates User-Friendly, Responsive Websites That Combine Modern Design And...",
    date: "Sep 24",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["ARCHITECTURE", "BRANDS"],
    slug: "unknown-works-constructs-armadillo-pavilion",
  },
  {
    id: 2,
    title: 'Sordo Madaleno Creates "Overgrown Ruin" Apartment Block In Mexico',
    excerpt: "At Archiwork, We Focus On Delivering Responsive Web Designs That...",
    date: "Sep 24",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["FURNITURE", "HOME DECOR"],
    slug: "sordo-madaleno-creates-overgrown-ruin-apartment",
  },
  {
    id: 3,
    title: "How To Design A Highly Functional And Stylish Home",
    excerpt: "Archiwork Uses Cutting-Edge Web Technologies To Craft Websites That Are...",
    date: "Sep 24",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["ARCHITECTURE", "BRANDS"],
    slug: "design-functional-stylish-home",
  },
]

export default function NewsSection() {
  return (
    <ScrollObserver>
      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div>
              <h2 className="heading-lg mb-4 fade-in">News.</h2>
            </div>
            <div className="max-w-md fade-in">
              <p className="text-white/70">
                We always update the latest news about our company aswell as architecture news around the world, click
                subscribe and follow daily news from us.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                className="fade-in"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${item.slug}`} className="block group">
                  <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                    <div className="absolute top-4 left-4 z-10 bg-black/80 text-white text-sm px-2 py-1">
                      <span>12</span>
                      <span className="block text-xs">Sep 24</span>
                    </div>
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="mb-3">
                    {item.categories.map((category, i) => (
                      <span key={i} className="text-xs text-white/60 mr-2">
                        {category}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-medium mb-2 group-hover:text-white/80 transition-colors">{item.title}</h3>

                  <p className="text-white/60 text-sm">{item.excerpt}</p>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </ScrollObserver>
  )
}

