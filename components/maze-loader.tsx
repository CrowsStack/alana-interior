"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function MazeLoader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [loadingText, setLoadingText] = useState("Loading")

  useEffect(() => {
    // Update loading text with dots animation
    const interval = setInterval(() => {
      setLoadingText((prev) => {
        if (prev === "Loading...") return "Loading"
        return prev + "."
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 200
    canvas.height = 200

    // Create a simple A-shaped path for the Alana O Interiors logo
    const drawLogo = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw outer circle
      ctx.beginPath()
      ctx.arc(100, 100, 80, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.8)"
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw inner circle
      ctx.beginPath()
      ctx.arc(100, 100, 75, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.4)"
      ctx.lineWidth = 1
      ctx.stroke()

      // Draw the A shape
      ctx.beginPath()
      ctx.moveTo(80, 150)
      ctx.lineTo(100, 50)
      ctx.lineTo(120, 150)
      ctx.strokeStyle = "white"
      ctx.lineWidth = 2
      ctx.stroke()

      // Animate a pulse effect
      const now = Date.now() / 1000
      const pulse = Math.sin(now * 3) * 0.5 + 0.5

      // Draw pulsing circle
      ctx.beginPath()
      ctx.arc(100, 100, 60 + pulse * 10, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 + pulse * 0.3})`
      ctx.lineWidth = 1
      ctx.stroke()
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      drawLogo()
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center">
      <canvas ref={canvasRef} className="w-48 h-48" />
      <motion.p
        className="text-white mt-4 text-sm"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
      >
        {loadingText}
      </motion.p>
    </div>
  )
}

