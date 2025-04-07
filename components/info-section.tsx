"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import ScrollObserver from "./scroll-observer"

interface InfoItem {
  title: string
  description: string
}

const infoItems: InfoItem[] = [
  {
    title: "Interior Design Expertise",
    description:
      "We specialize in creating beautiful, functional spaces that reflect your unique style and needs. From concept to completion, our team ensures every detail is thoughtfully considered.",
  },
  {
    title: "Transformative Spaces",
    description:
      "Our architectural vision focuses on transforming spaces into environments that are both aesthetically pleasing and practical. We collaborate with you to bring your dream home or office to life.",
  },
]

export default function InfoSection() {
  return (
    <ScrollObserver>
      <section className="py-12 border-t border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="fade-in">
              <div className="space-y-4">
                <Link href="/brochure" className="text-black hover:text-gray-700 transition-colors">
                  Download Our Brochure
                </Link>
                <Link href="/questions" className="block text-black hover:text-gray-700 transition-colors">
                  Ask Us your Questions our Architects
                </Link>
                <Link href="/career" className="block text-black hover:text-gray-700 transition-colors">
                  Career Together
                </Link>
              </div>
            </div>

            {infoItems.map((item, index) => (
              <motion.div
                key={index}
                className="fade-in"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-medium text-black mb-4">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ScrollObserver>
  )
}

