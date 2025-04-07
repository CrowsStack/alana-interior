"use client"

import type React from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    // Reset form
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    // Show success message
    alert("Thank you for your message. We'll get back to you soon!")
  }

  return (
    <div className="bg-black text-white">
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
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">Contact US</h1>
              <p className="text-xl text-white/80 mb-12 max-w-xl"></p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section (moved outside the hero) */}
      <section className="py-20 bg-white text-black relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Send Us a Message</h2>
              <p className="text-gray-700 mb-8">We'll get back to you as soon as possible.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-black"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-black"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-black"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-black"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Design</option>
                      <option value="commercial">Commercial Design</option>
                      <option value="renovation">Renovation & Remodeling</option>
                      <option value="consultation">Consultation & Styling</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-black"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center bg-black text-white px-6 py-3 text-sm font-medium group"
                >
                  <span>Send Message</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            <div className="space-y-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-gold mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1 text-black">Our Office</h3>
                      <p className="text-gray-700">
                        206 Mail Parking Nuages
                        <br />
                        14529 Levallois-Perret
                        <br />
                        France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone size={24} className="text-gold mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1 text-black">Phone</h3>
                      <p className="text-gray-700">
                        <a href="tel:+8120-360-4027" className="hover:text-gold transition-colors text-black">
                          +8120-360-4027
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail size={24} className="text-gold mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1 text-black">Email</h3>
                      <p className="text-gray-700">
                        <a
                          href="mailto:Maikoarchitecture@gmail.com"
                          className="hover:text-gold transition-colors text-black"
                        >
                          Maikoarchitecture@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-black">Business Hours</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>By appointment</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>

              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.9548336767266!2d2.2833!3d48.8935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f7446b4bd31%3A0x4136fefec380b0!2sLevallois-Perret%2C%20France!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

