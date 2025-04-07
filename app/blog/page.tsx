"use client"
import { Calendar, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  image: string
  categories: string[]
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Minimalism in Interior Design",
    excerpt: "Explore how less can truly be more when it comes to creating sophisticated and serene living spaces.",
    content: "",
    date: "May 15, 2023",
    author: "Alana O'Neill",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["Interior Design", "Minimalism"],
    slug: "art-of-minimalism",
  },
  {
    id: 2,
    title: "Color Psychology: How to Choose the Perfect Palette",
    excerpt: "Understanding the emotional impact of colors and how to use them effectively in your home.",
    content: "",
    date: "April 22, 2023",
    author: "Emma Roberts",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["Color Theory", "Design Tips"],
    slug: "color-psychology",
  },
  {
    id: 3,
    title: "Sustainable Design: Eco-Friendly Interior Solutions",
    excerpt: "Discover how to create beautiful spaces while minimizing environmental impact.",
    content: "",
    date: "March 10, 2023",
    author: "Alana O'Neill",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["Sustainability", "Eco-Friendly"],
    slug: "sustainable-design",
  },
  {
    id: 4,
    title: "Small Space Solutions: Maximizing Limited Square Footage",
    excerpt: "Creative strategies to make the most of compact living areas without sacrificing style.",
    content: "",
    date: "February 28, 2023",
    author: "James Wilson",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["Small Spaces", "Design Tips"],
    slug: "small-space-solutions",
  },
  {
    id: 5,
    title: "Lighting Design 101: Creating Ambiance Through Illumination",
    excerpt: "The essential guide to layering light sources for both functionality and atmosphere.",
    content: "",
    date: "January 15, 2023",
    author: "Alana O'Neill",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["Lighting", "Design Basics"],
    slug: "lighting-design-101",
  },
  {
    id: 6,
    title: "Mixing Styles: How to Blend Different Design Aesthetics",
    excerpt: "Tips for creating a cohesive look when combining traditional and contemporary elements.",
    content: "",
    date: "December 5, 2022",
    author: "Emma Roberts",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["Style Guide", "Design Tips"],
    slug: "mixing-styles",
  },
]

const categories = [
  "All",
  "Interior Design",
  "Minimalism",
  "Color Theory",
  "Design Tips",
  "Sustainability",
  "Eco-Friendly",
  "Small Spaces",
  "Lighting",
  "Design Basics",
  "Style Guide",
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/placeholder.svg?height=1200&width=2000')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-black/60" />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "25px 25px",
              }}
            />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-24 md:pt-0">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">Contact us</h1>
              <p className="text-xl text-white/80 mb-12 max-w-xl">
                Alana O Interiors provides comprehensive interior design services to transform your space into a
                beautiful, functional environment that reflects your personal style.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-black">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Main Content */}
            <div className="md:w-2/3">
              <div className="grid grid-cols-1 gap-12">
                {blogPosts.map((post) => (
                  <article key={post.id} className="border-b border-gray-200 pb-12 last:border-0">
                    <Link href={`/blog/${post.slug}`} className="block group">
                      <div className="relative h-[400px] mb-6 overflow-hidden rounded-lg">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="flex items-center text-sm text-gray-500 mb-4 space-x-6">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User size={16} className="mr-2" />
                          <span>{post.author}</span>
                        </div>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-gold transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-gray-700 mb-6">{post.excerpt}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.categories.map((category, index) => (
                          <span
                            key={index}
                            className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                          >
                            {category}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center text-gold font-medium group-hover:underline">
                        <span>Read More</span>
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:w-1/3">
              {/* Search */}
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2" aria-label="Search">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-500"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center justify-between text-gray-700 hover:text-gold transition-colors"
                      >
                        <span>{category}</span>
                        <ArrowRight size={14} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="flex items-start group">
                      <div className="relative w-20 h-20 flex-shrink-0 mr-4">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-gold transition-colors">{post.title}</h4>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Subscribe */}
              <div className="bg-[#f5f5f0] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-gray-700 mb-4">Stay updated with our latest design tips and inspiration.</p>
                <form>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full border border-gray-300 rounded-md py-3 px-4 mb-3 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-black/80 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

