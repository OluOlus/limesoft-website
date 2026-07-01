'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
}

interface Props {
  r?: number
  g?: number
  b?: number
  count?: number
  maxDist?: number
  speed?: number
}

export default function ParticleBackground({
  r = 1, g = 138, b = 216,
  count = 90,
  maxDist = 130,
  speed = 0.35,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let W = 0, H = 0
    let particles: Particle[] = []
    let mouse = { x: -9999, y: -9999 }

    const init = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        size: Math.random() * 1.4 + 0.4,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = W
        else if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H
        else if (p.y > H) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},0.55)`
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.18
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }

        // subtle mouse repulsion
        const mdx = particles[i].x - mouse.x
        const mdy = particles[i].y - mouse.y
        const md = Math.sqrt(mdx * mdx + mdy * mdy)
        if (md < 100) {
          const force = (100 - md) / 100 * 0.8
          particles[i].vx += (mdx / md) * force * 0.05
          particles[i].vy += (mdy / md) * force * 0.05
          // clamp velocity
          const spd = Math.sqrt(particles[i].vx ** 2 + particles[i].vy ** 2)
          if (spd > speed * 3) {
            particles[i].vx = (particles[i].vx / spd) * speed * 3
            particles[i].vy = (particles[i].vy / spd) * speed * 3
          }
        } else {
          // drift back to base speed
          particles[i].vx *= 0.995
          particles[i].vy *= 0.995
        }
      }

      animId = requestAnimationFrame(draw)
    }

    const onResize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    const onMouseMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY }
    }
    const onMouseLeave = () => {
      mouse = { x: -9999, y: -9999 }
    }

    init()
    draw()
    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [r, g, b, count, maxDist, speed])

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  )
}
