"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ScrollObserverProps {
  children: React.ReactNode
  className?: string
}

export default function ScrollObserver({ children, className = "" }: ScrollObserverProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
            // Only remove the class if the element is above the viewport
            entry.target.classList.remove("visible")
          }
        })
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: "0px 0px -10% 0px", // Slightly reduce the effective viewport
      },
    )

    const elements = ref.current?.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

