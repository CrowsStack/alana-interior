"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Home, Ruler, MessageCircle, FileText } from "lucide-react"
import ScrollObserver from "./scroll-observer"

interface ServiceIcon {
  icon: React.ReactNode
  title: string
  description: string // Added description
}

const serviceIcons: ServiceIcon[] = [
  {
    icon: <Home className="w-6 h-6" />,
    title: "I Want To Remodel",
    description: "Transform your existing space into something new and exciting.",
  },
  {
    icon: <Ruler className="w-6 h-6" />,
    title: "I Want To New Build",
    description: "Create your dream home from the ground up with our expert team.",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "I Need To Meet In Person",
    description: "Discuss your project face-to-face for personalized solutions.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Download Brochure",
    description: "Learn more about our services and past projects in our brochure.",
  },
]

export default function CTASection() {
  return (
    <ScrollObserver>
      <section className="py-20 bg-[#f5f5f0]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-black mb-4 fade-in">Let's Make Something Beautiful Together!</h2>
            <p className="text-gray-600 max-w-2xl mx-auto fade-in">
              Contact us no matter what your needs are, we always guarantee to bring you the best solutions for your
              home.
            </p>
          </div>

          <div className="bg-gray-200 p-6 rounded-md mb-12 fade-in">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
              <div>Call Us Support : +8120-360-4027</div>
              <div>Mail Us : Maikoarchitecture@gmail.com</div>
              <div>Studio Address : 206 Mail Parking Nuages, 14529 Levallois-Perret, France</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {serviceIcons.map((service, index) => (
              <motion.div
                key={index}
                className="fade-in flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center mb-4">
                    <div className="w-full h-1/2 bg-black absolute bottom-0 rounded-b-full flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-black text-center text-sm font-medium mb-2">{service.title}</h3>
                <p className="text-gray-600 text-center text-xs">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ScrollObserver>
  )
}

