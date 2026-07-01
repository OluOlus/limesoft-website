'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const sections = [
  { id: 'who-we-are',   label: 'Who We Are' },
  { id: 'key-facts',    label: 'Key Facts' },
  { id: 'what-we-do',   label: 'What We Do' },
  { id: 'values',       label: 'Our Values' },
  { id: 'credentials',  label: 'Credentials' },
]

export default function AboutPage() {
  const [active, setActive] = useState('who-we-are')

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <div className="bg-[#07111e] text-white min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden pt-20">
        {/* Grid bg */}
        <div className="absolute inset-0 pointer-events-none opacity-30"
          style={{ backgroundImage: 'radial-gradient(rgba(1,138,216,0.15) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[#018ad8] opacity-[0.07] blur-[160px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent to-cyan-neon/40 max-w-[120px]" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-white/40 font-semibold">About Limesoft System</span>
            <span className="flex-1 h-px bg-gradient-to-l from-transparent to-cyan-neon/40 max-w-[120px]" />
          </div>

          {/* Headline */}
          <h1 className="text-center text-5xl md:text-7xl lg:text-[6rem] font-black leading-[0.9] tracking-tighter mb-8 max-w-5xl mx-auto">
            Your Trusted Technology{' '}
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(90deg, #018ad8 0%, #38bdf8 50%, #232a85 100%)' }}>
                Partner
              </span>
            </span>
          </h1>

          <p className="text-center text-white/50 text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Cybersecurity, infrastructure, applications, and managed services —
            delivered by certified experts across Nigeria, UK, Cameroon, and Rwanda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="bg-cyan-neon text-[#07111e] font-bold px-8 py-4 rounded-xl text-sm tracking-wide text-center hover:shadow-[0_0_40px_rgba(1,138,216,0.4)] transition-all duration-300">
              Talk to an Expert
            </Link>
            <a href="#who-we-are"
              className="border border-white/15 text-white/70 font-semibold px-8 py-4 rounded-xl text-sm tracking-wide text-center hover:border-white/30 hover:text-white transition-all duration-300">
              Read More ↓
            </a>
          </div>
        </div>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* ── MAIN LAYOUT — sticky sidebar + scrolling content ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-16 relative">

          {/* Sticky sidebar */}
          <aside className="hidden lg:block">
            <nav className="sticky top-28 pt-20 pb-10">
              <ul className="space-y-1">
                {sections.map(({ id, label }, i) => (
                  <li key={id}>
                    <a href={`#${id}`}
                      className={`flex items-center gap-3 py-2.5 text-sm transition-all duration-200 group ${
                        active === id ? 'text-white' : 'text-white/30 hover:text-white/60'
                      }`}>
                      <span className={`text-[10px] font-mono transition-colors duration-200 ${active === id ? 'text-cyan-neon' : 'text-white/20 group-hover:text-white/40'}`}>
                        0{i + 1}
                      </span>
                      <span className={`h-px transition-all duration-300 ${active === id ? 'w-6 bg-cyan-neon' : 'w-3 bg-white/20 group-hover:w-4'}`} />
                      <span className="font-medium tracking-wide">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Contact CTA in sidebar */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <Link href="/contact"
                  className="block border border-cyan-neon/30 text-cyan-neon text-xs font-semibold tracking-widest uppercase px-4 py-3 text-center hover:bg-cyan-neon hover:text-[#07111e] transition-all duration-300 rounded-lg">
                  Contact Us
                </Link>
              </div>
            </nav>
          </aside>

          {/* Scrolling content */}
          <main className="min-w-0">

            {/* ── WHO WE ARE ── */}
            <section id="who-we-are" className="py-20 border-b border-white/8">
              <p className="text-cyan-neon text-[10px] tracking-[0.4em] uppercase font-bold mb-4">01 / Who We Are</p>
              <h2 className="text-4xl font-black mb-10 leading-tight">
                Built to close the gap between ambition and secure technology.
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-white/60 leading-relaxed mb-12">
                <p>
                  Founded in 2020, Limesoft System emerged from a clear need: organisations across Africa
                  and beyond were adopting technology faster than they could secure and integrate it.
                  <span className="text-white"> We were built to bridge that gap.</span>
                </p>
                <p>
                  Today we operate across <span className="text-white">Nigeria, the United Kingdom, Cameroon, and Rwanda</span> —
                  with certified engineers and consultants delivering solutions for enterprises, studios, and growing businesses alike.
                </p>
              </div>
              <blockquote className="border-l-4 border-cyan-neon pl-6 py-2">
                <p className="text-white text-2xl font-bold italic leading-snug">
                  &ldquo;Securing Africa&rsquo;s Digital Future.&rdquo;
                </p>
              </blockquote>

              {/* Partner/tech ticker strip */}
              <div className="mt-12 pt-10 border-t border-white/8">
                <p className="text-white/25 text-[10px] tracking-[0.4em] uppercase mb-6">Technology Partners</p>
                <div className="flex flex-wrap gap-3">
                  {['Cisco', 'Palo Alto Networks', 'HPE Aruba', 'Fortinet', 'Sophos', 'F5', 'AWS', 'Microsoft Azure', 'Juniper', 'ISC2'].map(p => (
                    <span key={p} className="px-4 py-2 rounded-lg border border-white/10 text-white/40 text-xs font-medium hover:border-cyan-neon/30 hover:text-white/60 transition-colors duration-200">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* ── KEY FACTS ── */}
            <section id="key-facts" className="py-20 border-b border-white/8">
              <p className="text-cyan-neon text-[10px] tracking-[0.4em] uppercase font-bold mb-4">02 / Key Facts</p>
              <h2 className="text-4xl font-black mb-4">Limesoft by the numbers.</h2>
              <p className="text-white/40 text-lg mb-14 max-w-lg">
                We are vendor-agnostic by principle. Our recommendations serve your needs, not our margins.
              </p>

              <div className="grid grid-cols-2 gap-px bg-white/8 rounded-2xl overflow-hidden mb-10">
                {[
                  { n: '2020', l: 'Year Founded',        sub: 'Headquartered in Lagos, Nigeria' },
                  { n: '4',    l: 'Countries',            sub: 'Nigeria · UK · Cameroon · Rwanda' },
                  { n: '20+',  l: 'Certifications',       sub: 'Across infrastructure, security & services' },
                  { n: '50+',  l: 'Projects Delivered',   sub: 'Across Africa and the United Kingdom' },
                ].map(({ n, l, sub }) => (
                  <div key={l} className="bg-[#07111e] p-8 lg:p-10">
                    <p className="text-5xl lg:text-6xl font-black mb-2 text-transparent bg-clip-text"
                      style={{ backgroundImage: 'linear-gradient(135deg, #018ad8, #38bdf8)' }}>
                      {n}
                    </p>
                    <p className="text-white font-bold text-lg mb-1">{l}</p>
                    <p className="text-white/35 text-xs">{sub}</p>
                  </div>
                ))}
              </div>

              {/* Mission / Vision split */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
                  <p className="text-cyan-neon text-[10px] tracking-[0.4em] uppercase font-bold mb-4">Mission</p>
                  <p className="text-white/70 leading-relaxed">
                    To build and secure technology that works for our clients — not just on paper, but in production, under pressure, in real conditions.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
                  <p className="text-[#38bdf8] text-[10px] tracking-[0.4em] uppercase font-bold mb-4">Vision</p>
                  <p className="text-white/70 leading-relaxed">
                    To be the partner organisations across Africa and the UK turn to first when technology decisions matter most.
                  </p>
                </div>
              </div>
            </section>

            {/* ── WHAT WE DO ── */}
            <section id="what-we-do" className="py-20 border-b border-white/8">
              <p className="text-cyan-neon text-[10px] tracking-[0.4em] uppercase font-bold mb-4">03 / What We Do</p>
              <h2 className="text-4xl font-black mb-4">Four practice areas. One partner.</h2>
              <p className="text-white/40 mb-14 text-lg max-w-lg">
                From perimeter security to custom software, we work across your full technology estate.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { num: '01', name: 'Managed Security', href: '/services/managed-security', desc: 'NGFW, Zero Trust, EDR/XDR, penetration testing, compliance advisory. Multi-vendor certified across Sophos, Palo Alto, Fortinet, Cisco, and ISC2.', color: '#018ad8' },
                  { num: '02', name: 'Infrastructure',   href: '/services/infrastructure',   desc: 'Enterprise networking, data centres, cloud (AWS & Azure), SD-WAN, AI-ready compute, and network automation. Cisco CCNP, Juniper, F5 certified.', color: '#38bdf8' },
                  { num: '03', name: 'Applications',     href: '/services/applications',     desc: 'Custom web & mobile applications, enterprise software, API design, cloud-native development, DevOps, and legacy modernisation.', color: '#018ad8' },
                  { num: '04', name: 'Managed Services', href: '/services/managed-services', desc: 'Proactive monitoring, managed firewall, IT consulting, project management (PMP/PRINCE2), and SLA-backed support. ITIL v4 aligned.', color: '#38bdf8' },
                ].map((s) => (
                  <Link key={s.num} href={s.href}
                    className="group rounded-2xl border border-white/10 p-8 hover:border-white/25 hover:bg-white/5 transition-all duration-300 block">
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-xs font-mono text-white/20 group-hover:text-white/40 transition-colors">{s.num}</span>
                      <span className="w-2 h-2 rounded-full mt-1 group-hover:scale-125 transition-transform" style={{ backgroundColor: s.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#018ad8] transition-colors">{s.name}</h3>
                    <p className="text-white/45 text-sm leading-relaxed mb-5">{s.desc}</p>
                    <span className="text-[11px] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-200" style={{ color: s.color }}>
                      Learn more →
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* ── VALUES ── */}
            <section id="values" className="py-20 border-b border-white/8">
              <p className="text-cyan-neon text-[10px] tracking-[0.4em] uppercase font-bold mb-4">04 / Our Values</p>
              <h2 className="text-4xl font-black mb-14">What we stand for.</h2>
              <div className="space-y-0 divide-y divide-white/8">
                {[
                  { num: '01', title: 'Innovation & Excellence', desc: 'We keep pace with the industry so clients get access to the right tools and approaches, not last year\'s defaults.' },
                  { num: '02', title: 'Integrity',               desc: 'Honesty, transparency, and accountability in every interaction. Our clients trust us with critical infrastructure and we take that seriously.' },
                  { num: '03', title: 'Client Focus',            desc: 'Our measure of success is yours. That starts from the first call and runs through every ticket and renewal.' },
                ].map((v) => (
                  <div key={v.num} className="py-8 grid md:grid-cols-12 gap-6 items-center group cursor-default hover:bg-white/5 -mx-4 px-4 rounded-xl transition-colors duration-200">
                    <span className="md:col-span-1 text-xs font-mono text-white/20 group-hover:text-cyan-neon transition-colors duration-200">{v.num}</span>
                    <h3 className="md:col-span-4 text-xl font-bold text-white group-hover:text-cyan-neon transition-colors duration-200">{v.title}</h3>
                    <p className="md:col-span-7 text-white/45 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── CREDENTIALS ── */}
            <section id="credentials" className="py-20">
              <p className="text-cyan-neon text-[10px] tracking-[0.4em] uppercase font-bold mb-4">05 / Credentials</p>
              <h2 className="text-4xl font-black mb-4">Accreditations & Certifications</h2>
              <p className="text-white/40 mb-14 text-lg max-w-lg">
                Our team&rsquo;s multi-vendor, multi-framework credentials give you proven expertise under one roof.
              </p>
              <div className="space-y-4">
                {[
                  { group: 'Infrastructure',    accent: '#018ad8', items: ['CCNP Enterprise Infrastructure', 'JNCIA — JUNOS, Cloud, Mist AI', 'JNCIS-SP', 'Azure & AWS Certified SA', 'NSE 1–3', 'F5-CA'] },
                  { group: 'Cybersecurity',     accent: '#6366f1', items: ['CCNP Security', 'ISC2', 'Sophos CSP', 'Sophos Certified Architect', 'NSE 4', 'PCNSA', 'PCNSE'] },
                  { group: 'Applications',      accent: '#38bdf8', items: ['Web & App Development', 'Cisco Certified DevNet Associate'] },
                  { group: 'Service Mgmt',      accent: '#94a3b8', items: ['CCNA', 'Sophos Certified Technician', 'PMP', 'ITIL v4', 'PRINCE2'] },
                ].map((g) => (
                  <div key={g.group} className="rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: g.accent }} />
                      <p className="text-xs font-bold tracking-widest uppercase" style={{ color: g.accent }}>{g.group}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {g.items.map(item => (
                        <span key={item} className="px-3 py-1.5 rounded-lg border border-white/10 text-white/45 text-xs hover:border-white/25 hover:text-white/70 transition-colors duration-150 cursor-default">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="border-t border-white/8 mt-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div>
            <p className="text-cyan-neon text-[10px] tracking-[0.4em] uppercase font-bold mb-4">Get Started</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight max-w-xl">
              Let&rsquo;s build something that lasts.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/contact"
              className="bg-cyan-neon text-[#07111e] font-bold px-8 py-4 rounded-xl text-sm tracking-wide text-center hover:shadow-[0_0_30px_rgba(1,138,216,0.4)] transition-all duration-300">
              Start a Conversation
            </Link>
            <Link href="/services"
              className="border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-sm tracking-wide text-center hover:border-white/40 hover:bg-white/5 transition-all duration-300">
              Our Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
