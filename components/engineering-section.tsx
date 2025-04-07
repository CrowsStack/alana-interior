"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import ScrollObserver from "./scroll-observer"

interface ProgressBarProps {
  label: string
  value: number
  delay?: number
}

function ProgressBar({ label, value, delay = 0 }: ProgressBarProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm uppercase tracking-wider">{label}</span>
        <span className="text-sm">{value}%</span>
      </div>
      <div className="h-[2px] bg-white/10 w-full">
        <motion.div
          className="h-full bg-white"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 1, delay }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  )
}

export default function EngineeringSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <ScrollObserver>
      <section ref={sectionRef} className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] fade-in">
              <Image
                src="https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-gf9ESX6SOMGww484rQQYazULIwDpjG.png&w=1080&q=75"
                alt="Craft and Engineering"
                fill
                className="object-cover grayscale"
              />
            </div>

            <div>
              <motion.div
                className="fade-in"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-medium mb-6 uppercase">
                  Through a unique combination
                  <br />
                  of engineering, and construction.
                </h2>
                <p className="text-white/70 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu hendrerit risus, non placerat
                  dolor. Integer porta vestibulum feugiat.
                </p>

                <div className="space-y-8">
                  <ProgressBar label="Architecture" value={85} delay={0.2} />
                  <ProgressBar label="Interior" value={70} delay={0.4} />
                  <ProgressBar label="Construction" value={90} delay={0.6} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </ScrollObserver>
  )
}

