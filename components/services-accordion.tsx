"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import Link from "next/link"

interface ServiceItem {
  title: string
  image: string
  peepImage: string
  slug: string
  description: string
  categories: string[]
}

const services: ServiceItem[] = [
  {
    title: "Project",
    image:
      "https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-TtBrNupYzJjSwepedDC5Cm2J80EMbU.png&w=384&q=75",
    peepImage:
      "https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-TtBrNupYzJjSwepedDC5Cm2J80EMbU.png&w=1920&q=75",
    slug: "/services/project",
    description:
      "Architectural design is the art and science of enhancing the interiors of a space to create a more aesthetically pleasing and functional environment. Interior designers work with both residential and commercial spaces.",
    categories: ["DESIGN DEVELOPMENT", "DEVELOPMENT APPROVAL", "RESIDENTIAL SPACE", "CONCEPT DESIGN"],
  },
  {
    title: "Interior",
    image:
      "https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-W7dBDw9DHW4fkR9hqxHAh9usth03o1.png&w=384&q=75",
    peepImage:
      "https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-W7dBDw9DHW4fkR9hqxHAh9usth03o1.png&w=1920&q=75",
    slug: "/services/interiors",
    description:
      "The art and science of enhancing the interiors of a space to create a more aesthetically pleasing and functional environment. We work with both residential and commercial spaces.",
    categories: ["RESIDENTIAL SPACE", "STRUCTURAL DESIGN", "CONSTRUCTION PLAN", "LANDSCAPE ARCHITECTURE"],
  },
  {
    title: "Residential",
    image:
      "https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-rjq10HadIIHBo31sfQdWdJsrtkYKoJ.png&w=1920&q=75",
    peepImage:
      "https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-rjq10HadIIHBo31sfQdWdJsrtkYKoJ.png&w=1920&q=75",
    slug: "/services/residential",
    description:
      "Creating beautiful, functional interiors that reflect your style and enhance your lifestyle. We focus on elements such as color schemes, furniture, lighting and spatial arrangements.",
    categories: ["FUNCTIONAL KITCHENS", "LIVING SPACES", "BATHROOM DESIGN", "OFFICE INTERIORS"],
  },
  {
    title: "Design",
    image:
      "https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-IPNjnURDHJFQGYJSD3inJcDinb0md5.png&w=384&q=75",
    peepImage:
      "https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-IPNjnURDHJFQGYJSD3inJcDinb0md5.png&w=1920&q=75",
    slug: "/services/design",
    description:
      "Transforming existing residential spaces into modern, functional homes. Our renovation services cover everything from structural changes to finishing touches.",
    categories: ["FULL HOME RENOVATION", "KITCHEN REMODEL", "BATHROOM UPGRADE", "EXTENSION DESIGN"],
  },
]

export default function ServicesAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-6 cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-medium text-black">{service.title}</h3>
                <button
                  className="text-black flex items-center"
                  aria-label={expandedIndex === index ? "Collapse" : "Expand"}
                >
                  <span className="mr-2">Explore</span>
                  <Plus
                    size={20}
                    className={`transition-transform duration-300 ${expandedIndex === index ? "rotate-45" : ""}`}
                  />
                </button>
              </div>

              {expandedIndex !== index && (
                <div className="relative h-16 w-2/3 mt-4">
                  {" "}
                  {/* Adjusted height and width */}
                  <Image src={service.peepImage} alt={`${service.title} Peep`} fill className="object-cover" />
                </div>
              )}

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden mt-6"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <div className="relative h-96 w-full">
                          <Image src={service.image} alt={service.title} fill className="object-cover" />
                        </div>
                      </div>
                      <div className="space-y-6">
                        <p className="text-gray-600 text-lg">{service.description}</p>

                        <div className="border-t border-gray-200 pt-4">
                          <h4 className="text-sm font-semibold text-gray-500 mb-4">CONTRIBUTION DRAWINGS</h4>
                          <div className="grid grid-cols-2 gap-4">
                            {service.categories.map((category, i) => (
                              <span key={i} className="text-black text-sm">
                                {category}
                              </span>
                            ))}
                          </div>
                        </div>

                        <Link
                          href={service.slug}
                          className="inline-flex items-center border border-black text-black px-6 py-3 text-sm font-medium group mt-6"
                        >
                          <span>Read More</span>
                          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

