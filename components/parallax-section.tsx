"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6])

  return (
    <section ref={ref} className="relative h-[50vh] md:h-[70vh] overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 bg-cover bg-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/placeholder.svg?height=1200&width=2000')" }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair">Transform Your Space</h2>
          <p className="text-xl md:text-2xl mb-8">
            From concept to completion, we bring your vision to life with meticulous attention to detail.
          </p>
          <button className="bg-gold text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium hover:bg-gold-dark transition-colors border-2 border-white/30">
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  )
}

