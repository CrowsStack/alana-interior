"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface CursorPosition {
  x: number
  y: number
  isDragging: boolean
}

interface CustomCursorProps {
  heroRef: React.RefObject<HTMLDivElement>
  isMobile: boolean
  isHoveringLink: boolean
  setIsHoveringLink: React.Dispatch<React.SetStateAction<boolean>>
}

const CustomCursor: React.FC<CustomCursorProps> = ({ heroRef, isMobile, isHoveringLink, setIsHoveringLink }) => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [cursorPos, setCursorPos] = useState<CursorPosition>({
    x: 0,
    y: 0,
    isDragging: false,
  })
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null)
  const [isHoveringCursor, setIsHoveringCursor] = useState(false)

  useEffect(() => {
    if (!heroRef.current || !cursorRef.current || isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const rect = heroRef.current!.getBoundingClientRect()

      // Calculate mouse position relative to the container
      const x = clientX - rect.left
      const y = clientY - rect.top

      // Update cursor position with boundary constraints and compound movement
      if (cursorPos.isDragging && dragStart) {
        const deltaX = clientX - dragStart.x
        const deltaY = clientY - dragStart.y

        // Apply smooth movement with improved boundaries
        setCursorPos((prev) => {
          const targetX = clientX - 48 // Center cursor on mouse
          const targetY = clientY - 48
          const newX = Math.min(Math.max(targetX, rect.left), rect.right - 96)
          const newY = Math.min(Math.max(targetY, rect.top), rect.bottom - 96)
          return {
            x: newX,
            y: newY,
            isDragging: true,
          }
        })
        setDragStart({ x: clientX, y: clientY })
      } else {
        // Smooth following when not dragging
        setCursorPos((prev) => ({
          ...prev,
          x: clientX - 48,
          y: clientY - 48,
          isDragging: false,
        }))
      }
    }

    const handleMouseDown = (e: MouseEvent) => {
      setCursorPos((prev) => ({ ...prev, isDragging: true }))
      setDragStart({ x: e.clientX, y: e.clientY })
    }

    const handleMouseUp = () => {
      setCursorPos((prev) => ({ ...prev, isDragging: false }))
      setDragStart(null)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [cursorPos.isDragging, dragStart, isMobile, heroRef])

  return !isMobile ? (
    <motion.div
      ref={cursorRef}
      className="fixed w-24 h-24 z-[999] pointer-events-none mix-blend-difference" // Increased z-index and pointer-events-none
      style={{
        left: cursorPos.x,
        top: cursorPos.y,
        transform: `translate(-50%, -50%)`,
      }}
      animate={{
        scale: cursorPos.isDragging ? 0.8 : isHoveringLink ? 1.2 : 1,
        rotate: isHoveringLink ? 45 : 0,
        cursor: isHoveringCursor ? (cursorPos.isDragging ? "grabbing" : "grab") : "none",
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 200,
        mass: 0.8,
      }}
      onMouseEnter={() => setIsHoveringCursor(true)}
      onMouseLeave={() => setIsHoveringCursor(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        height="100%"
        viewBox="0 0 24 24"
        width="100%"
        className="absolute inset-0 transition-transform duration-300"
        style={{ transform: `scale(${cursorPos.isDragging ? 0.8 : 1})` }}
      >
        <path d="m16.0039 9.414-8.60699 8.607-1.414-1.414 8.60599-8.607h-7.58499v-2h10.99999v11h-2z" fill="white" />
      </svg>
      <svg
        className="absolute inset-0 animate-spin-slow transition-opacity duration-300"
        style={{ opacity: isHoveringLink ? 1 : 0.5 }}
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" fill="none" stroke="white" strokeWidth="1" />
      </svg>
    </motion.div>
  ) : null
}

export default CustomCursor

