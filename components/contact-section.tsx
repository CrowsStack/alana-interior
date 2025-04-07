"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" })
    // Show success message
    alert("Thank you for your message. We'll get back to you soon!")
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Ready to transform your space? Contact us to schedule a consultation.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg border-2 border-gold/30"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  placeholder="Your phone number (optional)"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  placeholder="Tell us about your project"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-white py-3 px-6 rounded-md hover:bg-gold-dark transition-colors flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-playfair mb-4">Our Design Process</h3>
              <ol className="space-y-4">
                <li className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Initial Consultation</h4>
                    <p className="text-gray-600">
                      We discuss your vision, requirements, and budget to understand your needs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Concept Development</h4>
                    <p className="text-gray-600">Our designers create detailed concepts based on your preferences.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Design Refinement</h4>
                    <p className="text-gray-600">
                      We refine the designs based on your feedback until you're completely satisfied.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Implementation</h4>
                    <p className="text-gray-600">
                      Our team brings the design to life with meticulous attention to detail.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-gold">
              <h4 className="font-bold text-lg mb-2">Ready to Start Your Project?</h4>
              <p className="text-gray-600 mb-4">Schedule a free consultation with our design experts.</p>
              <a href="tel:+15551234567" className="inline-flex items-center text-gold hover:underline font-medium">
                Call us at +1 (555) 123-4567
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

