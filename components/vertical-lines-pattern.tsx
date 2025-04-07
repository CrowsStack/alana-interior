"use client"

import { useEffect, useRef } from "react"

interface VerticalLinesPatternsProps {
  count?: number
  className?: string
}

export default function VerticalLinesPattern({ count = 10, className = "" }: VerticalLinesPatternsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const containerWidth = container.offsetWidth

    // Clear any existing lines
    container.innerHTML = ""

    // Create vertical lines
    for (let i = 0; i < count; i++) {
      const line = document.createElement("div")
      line.className = "vertical-line"

      // Position lines evenly across the container
      const position = (i / (count - 1)) * 100
      line.style.left = `${position}%`

      container.appendChild(line)
    }

    return () => {
      // Cleanup
      container.innerHTML = ""
    }
  }, [count])

  return <div ref={containerRef} className={`vertical-lines ${className}`} />
}

