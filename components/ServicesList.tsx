'use client'

import Link from 'next/link'
import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const services = [
  {
    num: '01',
    label: 'Cybersecurity',
    tagline: 'Protect. Detect. Respond.',
    desc: 'State-of-the-art protection that keeps critical assets secure — maintaining Confidentiality, Integrity, and Availability across your entire digital estate with NGFW, Zero Trust, EDR, and more.',
    href: '/services#cybersecurity',
    color: '#00e5ff',
  },
  {
    num: '02',
    label: 'Infrastructure',
    tagline: 'Resilient. Scalable. AI-Ready.',
    desc: 'Enterprise networks, AI-ready data centres, cloud computing, and SD-WAN — technology stacks built to scale with your ambition, backed by CCNP, JNCIA, and Azure/AWS certified architects.',
    href: '/services#infrastructure',
    color: '#a855f7',
  },
  {
    num: '03',
    label: 'Applications',
    tagline: 'Custom Software. Real Impact.',
    desc: 'Expert developers building custom and enterprise-grade software that streamlines workflows, eliminates bottlenecks, and creates measurable business value — from web to cloud-native.',
    href: '/services#applications',
    color: '#e879f9',
  },
  {
    num: '04',
    label: 'Managed Services',
    tagline: 'Expert-Led. Always On.',
    desc: 'Consulting, managed networks, firewall services, and ITIL v4-aligned support — so your team stays focused on strategy while ours keeps the infrastructure running flawlessly.',
    href: '/services#services',
    color: '#00e5ff',
  },
]

function ServiceRow({ s }: { s: typeof services[0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={s.href}
      className="group flex flex-col md:flex-row md:items-center gap-6 py-9 transition-all duration-400"
      style={{
        paddingLeft: hovered ? '20px' : '0px',
        borderLeft: `2px solid ${hovered ? s.color : 'transparent'}`,
        transition: 'padding-left 0.4s ease, border-color 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="text-white/12 text-xs font-mono w-8 shrink-0">{s.num}</span>
      <div className="flex-1 md:grid md:grid-cols-12 md:gap-8 md:items-center">
        <div className="md:col-span-4">
          <h3
            className="text-2xl md:text-3xl font-black tracking-tight mb-1 transition-all duration-300"
            style={{ color: hovered ? s.color : 'white' }}
          >
            {s.label}
          </h3>
          <p
            className="text-[11px] font-bold tracking-[0.25em] uppercase"
            style={{ color: s.color }}
          >
            {s.tagline}
          </p>
        </div>
        <p
          className="md:col-span-7 text-sm leading-relaxed mt-3 md:mt-0 transition-colors duration-300"
          style={{ color: hovered ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.38)' }}
        >
          {s.desc}
        </p>
        <div className="md:col-span-1 flex md:justify-end mt-4 md:mt-0">
          <svg
            className="w-5 h-5 transition-all duration-300"
            style={{
              color: hovered ? s.color : 'rgba(255,255,255,0.12)',
              transform: hovered ? 'translateX(8px)' : 'translateX(0)',
            }}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

export default function ServicesList() {
  return (
    <div className="divide-y divide-white/6">
      {services.map((s) => (
        <ScrollReveal key={s.num}>
          <ServiceRow s={s} />
        </ScrollReveal>
      ))}
    </div>
  )
}
