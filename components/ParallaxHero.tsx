'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

/* Orbiting label:
   - Outer wrapper rotates at ring speed, carrying the pill around the orbit.
   - Inner wrapper counter-rotates so text stays upright.
   - Opacity follows cos(current_angle): full at top (foreground), zero at bottom (behind shield). */
function OrbitLabel({ label, color, radius, startAngle, duration, ccw = false }: {
  label: string; color: string; radius: number
  startAngle: number; duration: number; ccw?: boolean
}) {
  const delta = ccw ? -360 : 360
  // Sample opacity at 5 evenly-spaced points: (cos(angle)+1)/2 → 1 at top, 0 at bottom
  const opacityKF = [0, 0.25, 0.5, 0.75, 1].map(t => {
    const deg = (startAngle + delta * t) * (Math.PI / 180)
    return Math.max(0, (Math.cos(deg) + 1) / 2)
  })
  return (
    <motion.div
      className="absolute inset-0"
      style={{ transformOrigin: 'center center' }}
      animate={{ rotate: [startAngle, startAngle + delta] }}
      transition={{ rotate: { duration, repeat: Infinity, ease: 'linear' } }}
    >
      {/* Opacity fades as label travels behind the shield */}
      <motion.div
        style={{ position: 'absolute', inset: 0 }}
        animate={{ opacity: opacityKF }}
        transition={{ opacity: { duration, repeat: Infinity, ease: 'linear', times: [0, 0.25, 0.5, 0.75, 1] } }}
      >
        {/* Label at 12 o'clock relative to the rotating wrapper */}
        <div style={{
          position: 'absolute',
          top: `calc(50% - ${radius}px)`,
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
          {/* Counter-rotation cancels outer rotation so text is always upright */}
          <motion.div
            animate={{ rotate: [-startAngle, -startAngle - delta] }}
            transition={{ duration, repeat: Infinity, ease: 'linear' }}
          >
            <LabelPill label={label} color={color}/>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function LabelPill({ label, color }: { label: string; color: string }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '5px 11px', borderRadius: 20,
      background: 'rgba(7,14,28,0.75)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      border: `1px solid ${color}35`,
      whiteSpace: 'nowrap',
    }}>
      <span style={{
        width: 6, height: 6, borderRadius: '50%', display: 'inline-block',
        background: color, boxShadow: `0 0 8px 3px ${color}55`, flexShrink: 0,
      }}/>
      <span style={{ color: 'rgba(255,255,255,0.78)', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.06em' }}>
        {label}
      </span>
    </span>
  )
}

function OrbitalVisual() {
  const CX = 250, CY = 250, R1 = 195, R2 = 148

  return (
    <div className="relative w-[500px] h-[500px] shrink-0 select-none">

      {/* SVG: rings, dots, and shield (all co-located so filters are guaranteed) */}
      <svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full overflow-visible">
        <defs>
          {/* Outer ring: teal comet sweep */}
          <linearGradient id="g-outer" x1={CX} y1={CY - R1} x2={CX} y2={CY + R1} gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#018ad8" stopOpacity="1"/>
            <stop offset="50%"  stopColor="#018ad8" stopOpacity="0.12"/>
            <stop offset="100%" stopColor="#018ad8" stopOpacity="0"/>
          </linearGradient>

          {/* Second outer: sky-blue, faster */}
          <linearGradient id="g-outer2" x1={CX} y1={CY - R1} x2={CX} y2={CY + R1} gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#38bdf8" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0"/>
          </linearGradient>

          {/* Inner ring: sky-blue CCW sweep */}
          <linearGradient id="g-inner" x1={CX} y1={CY + R2} x2={CX} y2={CY - R2} gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#38bdf8" stopOpacity="0.9"/>
            <stop offset="50%"  stopColor="#38bdf8" stopOpacity="0.1"/>
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0"/>
          </linearGradient>

          {/* Shield glow filter */}
          <filter id="shield-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Static guide rings */}
        <circle cx={CX} cy={CY} r={R1 + 28} fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="1"/>
        <circle cx={CX} cy={CY} r={R1}       fill="none" stroke="rgba(1, 138, 216,0.1)"    strokeWidth="1"/>
        <circle cx={CX} cy={CY} r={R2}       fill="none" stroke="rgba(56,189,248,0.1)"    strokeWidth="1"/>

        {/* Outer ring: teal CW 13 s */}
        <motion.g style={{ transformOrigin: `${CX}px ${CY}px` }}
          animate={{ rotate: 360 }}
          transition={{ duration: 13, repeat: Infinity, ease: 'linear' }}>
          <circle cx={CX} cy={CY} r={R1} fill="none" stroke="url(#g-outer)" strokeWidth="2"/>
          <circle cx={CX} cy={CY - R1} r={5.5} fill="#018ad8" opacity="0.95"/>
          <circle cx={CX} cy={CY - R1} r={11}  fill="#018ad8" opacity="0.15"/>
        </motion.g>

        {/* Second outer: sky-blue CW 6.5 s */}
        <motion.g style={{ transformOrigin: `${CX}px ${CY}px` }}
          animate={{ rotate: 360 }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'linear' }}>
          <circle cx={CX} cy={CY} r={R1} fill="none" stroke="url(#g-outer2)" strokeWidth="1.2"/>
          <circle cx={CX} cy={CY - R1} r={3.5} fill="#38bdf8" opacity="0.8"/>
        </motion.g>

        {/* Inner ring: sky-blue CCW 9 s */}
        <motion.g style={{ transformOrigin: `${CX}px ${CY}px` }}
          animate={{ rotate: -360 }}
          transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}>
          <circle cx={CX} cy={CY} r={R2} fill="none" stroke="url(#g-inner)" strokeWidth="2"/>
          <circle cx={CX} cy={CY + R2} r={4.5} fill="#38bdf8" opacity="0.9"/>
          <circle cx={CX} cy={CY + R2} r={9}   fill="#38bdf8" opacity="0.16"/>
        </motion.g>

        {/* Centre glow blob — sits behind the HTML shield layer */}
        <motion.ellipse cx={CX} cy={CY} rx={95} ry={95}
          fill="url(#centre-glow)"
          animate={{ rx: [85, 105, 85], ry: [85, 105, 85], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}/>

        {/* Radial gradient def for centre glow (must be after first use to avoid hoisting issues — put in defs) */}
        <defs>
          <radialGradient id="centre-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#018ad8" stopOpacity="0.14"/>
            <stop offset="50%"  stopColor="#38bdf8" stopOpacity="0.06"/>
            <stop offset="100%" stopColor="#018ad8" stopOpacity="0"/>
          </radialGradient>

          {/* Pulsing outer halo */}
          <radialGradient id="outer-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#018ad8" stopOpacity="0.05"/>
            <stop offset="100%" stopColor="#018ad8" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* Pulsing outer halo ring */}
        <motion.ellipse cx={CX} cy={CY} rx={220} ry={220}
          fill="url(#outer-halo)"
          animate={{ rx: [210, 235, 210], ry: [210, 235, 210], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}/>
      </svg>

      {/* Orbiting label pills — tied to their respective rings */}
      {/* Outer ring (teal, CW 13 s): Cybersecurity starts top, Managed Services starts bottom */}
      <OrbitLabel label="Cybersecurity"    color="#018ad8" radius={182} startAngle={0}   duration={13} />
      <OrbitLabel label="Managed Services" color="#018ad8" radius={182} startAngle={180} duration={13} />
      {/* Inner ring (sky-blue, CCW 9 s): Infrastructure starts right, Cloud & Apps starts left */}
      <OrbitLabel label="Infrastructure"   color="#38bdf8" radius={138} startAngle={90}  duration={9}  ccw />
      <OrbitLabel label="Cloud & Apps"     color="#38bdf8" radius={138} startAngle={270} duration={9}  ccw />

      {/* Shield — HTML layer so rotateY (3D) works */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Soft teal halo behind shield */}
        <div className="absolute rounded-full" style={{
          width: 230, height: 230,
          background: 'radial-gradient(circle, rgba(1, 138, 216,0.2) 0%, rgba(56,189,248,0.07) 55%, transparent 75%)',
          filter: 'blur(22px)',
        }}/>

        {/* Perspective wrapper — enables 3D Y-axis spin */}
        <div style={{ perspective: '700px' }}>
          <motion.div
            animate={{
              rotateY: [-35, 35, -35],
              y: [0, -12, 0],
            }}
            transition={{
              rotateY: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
              y:       { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
            }}
            style={{
              transformStyle: 'preserve-3d',
              filter: 'drop-shadow(0 0 32px rgba(1, 138, 216,0.55)) drop-shadow(0 10px 28px rgba(0,0,0,0.5))',
            }}
          >
            <Image
              src="/limesoft-shield.png"
              alt="Limesoft Shield"
              width={168}
              height={191}
              priority
              className="w-[168px] h-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default function ParallaxHero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const smooth  = useSpring(scrollYProgress, { stiffness: 80, damping: 25 })
  const bgY     = useTransform(smooth, [0, 1], ['0%', '35%'])
  const textY   = useTransform(smooth, [0, 1], ['0%', '10%'])
  const fadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden flex items-center" aria-label="Hero">

      {/* ── Background ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 will-change-transform">
        {/* Deep dark base */}
        <div className="absolute inset-0" style={{ background: '#08111f' }}/>

        {/* Dot grid — white dots give texture */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}/>

        {/* White light bloom — primary "source" upper-right near orbital */}
        <div className="absolute top-[-10%] right-[10%] w-[600px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.01) 45%, transparent 70%)',
            filter: 'blur(70px)',
          }}/>

        {/* Teal glow: subtle, behind orbital ring area */}
        <div className="absolute top-[15%] right-[5%] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(1, 138, 216,0.07) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}/>

        {/* Sky-blue glow: upper left */}
        <div className="absolute top-[5%] left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(56,189,248,0.04) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}/>

        {/* Bottom fade into body background */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0b1628] to-transparent"/>
      </motion.div>

      {/* ── Content ── */}
      <motion.div
        style={{ y: textY, opacity: fadeOut }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 will-change-transform"
      >
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

          {/* Left — text */}
          <div className="flex-1 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-cyan-neon/25 bg-cyan-neon/10 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-neon"/>
              <span className="text-cyan-neon text-xs font-semibold tracking-widest uppercase">
                Your End-to-End Technology Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-6"
            >
              Technology Solutions That{' '}
              <span className="text-gradient-brand">Secure, Connect & Transform</span>{' '}
              Your Business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/50 text-base leading-relaxed mb-10"
            >
              From cybersecurity and network infrastructure to managed services and cloud solutions —
              certified experts delivering technology that works, across Africa and the UK.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link href="/contact"
                className="group relative overflow-hidden rounded-xl bg-cyan-neon text-[#0d1f3c] font-bold px-8 py-3.5 text-sm tracking-wide hover:shadow-[0_0_32px_rgba(1,138,216,0.4)] transition-shadow duration-300">
                <span className="relative z-10">Talk to an Expert</span>
                <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"/>
              </Link>
              <Link href="/services"
                className="rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm text-white/70 font-semibold px-8 py-3.5 text-sm tracking-wide hover:border-white/40 hover:text-white hover:bg-white/10 transition-all duration-300">
                Our Services →
              </Link>
            </motion.div>

          </div>

          {/* Right — orbital visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <OrbitalVisual />
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        style={{ opacity: fadeOut }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent"
        />
      </motion.div>
    </section>
  )
}
