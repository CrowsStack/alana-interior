"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import { motion } from "framer-motion"
import MazeLoader from "@/components/maze-loader"

interface Service {
  id: number
  title: string
  description: string
  image: string
  features: string[]
  slug: string
}

const services: Service[] = [
  {
    id: 1,
    title: "Interior Design",
    description:
      "Full-service interior design for residential spaces, creating beautiful and functional interiors that reflect your personal style.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Space Planning",
      "Furniture Selection",
      "Color Consultation",
      "Material Selection",
      "Lighting Design",
      "Styling & Accessories",
    ],
    slug: "interior-design",
  },
  {
    id: 2,
    title: "Kitchen Design",
    description:
      "Specialized kitchen design services to create the heart of your home with functionality, style, and quality craftsmanship.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Layout Planning",
      "Cabinetry Design",
      "Countertop Selection",
      "Appliance Specification",
      "Lighting Solutions",
      "Material & Finish Selection",
    ],
    slug: "kitchen-design",
  },
  {
    id: 3,
    title: "Bathroom Renovations",
    description:
      "Transform your bathroom into a luxurious retreat with our comprehensive bathroom renovation services.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Layout Optimization",
      "Fixture Selection",
      "Tile & Surface Selection",
      "Storage Solutions",
      "Lighting Design",
      "Accessibility Considerations",
    ],
    slug: "bathroom-renovations",
  },
  {
    id: 4,
    title: "Decorating & Styling",
    description:
      "Refresh your space with our decorating and styling services, bringing new life to your existing interior.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Furniture Arrangement",
      "Accessory Selection",
      "Art & Decor Placement",
      "Color Scheme Development",
      "Textile Selection",
      "Seasonal Updates",
    ],
    slug: "decorating-styling",
  },
]

export default function ServicesPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading completion
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <MazeLoader />
      </div>
    )
  }

  return (
    <>
      <div className="bg-black text-white">
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
                  Interior Design
                  <br />
                  Services.
                </h1>
                <p className="text-xl text-white/80 mb-12 max-w-xl">
                  Alana O Interiors provides comprehensive interior design services to transform your space into a
                  beautiful, functional environment that reflects your personal style.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">OUR DESIGN SERVICES</h2>
              <div className="h-px w-20 bg-white/20 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
              {services.map((service) => (
                <div key={service.id} className="group">
                  <div className="relative h-[300px] mb-8 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>

                    {/* Service number */}
                    <div className="absolute top-6 left-6 w-16 h-16 rounded-full border border-white/30 flex items-center justify-center text-xl font-bold">
                      {service.id < 10 ? `0${service.id}` : service.id}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-white/70 mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check size={16} className="text-white mr-3 mt-1 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-white border-b border-white/30 pb-1 group-hover:border-white transition-colors"
                  >
                    <span className="mr-2">View Details</span>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-zinc-900">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h5 className="text-white/70 text-lg mb-4 tracking-wider uppercase">Our approach</h5>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">DESIGN PROCESS</h2>
              <p className="text-white/70 max-w-3xl mx-auto">
                At Alana O Interiors, we follow a comprehensive design process to ensure your project is executed with
                precision, creativity, and attention to detail from initial consultation to final styling.
              </p>
              <div className="h-px w-20 bg-white/20 mx-auto mt-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              <div className="border border-zinc-800 p-8 relative group hover:border-white/30 transition-colors">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-xl font-bold mb-6 group-hover:bg-white group-hover:text-black transition-all">
                  01
                </div>
                <h3 className="text-xl font-bold mb-4">Consultation</h3>
                <p className="text-white/70">
                  We begin by understanding your needs, preferences, lifestyle, and budget to establish the foundation
                  for your project.
                </p>
              </div>

              <div className="border border-zinc-800 p-8 relative group hover:border-white/30 transition-colors">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-xl font-bold mb-6 group-hover:bg-white group-hover:text-black transition-all">
                  02
                </div>
                <h3 className="text-xl font-bold mb-4">Concept Design</h3>
                <p className="text-white/70">
                  We develop design concepts that align with your vision, creating mood boards, color schemes, and
                  preliminary layouts.
                </p>
              </div>

              <div className="border border-zinc-800 p-8 relative group hover:border-white/30 transition-colors">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-xl font-bold mb-6 group-hover:bg-white group-hover:text-black transition-all">
                  03
                </div>
                <h3 className="text-xl font-bold mb-4">Implementation</h3>
                <p className="text-white/70">
                  We coordinate with contractors and suppliers to bring the design to life, overseeing the project to
                  ensure quality execution.
                </p>
              </div>

              <div className="border border-zinc-800 p-8 relative group hover:border-white/30 transition-colors">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-xl font-bold mb-6 group-hover:bg-white group-hover:text-black transition-all">
                  04
                </div>
                <h3 className="text-xl font-bold mb-4">Final Styling</h3>
                <p className="text-white/70">
                  We add the finishing touches with accessories, art, and decor to complete your space and create a
                  cohesive, personalized interior.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h5 className="text-white/70 text-lg mb-4 tracking-wider uppercase">Why choose us</h5>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  WHY CLIENTS CHOOSE ALANA O INTERIORS
                </h2>
                <div className="h-px w-20 bg-white/20 my-8"></div>
                <p className="text-white/70 mb-8">
                  With a passion for creating beautiful, functional spaces and a commitment to exceptional client
                  service, Alana O Interiors delivers personalized design solutions that transform houses into homes.
                </p>

                <Link
                  href="/about"
                  className="bg-white text-black px-8 py-4 inline-flex items-center group hover:bg-gray-200 transition-colors"
                >
                  <span className="mr-2 font-medium">About Alana</span>
                  <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="border border-zinc-800 p-6 hover:border-white/30 transition-colors">
                  <h3 className="text-xl font-bold mb-4">Personalized Approach</h3>
                  <p className="text-white/70">
                    Every design is tailored to reflect your unique style, needs, and lifestyle.
                  </p>
                </div>

                <div className="border border-zinc-800 p-6 hover:border-white/30 transition-colors">
                  <h3 className="text-xl font-bold mb-4">Attention to Detail</h3>
                  <p className="text-white/70">
                    We meticulously consider every aspect of your space, from layout to the smallest decorative
                    elements.
                  </p>
                </div>

                <div className="border border-zinc-800 p-6 hover:border-white/30 transition-colors">
                  <h3 className="text-xl font-bold mb-4">Quality Craftsmanship</h3>
                  <p className="text-white/70">
                    We partner with skilled craftsmen and quality suppliers to ensure exceptional results.
                  </p>
                </div>

                <div className="border border-zinc-800 p-6 hover:border-white/30 transition-colors">
                  <h3 className="text-xl font-bold mb-4">Award-Winning Design</h3>
                  <p className="text-white/70">
                    Our work has been recognized with industry awards and featured in design publications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-zinc-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h5 className="text-white/70 text-lg mb-4 tracking-wider uppercase">Testimonials</h5>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">WHAT OUR CLIENTS SAY</h2>
              <div className="h-px w-20 bg-white/20 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-zinc-800 p-8 hover:border-white/30 transition-colors">
                <div className="text-4xl text-white/30 mb-6">"</div>
                <p className="text-white/70 mb-8">
                  Alana transformed our home into a beautiful, functional space that perfectly reflects our style and
                  needs. Her attention to detail and ability to understand what we wanted was impressive.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-zinc-800 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Sarah & Michael</h4>
                    <p className="text-white/50 text-sm">Residential Client, Perth</p>
                  </div>
                </div>
              </div>

              <div className="border border-zinc-800 p-8 hover:border-white/30 transition-colors">
                <div className="text-4xl text-white/30 mb-6">"</div>
                <p className="text-white/70 mb-8">
                  Working with Alana was a seamless experience from start to finish. She listened to our ideas and
                  created a kitchen design that exceeded our expectations while staying within our budget.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-zinc-800 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Emma & David</h4>
                    <p className="text-white/50 text-sm">Kitchen Renovation, Perth</p>
                  </div>
                </div>
              </div>

              <div className="border border-zinc-800 p-8 hover:border-white/30 transition-colors">
                <div className="text-4xl text-white/30 mb-6">"</div>
                <p className="text-white/70 mb-8">
                  Alana's expertise and creativity transformed our outdated bathroom into a luxurious retreat. Her
                  attention to detail and project management skills made the renovation process stress-free.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-zinc-800 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Jennifer</h4>
                    <p className="text-white/50 text-sm">Bathroom Renovation, Perth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/placeholder.svg?height=1200&width=2000')" }}
            />
            <div className="absolute inset-0 bg-black/80" />

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

          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">READY TO TRANSFORM YOUR SPACE?</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-12">
              Contact Alana today to schedule a consultation and discover how Alana O Interiors can help you create a
              beautiful, functional space that reflects your personal style.
            </p>
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-4 inline-flex items-center group hover:bg-gray-200 transition-colors"
            >
              <span className="mr-2 font-medium">Book a Consultation</span>
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

