"use client"

import { useEffect, useRef } from "react"

export default function MazeAnimation() {
  const mazeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mazeRef.current) return

    const container = mazeRef.current
    const lines: HTMLDivElement[] = []
    const lineCount = 30 // Increase number of lines for more density

    // Clear any existing lines
    container.innerHTML = ""

    // Create particles (dots)
    for (let i = 0; i < lineCount; i++) {
      const line = document.createElement("div")
      line.className = "maze-line"

      // Random size between 2-6px
      const size = Math.random() * 4 + 2
      line.style.width = `${size}px`
      line.style.height = `${size}px`

      // Random position
      const top = Math.random() * 100
      const left = Math.random() * 100
      line.style.top = `${top}%`
      line.style.left = `${left}%`

      container.appendChild(line)
      lines.push(line)

      // Animate the particle
      animateParticle(line)
    }

    // Create lines
    for (let i = 0; i < lineCount / 2; i++) {
      const line = document.createElement("div")
      line.className = "maze-line"

      // Thinner lines
      const thickness = Math.random() * 1 + 0.5
      const length = Math.random() * 20 + 10
      const isHorizontal = Math.random() > 0.5

      if (isHorizontal) {
        line.style.height = `${thickness}px`
        line.style.width = `${length}%`
      } else {
        line.style.width = `${thickness}px`
        line.style.height = `${length}%`
      }

      // Random position
      const top = Math.random() * 100
      const left = Math.random() * 100
      line.style.top = `${top}%`
      line.style.left = `${left}%`

      // Random angle for some lines
      if (Math.random() > 0.7) {
        const angle = Math.floor(Math.random() * 4) * 45 // 0, 45, 90, 135 degrees
        line.style.transform = `rotate(${angle}deg)`
      }

      container.appendChild(line)
      lines.push(line)

      // Animate the line
      animateLine(line, isHorizontal)
    }

    function animateParticle(element: HTMLDivElement) {
      // Random duration between 10-30s
      const duration = Math.random() * 20 + 10
      // Random delay
      const delay = Math.random() * 5

      // Random movement range
      const xRange = Math.random() * 30 + 10
      const yRange = Math.random() * 30 + 10

      // Initial position
      const initialTop = Number.parseFloat(element.style.top)
      const initialLeft = Number.parseFloat(element.style.left)

      // Animate with CSS
      element.style.transition = `none`

      setTimeout(() => {
        element.style.transition = `all ${duration}s linear`

        // Create a path with multiple points
        function moveParticle(iteration = 0) {
          if (iteration > 20) {
            // Limit iterations to prevent infinite loop
            return
          }

          // Random movement
          const newTop = initialTop + (Math.random() * 2 - 1) * yRange
          const newLeft = initialLeft + (Math.random() * 2 - 1) * xRange

          // Keep within bounds
          const boundedTop = Math.max(0, Math.min(100, newTop))
          const boundedLeft = Math.max(0, Math.min(100, newLeft))

          element.style.top = `${boundedTop}%`
          element.style.left = `${boundedLeft}%`

          // Pulse size and opacity
          const newSize = Math.random() * 4 + 2
          const newOpacity = Math.random() * 0.3 + 0.1

          element.style.width = `${newSize}px`
          element.style.height = `${newSize}px`
          element.style.opacity = `${newOpacity}`

          // Continue movement after a delay
          setTimeout(() => moveParticle(iteration + 1), (duration * 1000) / 4)
        }

        moveParticle()
      }, delay * 1000)
    }

    function animateLine(element: HTMLDivElement, isHorizontal: boolean) {
      // Random duration between 15-40s
      const duration = Math.random() * 25 + 15
      // Random delay
      const delay = Math.random() * 5

      // Movement range
      const range = Math.random() * 20 + 10

      // Initial position
      const initialTop = Number.parseFloat(element.style.top)
      const initialLeft = Number.parseFloat(element.style.left)

      // Animate with CSS
      element.style.transition = `none`

      setTimeout(() => {
        element.style.transition = `all ${duration}s linear`

        function moveLine(iteration = 0) {
          if (iteration > 10) {
            // Limit iterations
            return
          }

          // Move in the appropriate direction
          if (isHorizontal) {
            const newLeft = initialLeft + (Math.random() * 2 - 1) * range
            element.style.left = `${Math.max(0, Math.min(100, newLeft))}%`
          } else {
            const newTop = initialTop + (Math.random() * 2 - 1) * range
            element.style.top = `${Math.max(0, Math.min(100, newTop))}%`
          }

          // Fade in/out
          element.style.opacity = `${Math.random() * 0.3 + 0.1}`

          // Continue movement
          setTimeout(() => moveLine(iteration + 1), (duration * 1000) / 3)
        }

        moveLine()
      }, delay * 1000)
    }

    return () => {
      // Cleanup
      container.innerHTML = ""
    }
  }, [])

  return <div ref={mazeRef} className="maze-container" />
}

