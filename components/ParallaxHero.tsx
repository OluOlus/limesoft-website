'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Link from 'next/link'

/* ── Circuit board SVG pattern ── */
function CircuitSVG() {
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <pattern id="circuit" width="160" height="160" patternUnits="userSpaceOnUse">
          {/* Main cross */}
          <line x1="80" y1="0" x2="80" y2="160" stroke="#00e5ff" strokeWidth="0.5" opacity="0.06" />
          <line x1="0" y1="80" x2="160" y2="80" stroke="#00e5ff" strokeWidth="0.5" opacity="0.06" />
          {/* L-trace top-right */}
          <path d="M80,80 L130,80 L130,30" stroke="#00e5ff" strokeWidth="0.5" fill="none" opacity="0.05" />
          {/* L-trace bottom-left */}
          <path d="M80,80 L30,80 L30,130" stroke="#00e5ff" strokeWidth="0.5" fill="none" opacity="0.05" />
          {/* Nodes */}
          <circle cx="80" cy="80" r="2.5" fill="none" stroke="#00e5ff" strokeWidth="0.7" opacity="0.14" />
          <circle cx="130" cy="30" r="1.5" fill="#00e5ff" opacity="0.1" />
          <circle cx="30" cy="130" r="1.5" fill="#00e5ff" opacity="0.1" />
          <circle cx="0"  cy="0"  r="1.5" fill="#00e5ff" opacity="0.06" />
          <circle cx="160" cy="160" r="1.5" fill="#00e5ff" opacity="0.06" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  )
}

/* ── Floating geometric shapes ── */
const shapes = [
  { type: 'diamond', x: '8%',  y: '25%', size: 36,  delay: 0,   dur: 7  },
  { type: 'ring',    x: '82%', y: '18%', size: 80,  delay: 1.2, dur: 9  },
  { type: 'diamond', x: '72%', y: '62%', size: 24,  delay: 0.6, dur: 8  },
  { type: 'ring',    x: '14%', y: '68%', size: 50,  delay: 2,   dur: 11 },
  { type: 'square',  x: '48%', y: '12%', size: 28,  delay: 0.4, dur: 7.5},
  { type: 'diamond', x: '92%', y: '45%', size: 44,  delay: 1.8, dur: 10 },
  { type: 'ring',    x: '35%', y: '80%', size: 34,  delay: 0.9, dur: 8.5},
  { type: 'square',  x: '60%', y: '30%', size: 20,  delay: 3,   dur: 9  },
]

function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: s.x, top: s.y }}
          animate={{ y: [0, -s.size * 0.4, 0] }}
          transition={{ duration: s.dur, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
        >
          {s.type === 'diamond' && (
            <div
              className="border border-cyan-neon/25"
              style={{ width: s.size, height: s.size, transform: 'rotate(45deg)' }}
            />
          )}
          {s.type === 'ring' && (
            <div
              className="rounded-full border border-purple-neon/20"
              style={{ width: s.size, height: s.size }}
            />
          )}
          {s.type === 'square' && (
            <div
              className="border border-magenta-neon/20"
              style={{ width: s.size, height: s.size }}
            />
          )}
        </motion.div>
      ))}
    </div>
  )
}

/* ── Word stagger animation ── */
const lines = [
  { text: 'Beyond',          gradient: false },
  { text: 'Integration,',    gradient: false },
  { text: 'Towards',         gradient: true  },
  { text: 'Transformation.', gradient: true  },
]

export default function ParallaxHero() {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 25 })

  /* Parallax layers — each moves a different amount on scroll */
  const bgY     = useTransform(smooth, [0, 1], ['0%', '55%'])
  const orb1Y   = useTransform(smooth, [0, 1], ['0%', '35%'])
  const shapeY  = useTransform(smooth, [0, 1], ['0%', '22%'])
  const textY   = useTransform(smooth, [0, 1], ['0%', '12%'])
  const fadeOut = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] overflow-hidden flex items-center"
      aria-label="Hero"
    >
      {/* ── LAYER 0: background (slowest) ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 will-change-transform">
        <div className="absolute inset-0 bg-[#02020e]" />
        <CircuitSVG />
        {/* bottom fade to next section */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#02020e] to-transparent" />
      </motion.div>

      {/* ── LAYER 1: large glow orbs (slow) ── */}
      <motion.div style={{ y: orb1Y }} className="absolute inset-0 pointer-events-none will-change-transform">
        <div
          className="absolute rounded-full"
          style={{
            top: '5%', right: '-5%',
            width: 700, height: 700,
            background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'floatSlow 14s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            bottom: '10%', left: '-5%',
            width: 600, height: 600,
            background: 'radial-gradient(circle, rgba(0,229,255,0.1) 0%, transparent 70%)',
            filter: 'blur(50px)',
            animation: 'floatSlow 18s ease-in-out infinite 3s',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            top: '40%', left: '40%',
            width: 300, height: 300,
            background: 'radial-gradient(circle, rgba(232,121,249,0.08) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animation: 'floatSlow 11s ease-in-out infinite 1s',
          }}
        />
      </motion.div>

      {/* ── LAYER 2: floating shapes (medium) ── */}
      <motion.div style={{ y: shapeY }} className="absolute inset-0 will-change-transform">
        <FloatingShapes />
      </motion.div>

      {/* ── LAYER 3: scan line ── */}
      <div
        className="scanline absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(0,229,255,0.3), transparent)',
        }}
      />

      {/* ── LAYER 4: CONTENT (foreground) ── */}
      <motion.div
        style={{ y: textY, opacity: fadeOut }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-20 will-change-transform"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-10 h-px bg-cyan-neon" />
          <span className="text-cyan-neon text-xs font-semibold tracking-[0.35em] uppercase">
            Cybersecurity &amp; Tech Integration
          </span>
        </motion.div>

        {/* Headline — each line slides up out of a clip */}
        <h1 className="mb-8">
          {lines.map((line, i) => (
            <div key={i} className="overflow-hidden leading-[0.95]">
              <motion.span
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 0.85,
                  delay: 0.25 + i * 0.13,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`block text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] font-black tracking-tight ${
                  line.gradient ? 'text-gradient-brand' : 'text-white'
                }`}
              >
                {line.text}
              </motion.span>
            </div>
          ))}
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-white/50 text-lg max-w-md leading-relaxed mb-10"
        >
          Intelligent, secure, and scalable technology solutions — delivered by certified experts across four continents.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/services"
            className="group relative overflow-hidden bg-cyan-neon text-[#02020e] font-bold px-8 py-4 text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,229,255,0.4)]"
          >
            <span className="relative z-10">Explore Services</span>
            <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
          </Link>
          <Link
            href="/contact"
            className="border border-white/20 text-white/75 font-semibold px-8 py-4 text-sm tracking-wide hover:border-white/60 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            Talk to Us
          </Link>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{ opacity: fadeOut }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  )
}
