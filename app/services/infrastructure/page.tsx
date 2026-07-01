'use client'

import Image from 'next/image'
import Link from 'next/link'
import VendorTicker from '@/components/VendorTicker'
import Carousel from '@/components/Carousel'
import ParticleBackground from '@/components/ParticleBackground'

const highlights = [
  { num: '01', label: 'Cloud', name: 'AWS & Azure Cloud', desc: 'Landing zones, account vending, networking, compute, managed databases, containers, and disaster recovery. Properly governed from the first resource, not bolted on later.' },
  { num: '02', label: 'Productivity', name: 'Microsoft 365', desc: 'Exchange Online, Teams, SharePoint, Intune, Entra ID, Defender, and Purview. Migrated, configured, secured, and supported by M365-certified engineers.' },
  { num: '03', label: 'Networking', name: 'Enterprise Networking', desc: 'Campus LAN, WAN, and branch architecture on Cisco, HPE Aruba, and Juniper. Performance and security designed in from the ground up.' },
  { num: '04', label: 'SD-WAN', name: 'SD-WAN & Wireless', desc: 'Software-defined WAN connecting offices, cloud, and remote users with application-aware routing, direct internet breakout, and per-site visibility.' },
  { num: '05', label: 'Data Centre', name: 'Data Centre Design', desc: 'Physical and virtual data centre design for high availability and business continuity. Virtualisation, storage, and DR architectures that hold up under pressure.' },
  { num: '06', label: 'AI Infra', name: 'AI-Ready Infrastructure', desc: 'GPU clusters, NVMe-over-Fabrics, high-bandwidth networking, and MLOps foundations built for training and inference at scale.' },
]

export default function InfrastructurePage() {
  return (
    <div>
      <ParticleBackground r={56} g={189} b={248} count={110} maxDist={160} speed={0.4} />
      <div className="relative" style={{ zIndex: 1 }}>

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex flex-col overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.5), transparent)' }} />

        {/* Network topology — right side */}
        <div className="absolute right-0 top-0 h-full w-[50%] flex items-center justify-center pointer-events-none select-none">
          <svg width="440" height="400" viewBox="0 0 440 400" fill="none" className="opacity-60">
            {/* Connection lines */}
            <line x1="220" y1="200" x2="100" y2="100" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
            <line x1="220" y1="200" x2="340" y2="100" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
            <line x1="220" y1="200" x2="80" y2="260" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
            <line x1="220" y1="200" x2="360" y2="270" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
            <line x1="220" y1="200" x2="220" y2="340" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
            <line x1="220" y1="200" x2="140" y2="340" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.2" />
            <line x1="100" y1="100" x2="340" y2="100" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.15" />
            <line x1="80" y1="260" x2="140" y2="340" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.15" />
            {/* Core node */}
            <circle cx="220" cy="200" r="18" fill="#38bdf8" fillOpacity="0.12" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" />
            <circle cx="220" cy="200" r="6" fill="#38bdf8" fillOpacity="0.8" />
            {/* Orbiting ring */}
            <circle cx="220" cy="200" r="36" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="3 6" />
            {/* Outer nodes */}
            {[
              { cx: 100, cy: 100, r: 10, label: 'AWS' },
              { cx: 340, cy: 100, r: 10, label: 'Azure' },
              { cx: 80,  cy: 260, r: 8,  label: 'LAN' },
              { cx: 360, cy: 270, r: 8,  label: 'WAN' },
              { cx: 220, cy: 340, r: 8,  label: 'DC' },
              { cx: 140, cy: 340, r: 6,  label: 'SD' },
            ].map(n => (
              <g key={n.cx + n.cy}>
                <circle cx={n.cx} cy={n.cy} r={n.r} fill="#018ad8" fillOpacity="0.15" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.5" />
                <circle cx={n.cx} cy={n.cy} r={n.r / 2.5} fill="#38bdf8" fillOpacity="0.7" />
                <text x={n.cx} y={n.cy + n.r + 12} textAnchor="middle" fill="#38bdf8" fillOpacity="0.4" fontSize="8" fontFamily="monospace">{n.label}</text>
              </g>
            ))}
          </svg>
        </div>

        {/* gradient fade — hero to content */}
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, rgba(7,17,30,0.94))' }} />

        <div className="relative flex-1 max-w-5xl mx-auto px-6 lg:px-8 pt-36 flex flex-col justify-center pb-20 w-full">
          <nav className="flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-white/20 mb-12">
            <Link href="/" className="hover:text-white/50 transition-colors">Home</Link>
            <span>/</span><Link href="/services" className="hover:text-white/50 transition-colors">Services</Link>
            <span>/</span><span style={{ color: '#38bdf8' }}>Infrastructure</span>
          </nav>

          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border w-fit" style={{ borderColor: 'rgba(56,189,248,0.35)', background: 'rgba(56,189,248,0.08)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#38bdf8]">Infrastructure Practice</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tight mb-6 max-w-xl">
            Resilient platforms<br />
            <span style={{ background: 'linear-gradient(120deg, #38bdf8, #a5f3fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              built to scale.
            </span>
          </h1>
          <p className="text-white/45 text-lg max-w-sm leading-relaxed mb-10">
            AWS, Azure, Cisco, HPE Aruba, Juniper, and Microsoft certified engineers designing and running your technology foundation.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg, #38bdf8, #0ea5e9)' }}>
              Talk to an Infrastructure Expert
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 border border-white/15 text-white/60 font-semibold px-7 py-3.5 rounded-xl text-sm hover:border-white/30 hover:text-white transition-all duration-200">
              All Services
            </Link>
          </div>
        </div>
      </section>

      <div style={{ background: 'rgba(7,17,30,0.94)' }}>
      {/* ── VENDOR TICKER ── */}
      <div className="border-y border-white/8 bg-[#060d1a]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-5 pb-1">
          <p className="text-white/15 text-[10px] font-bold tracking-[0.3em] uppercase">Technology Partners</p>
        </div>
        <VendorTicker service="infrastructure" />
      </div>

      {/* ── CAPABILITIES CAROUSEL ── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-2" style={{ color: '#38bdf8' }}>Platforms</p>
              <h2 className="text-3xl md:text-4xl font-black text-white">What We Build & Run</h2>
            </div>
            <p className="text-white/25 text-xs hidden sm:block">Swipe to explore →</p>
          </div>
          <Carousel theme="dark" itemWidthClass="w-[88%] sm:w-[380px]">
            {highlights.map((h) => (
              <div key={h.num} className="h-full rounded-2xl border border-white/8 p-8 flex flex-col" style={{ background: 'rgba(56,189,248,0.03)' }}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[11px] font-black tabular-nums" style={{ color: 'rgba(56,189,248,0.5)' }}>{h.num}</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full" style={{ background: 'rgba(56,189,248,0.12)', color: '#38bdf8' }}>{h.label}</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-4 leading-snug">{h.name}</h3>
                <p className="text-white/40 text-sm leading-relaxed flex-1">{h.desc}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>


      {/* ── RELATED + CTA ── */}
      <section className="py-16 border-t border-white/8">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4 mb-14">
            {[
              { href: '/services/managed-security', label: 'Managed Security', desc: 'NGFW, Zero Trust, and cloud security.' },
              { href: '/services/applications',     label: 'Applications',     desc: 'Custom software, APIs, and integrations.' },
              { href: '/services/managed-services', label: 'Managed Services', desc: 'Ongoing support and IT advisory.' },
            ].map(r => (
              <Link key={r.href} href={r.href}
                className="group flex flex-col gap-2 p-6 border border-white/8 rounded-xl bg-white/2 hover:border-[#38bdf8]/25 hover:bg-white/4 transition-all duration-200">
                <h3 className="font-bold text-white/70 group-hover:text-white transition-colors">{r.label}</h3>
                <p className="text-white/30 text-sm">{r.desc}</p>
                <span className="text-[11px] font-semibold mt-1" style={{ color: '#38bdf8' }}>Learn more →</span>
              </Link>
            ))}
          </div>
          <div className="rounded-2xl border border-[#38bdf8]/20 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6" style={{ background: 'rgba(56,189,248,0.05)' }}>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-1.5">Ready to build a better foundation?</h2>
              <p className="text-white/35 text-sm">Tell us about your environment — we will design the right architecture for your scale.</p>
            </div>
            <Link href="/contact" className="shrink-0 text-white font-semibold px-8 py-3.5 rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg, #38bdf8, #0ea5e9)' }}>
              Start the Conversation
            </Link>
          </div>
        </div>
      </section>
      </div>{/* end dark wrap */}
      </div>{/* end z-index 1 wrap */}
    </div>
  )
}
