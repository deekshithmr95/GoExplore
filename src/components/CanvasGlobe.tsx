'use client'

import { useEffect, useRef } from 'react'

export default function CanvasGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationIdRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const size = 400
    canvas.width = size
    canvas.height = size

    let rotation = 0

    const drawGlobe = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(15, 23, 42, 1)'
      ctx.fillRect(0, 0, size, size)

      ctx.save()
      ctx.translate(size / 2, size / 2)

      // Draw outer glow
      const glowGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 110)
      glowGradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)')
      glowGradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.1)')
      glowGradient.addColorStop(1, 'rgba(59, 130, 246, 0)')
      ctx.fillStyle = glowGradient
      ctx.beginPath()
      ctx.arc(0, 0, 110, 0, Math.PI * 2)
      ctx.fill()

      // Rotate for animation
      ctx.rotate((rotation * Math.PI) / 180)

      // Draw main globe with gradient
      const globeGradient = ctx.createRadialGradient(-30, -30, 0, 0, 0, 90)
      globeGradient.addColorStop(0, '#3b82f6')
      globeGradient.addColorStop(0.5, '#1e40af')
      globeGradient.addColorStop(1, '#1e3a8a')
      ctx.fillStyle = globeGradient
      ctx.beginPath()
      ctx.arc(0, 0, 90, 0, Math.PI * 2)
      ctx.fill()

      // Draw continents (simplified landmasses)
      ctx.fillStyle = '#10b981'
      
      // North America
      ctx.beginPath()
      ctx.ellipse(-40, -30, 15, 20, -0.3, 0, Math.PI * 2)
      ctx.fill()

      // South America
      ctx.beginPath()
      ctx.ellipse(-50, 10, 10, 18, -0.2, 0, Math.PI * 2)
      ctx.fill()

      // Europe
      ctx.beginPath()
      ctx.ellipse(-10, -35, 12, 10, 0.1, 0, Math.PI * 2)
      ctx.fill()

      // Africa
      ctx.beginPath()
      ctx.ellipse(10, -20, 12, 18, 0.2, 0, Math.PI * 2)
      ctx.fill()

      // Asia
      ctx.beginPath()
      ctx.ellipse(35, -25, 25, 20, 0.3, 0, Math.PI * 2)
      ctx.fill()

      // Australia
      ctx.beginPath()
      ctx.ellipse(50, 20, 10, 12, 0, 0, Math.PI * 2)
      ctx.fill()

      // Draw ocean lines (latitude/longitude)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.lineWidth = 0.5

      // Equator
      ctx.beginPath()
      ctx.ellipse(0, 0, 85, 30, 0, 0, Math.PI * 2)
      ctx.stroke()

      // Prime meridian
      ctx.beginPath()
      ctx.moveTo(0, -85)
      ctx.lineTo(0, 85)
      ctx.stroke()

      // Add shine effect
      const shineGradient = ctx.createLinearGradient(-60, -60, 60, 60)
      shineGradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)')
      shineGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)')
      shineGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      ctx.fillStyle = shineGradient
      ctx.beginPath()
      ctx.arc(0, 0, 90, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()

      rotation += 0.5
      animationIdRef.current = requestAnimationFrame(drawGlobe)
    }

    drawGlobe()

    return () => {
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-20">
      <canvas
        ref={canvasRef}
        className="drop-shadow-2xl rounded-lg"
        style={{
          width: 400,
          maxWidth: '100%',
        }}
      />
      <div className="mt-8 text-center">
        <p className="text-white text-lg font-semibold">Explore the World</p>
        <p className="text-blue-100 text-sm mt-2">Select a destination to get started</p>
      </div>
    </div>
  )
}
