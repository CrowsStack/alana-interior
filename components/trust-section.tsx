"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import ScrollObserver from "./scroll-observer"

interface TrustFeature {
  title: string
  icon: React.ReactNode
}

const trustFeatures: TrustFeature[] = [
  {
    title: "Creative Ideas",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5ZM15 15C15 13.3431 16.3431 12 18 12C19.6569 12 21 13.3431 21 15C21 16.6569 19.6569 18 18 18C16.3431 18 15 16.6569 15 15ZM25 25C25 26.6569 23.6569 28 22 28C20.3431 28 19 26.6569 19 25C19 23.3431 20.3431 22 22 22C23.6569 22 25 23.3431 25 25ZM12 20C12 18.3431 13.3431 17 15 17C16.6569 17 18 18.3431 18 20C18 21.6569 16.6569 23 15 23C13.3431 23 12 21.6569 12 20ZM28 20C28 21.6569 26.6569 23 25 23C23.3431 23 22 21.6569 22 20C22 18.3431 23.3431 17 25 17C26.6569 17 28 18.3431 28 20Z"
          stroke="white"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Uniqueness",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 5L25 15L35 17.5L27.5 25L30 35L20 30L10 35L12.5 25L5 17.5L15 15L20 5Z"
          stroke="white"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "High Efficiency",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5ZM20 15V20L25 25"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Best Solution",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M30 15L17.5 27.5L10 20"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

const companyFeatures = [
  "We are a locally owned and operated company",
  "Our technicians are the best in the Greensboro market",
  "We're on the job, ready to serve 24/7",
  "Flair for both schematic and concept design reflecting client vision",
  "We have over 25 years in business serving the community",
  "It all begins with an idea, our design studio facilities",
]

export default function TrustSection() {
  return (
    <ScrollObserver>
      <section className="py-20 bg-black text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="mb-12">
                <motion.h2
                  className="text-6xl md:text-7xl lg:text-8xl font-bold fade-in"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Trust.
                </motion.h2>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {trustFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="fade-in"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="border border-white/20 rounded-full p-8 aspect-square flex flex-col items-center justify-center text-center">
                      <div className="mb-4">{feature.icon}</div>
                      <h3 className="text-sm font-medium">{feature.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="mb-8 fade-in">
                <p className="text-white/70 mb-4">We're a Small Team, but We Stand Out from the Crowd.</p>
                <p className="text-white/70">
                  Our commitment is to develop a long-lasting relationship with all of our clients, by providing a full
                  set of robust drawings.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {companyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-2 fade-in"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Check size={16} className="mt-1 flex-shrink-0" />
                    <p className="text-sm text-white/70">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollObserver>
  )
}

