"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Home, Layers, PenTool, Users } from "lucide-react"
import ScrollObserver from "./scroll-observer"

interface ServiceItem {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}

const services: ServiceItem[] = [
  {
    icon: <PenTool size={24} />,
    title: "Interior Design Consult Perth",
    description: "A one-off consult is fitting for quite a few situations",
    link: "/services-interior-design-consult-perth",
  },
  {
    icon: <Home size={24} />,
    title: "Home Furnishing Perth",
    description: "Our interior design services transform spaces into beautiful, functional environments.",
    link: "/services-home-furnishing-perth",
  },
  {
    icon: <Layers size={24} />,
    title: "Home Staging Styling Perth",
    description:
      "potential of your home staging and styling with Perth Interior Designer Alana O Interiors!. We breathe new life into existing spaces with thoughtful renovations",
    link: "/services-home-staging-styling-perth",
  },
  {
    icon: <Users size={24} />,
    title: "Custom Cabinetry Design Perth",
    description:
      "Don’t wait any longer to raise your home to professional level, Our consulting services provide expert guidance throughout the design project.",
    link: "/services-custom-cabinetry-design-perth",
  },
]

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <ScrollObserver>
      <section className="py-20">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16 fade-in">Our Services.</h2>

          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="fade-in border-t border-white/10 py-8 group"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="service-circle mr-6">{service.icon}</div>
                    <h3 className="text-2xl font-medium">{service.title}</h3>
                  </div>

                  <motion.div
                    animate={{
                      x: hoveredService === index ? 10 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href={service.link}
                      className="inline-flex items-center text-white/70 group-hover:text-white transition-colors"
                    >
                      <span className="mr-2">View Service</span>
                      <ArrowRight size={16} />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ScrollObserver>
  )
}

