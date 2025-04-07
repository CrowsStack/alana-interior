"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutPage() {
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
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">About US</h1>
              <p className="text-xl text-white/80 mb-12 max-w-xl"></p>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="pt-20">
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are a team of passionate designers dedicated to creating exceptional interior spaces.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="relative h-[400px] rounded-lg overflow-hidden border-2 border-gold/30">
                <Image src="/placeholder.svg?height=800&width=1200" alt="Our studio" fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2010, DECORE has grown from a small design studio to a comprehensive interior design firm
                  serving clients across the country. Our journey began with a simple mission: to create spaces that
                  inspire and transform.
                </p>
                <p className="text-gray-600 mb-4">
                  Over the years, we've built a reputation for innovative design solutions that blend aesthetics with
                  functionality. We believe that great design should not only look beautiful but also enhance the way
                  people live and work.
                </p>
                <p className="text-gray-600">
                  Today, our team of talented designers continues to push boundaries and explore new possibilities in
                  interior design, always with a focus on quality, sustainability, and client satisfaction.
                </p>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                Meet the creative minds behind our exceptional designs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="text-center">
                  <div className="relative h-80 mb-4 rounded-lg overflow-hidden border-2 border-gold/30">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt={`Team member ${item}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">Jane Doe</h3>
                  <p className="text-gold mb-2">Senior Designer</p>
                  <p className="text-gray-600 text-sm">
                    With over 10 years of experience, Jane specializes in contemporary residential design.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

