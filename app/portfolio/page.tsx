"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  slug: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Living Room",
    category: "Residential",
    image: "/placeholder.svg?height=600&width=800",
    slug: "modern-living-room",
  },
  {
    id: 2,
    title: "Luxury Kitchen",
    category: "Residential",
    image: "/placeholder.svg?height=600&width=800",
    slug: "luxury-kitchen",
  },
  {
    id: 3,
    title: "Corporate Office",
    category: "Commercial",
    image: "/placeholder.svg?height=600&width=800",
    slug: "corporate-office",
  },
  {
    id: 4,
    title: "Boutique Hotel",
    category: "Hospitality",
    image: "/placeholder.svg?height=600&width=800",
    slug: "boutique-hotel",
  },
  {
    id: 5,
    title: "Urban Apartment",
    category: "Residential",
    image: "/placeholder.svg?height=600&width=800",
    slug: "urban-apartment",
  },
  {
    id: 6,
    title: "Restaurant Design",
    category: "Hospitality",
    image: "/placeholder.svg?height=600&width=800",
    slug: "restaurant-design",
  },
  {
    id: 7,
    title: "Retail Space",
    category: "Commercial",
    image: "/placeholder.svg?height=600&width=800",
    slug: "retail-space",
  },
  {
    id: 8,
    title: "Wellness Center",
    category: "Commercial",
    image: "/placeholder.svg?height=600&width=800",
    slug: "wellness-center",
  },
  {
    id: 9,
    title: "Bond Residence",
    category: "Residential",
    description:
      "A complete renovation of a late-1970's Villa in Mount Lawley, blending contemporary design with character elements.",
    image: "/placeholder.svg?height=600&width=800",
    slug: "bond-residence",
  },
  {
    id: 10,
    title: "Ruster Terrace",
    category: "Residential",
    description: "A sophisticated apartment design featuring Brazilian influences and custom elements.",
    image: "/placeholder.svg?height=600&width=800",
    slug: "ruster-terrace",
  },
  {
    id: 11,
    title: "TLCU Office",
    category: "Commercial",
    description: "A creative workspace designed to inspire productivity and reflect brand identity.",
    image: "/placeholder.svg?height=600&width=800",
    slug: "tlcu-office",
  },
  {
    id: 12,
    title: "Snell Residence",
    category: "Residential",
    description: "Careful restoration and modernization of a tired apartment into a beautiful living space.",
    image: "/placeholder.svg?height=600&width=800",
    slug: "snell-residence",
  },
  {
    id: 13,
    title: "Palmiero Residence",
    category: "Residential",
    description: "A complete home transformation with clever design ideas and thoughtful layout placement.",
    image: "/placeholder.svg?height=600&width=800",
    slug: "palmiero-residence",
  },
  {
    id: 14,
    title: "Acton Belle Property",
    category: "Commercial",
    description: "A professional office environment designed to enhance client experience and reflect brand values.",
    image: "/placeholder.svg?height=600&width=800",
    slug: "acton-belle-property",
  },
  {
    id: 15,
    title: "Hasley Residence",
    category: "Residential",
    description: "An apartment transformation into a warm and lovely home with personalized touches.",
    image: "/placeholder.svg?height=600&width=800",
    slug: "hasley-residence",
  },
  {
    id: 16,
    title: "Foodie Boutique",
    category: "Commercial",
    description: "A distinctive retail environment designed to enhance customer experience and showcase products.",
    image: "/placeholder.svg?height=600&width=800",
    slug: "foodie-boutique",
  },
]

const categories = ["All", "Residential", "Commercial"]

export default function PortfolioPage() {
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
                <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                  Portfolio

                </h1>
                <p className="text-xl text-white/80 mb-12 max-w-xl">
                  
                </p>
              </motion.div>
            </div>
          </div>
        </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white text-black">
        <div className="container-custom">
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    category === "All"
                      ? "bg-black text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link href={`/works/${project.slug}`} key={project.id} className="group">
                <div className="overflow-hidden rounded-lg border-2 border-gray-200 group-hover:border-gold transition-colors">
                  <div className="relative h-64">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                      <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/80 text-white rounded-full mb-2">
                          {project.category}
                        </span>
                        <h3 className="text-white text-xl font-bold">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-3">{project.description}</p>
                  <div className="flex items-center text-gold font-medium group-hover:underline">
                    <span>View Project</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach to Every Project</h2>
              <p className="text-white/80 mb-8">
                We believe that successful design is a collaborative process. Our approach combines your vision with our
                expertise to create spaces that are both beautiful and functional.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-gold font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Discovery</h3>
                    <p className="text-white/70">
                      We begin by understanding your needs, preferences, and how you use your space.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg\

\

\

\

\

\

\

\

\

\

