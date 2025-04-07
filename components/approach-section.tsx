"use client"

import { useRef } from "react"
import Image from "next/image"
import { useScroll, useTransform } from "framer-motion"
import ScrollObserver from "./scroll-observer"

export default function ApproachSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <ScrollObserver>
      <section ref={sectionRef} className="py-20 bg-[#111]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-lg mb-8 fade-in">Our Approach.</h2>
              <div className="space-y-6">
                <p className="text-white/70 fade-in">
                  We partner with our clients, becoming a part of their development team. We understand that each
                  project has unique challenges and market opportunities. We stay with a project from conceptualization
                  to completion and beyond.
                </p>
                <div className="relative h-[200px] fade-in">
                  <Image
                    src="https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-Z8gBxSbxYtaKXd2qxbastxJQoSWZBr.png&w=384&q=75"
                    alt="Our approach"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="heading-lg mb-8 fade-in">Building the Future Cities</h2>
              <div className="space-y-8">
                <div className="fade-in">
                  <h3 className="text-xl font-medium mb-3">Unique and Influential Design</h3>
                  <p className="text-white/70">
                    Proin posuere ex ut consectetur felis. Pede venentu arcu ipsum, eget ultrices erat posuere id.
                    Aliquam vel dolor sed ipsum varius aliquet.
                  </p>
                </div>

                <div className="fade-in">
                  <h3 className="text-xl font-medium mb-3">Award-Winning Architecture</h3>
                  <p className="text-white/70">
                    Proin posuere ex ut consectetur felis. Pede venentu arcu ipsum, eget ultrices erat posuere id.
                    Aliquam vel dolor sed ipsum varius aliquet.
                  </p>
                </div>

                <div className="fade-in">
                  <h3 className="text-xl font-medium mb-3">Sustainable Solutions</h3>
                  <p className="text-white/70">
                    Proin posuere ex ut consectetur felis. Pede venentu arcu ipsum, eget ultrices erat posuere id.
                    Aliquam vel dolor sed ipsum varius aliquet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollObserver>
  )
}

