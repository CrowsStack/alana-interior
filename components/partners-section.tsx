"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

const partners = [
  { name: "Partner 1", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Partner 2", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Partner 3", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Partner 4", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Partner 5", logo: "/placeholder.svg?height=80&width=160" },
]

export default function PartnersSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section ref={sectionRef} className="py-16 border-t border-white/10">
      <div className="container-custom">
        <div className="overflow-hidden">
          <motion.div style={{ x: x }} className="flex space-x-12 opacity-50">
            {partners.map((partner, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

