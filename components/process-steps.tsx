"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import ScrollObserver from "./scroll-observer"

interface ProcessStep {
  number: string
  title: string
  description: string
  icon: React.ReactNode
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "Begin with a comprehensive discussion to understand the client's needs, preferences, and the scope of the project.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 20h10M20 15v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Concept Development",
    description:
      "Develop design concepts that align with the client's vision, incorporating style preferences and functional requirements.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="20" height="20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 15h10v10H15z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Design Development",
    description:
      "Refine the chosen concept, selecting materials, finishes, and furnishings to create a cohesive design plan.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20h20M20 10v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Documentation",
    description:
      "Prepare detailed drawings and specifications to guide contractors and ensure accurate implementation.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="8" width="16" height="24" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 12h8M16 16h8M16 20h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Implementation",
    description:
      "Oversee the project's execution, coordinating with tradespeople and suppliers to bring the design to life.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 30l10-20 10 20H10z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="15" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Final Styling",
    description:
      "Add finishing touches with accessories and styling to complete the space and reflect the client's personality.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="14" width="12" height="12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 10v4M20 26v4M10 20h4M26 20h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function ProcessSteps() {
  return (
    <ScrollObserver>
      <section className="py-20 bg-[#f5f5f0]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="fade-in"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start">
                  <div className="text-gray-400 mr-4">{step.icon}</div>
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-sm text-gray-500 mr-2">{step.number}/</span>
                      <h3 className="text-lg font-medium text-black">{step.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{step.description}</p>
                    <div className="flex justify-end">
                      <ArrowRight size={16} className="text-gray-400" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ScrollObserver>
  )
}

