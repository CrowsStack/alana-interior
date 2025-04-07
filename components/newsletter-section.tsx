"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
    alert("Thank you for subscribing!")
  }

  return (
    <div className="py-8">
      <div className="max-w-md">
        <h3 className="text-xl font-medium mb-4">Sign up to receive the latest news and events from us.</h3>
        <form onSubmit={handleSubmit} className="flex items-center">
          <div className="flex-grow">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full bg-transparent border-b border-white/30 py-2 text-white outline-none focus:border-white"
              required
            />
            <p className="text-xs text-white/50 mt-2">No worries, we don't spam your inbox.</p>
          </div>
          <button type="submit" className="ml-4 bg-white text-black p-3" aria-label="Subscribe">
            <ArrowRight size={20} />
          </button>
        </form>
      </div>
    </div>
  )
}

