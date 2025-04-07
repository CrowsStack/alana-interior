"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { motion } from "framer-motion"
import ProcessSteps from "@/components/process-steps"

export default function StudioPage() {
  return (
    <>
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
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">Studio</h1>
              <p className="text-xl text-white/80 mb-12 max-w-xl"></p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white text-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who is Maiko?</h2>
              <p className="text-gray-700 mb-4">
                Maiko is a fully qualified architecture studio based in France, catering for all fields of architectural
                design: Residential, Commercial, Renovations, Urban Planning and Sustainable Design.
              </p>
              <p className="text-gray-700 mb-4">
                Design is our passion and our proposals are tailored to suit our clients' taste while introducing the
                latest, gorgeous innovations to make their spaces truly unique and special!
              </p>
              <p className="text-gray-700 mb-4">
                Modern? Minimalist? Sustainable? Contemporary? Or perhaps a mix of the old and the new? Anything is
                possible when you're in capable hands!
              </p>
              <p className="text-gray-700 mb-8">
                With extensive experience designing prestigious projects across Europe, Maiko believes every space has
                the potential to look and feel fantastic!
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-black text-white px-6 py-3 text-sm font-medium group"
              >
                <span>Get In Touch</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Maiko Architecture Studio"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Design Philosophy</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Check size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Client-Centered Approach</h3>
                    <p className="text-white/70">
                      We believe that the best designs emerge from a deep understanding of our clients' needs,
                      preferences, and lifestyles. We listen carefully and collaborate closely throughout the process.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Check size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Balance of Form and Function</h3>
                    <p className="text-white/70">
                      Beautiful spaces should also be practical. We create designs that not only look stunning but also
                      enhance how you live, work, and interact with your environment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Check size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Attention to Detail</h3>
                    <p className="text-white/70">
                      We believe that the smallest details often make the biggest impact. From custom joinery to
                      perfectly placed accessories, we consider every element of your space.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Check size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Sustainable Practices</h3>
                    <p className="text-white/70">
                      We're committed to environmentally responsible design, incorporating sustainable materials and
                      energy-efficient solutions whenever possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px]">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Interior Design Project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps />

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2 text-gold">100+</div>
              <p className="text-white/70">Projects Completed</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-gold">5.0</div>
              <p className="text-white/70">Google Rating</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-gold">8+</div>
              <p className="text-white/70">Years Experience</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-gold">95%</div>
              <p className="text-white/70">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#f5f5f0] text-black">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Contact us today to schedule a consultation and discover how we can help bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-black text-white px-8 py-4 text-sm font-medium group"
          >
            <span>Book a Consultation</span>
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}

