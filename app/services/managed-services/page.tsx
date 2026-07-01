import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import VendorTicker from '@/components/VendorTicker'
import ParticleBackground from '@/components/ParticleBackground'

export const metadata: Metadata = {
  title: 'Managed IT Services | Limesoft System',
  description:
    'SLA-backed network management, managed firewall, IT consulting, ITIL service management, and project delivery — from ITIL v4, PMP, and PRINCE2 certified consultants.',
}

export default function ManagedServicesPage() {
  return (
    <div>
      <ParticleBackground r={56} g={189} b={248} count={45} maxDist={125} speed={0.15} />
      <div className="relative" style={{ zIndex: 1 }}>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
        <div className="absolute -top-40 right-0 w-[700px] h-[700px] bg-[#38bdf8]/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.4), transparent)' }} />

        {/* Floating orbs */}
        <div className="float-orb absolute left-[9%] top-[22%] w-2 h-2 rounded-full pointer-events-none" style={{ background: '#38bdf8', boxShadow: '0 0 18px 5px rgba(56,189,248,0.3)', opacity: 0.55 }} />
        <div className="float-orb-delayed absolute left-[19%] top-[68%] w-1.5 h-1.5 rounded-full pointer-events-none" style={{ background: '#018ad8', opacity: 0.45 }} />
        <div className="spin-ring absolute right-[7%] top-[12%] w-28 h-28 rounded-full border border-[#38bdf8]/12 pointer-events-none" />

        <div className="absolute right-0 top-0 bottom-0 flex items-center pr-8 lg:pr-20 pointer-events-none select-none opacity-[0.05]">
          <Image src="/limesoft-shield.png" alt="" width={480} height={480} className="object-contain" />
        </div>

        {/* gradient fade — hero to content */}
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, rgba(7,17,30,0.94))' }} />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-white/20 mb-10">
            <Link href="/" className="hover:text-white/50 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white/50 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#38bdf8]/70">Managed Services</span>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <Image src="/limesoft-shield.png" alt="Limesoft System" width={44} height={44} className="object-contain" />
            <div className="w-px h-7 bg-white/15" />
            <span className="text-[#38bdf8] text-[11px] font-bold tracking-[0.35em] uppercase">Managed Services Practice</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-black text-white leading-[1.02] tracking-tight mb-6 max-w-3xl">
            Expert support.<br />
            <span style={{ background: 'linear-gradient(120deg, #38bdf8 30%, #a5f3fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Always on.
            </span>
          </h1>
          <p className="text-white/45 text-lg max-w-2xl leading-relaxed mb-12">
            The expertise, monitoring, and service management you need, without building specialist teams for every domain.
          </p>

          <div className="flex flex-wrap gap-3 mb-16">
            <Link href="/contact"
              className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #38bdf8, #0ea5e9)' }}>
              Get a Support Quote
            </Link>
            <Link href="/services"
              className="inline-flex items-center gap-2 border border-white/15 text-white/60 font-semibold px-7 py-3.5 rounded-xl text-sm hover:border-white/35 hover:text-white transition-all duration-200">
              All Services
            </Link>
          </div>

          {/* Certs */}
          <div className="grid grid-cols-3 gap-px bg-white/8 rounded-2xl overflow-hidden max-w-xl">
            {[
              { v: 'ITIL v4', l: 'Service Management' },
              { v: 'PMP', l: 'Project Management' },
              { v: 'PRINCE2', l: 'Project Delivery' },
            ].map(({ v, l }) => (
              <div key={l} className="bg-[#07111e] px-6 py-5 text-center">
                <p className="font-black text-lg mb-0.5" style={{ color: '#38bdf8' }}>{v}</p>
                <p className="text-white/30 text-[11px]">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ background: 'rgba(7,17,30,0.94)' }}>
      {/* ── NETWORK OPERATIONS ── */}
      <section className="py-20 border-t border-white/8">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-6 h-6 rounded-md flex items-center justify-center shrink-0" style={{ background: 'rgba(56,189,248,0.15)' }}>
              <svg className="w-3.5 h-3.5" style={{ color: '#38bdf8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
            </div>
            <h2 className="text-white font-bold text-xl">Managed Network & Firewall Operations</h2>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                label: 'Network Ops',
                name: 'Managed Networks',
                desc: 'Proactive monitoring, performance optimisation, and fault management. We catch issues before your users do.',
                bullets: ['24/7 NOC monitoring', 'Performance & capacity reporting', 'Configuration management', 'Change & incident handling (ITIL)', 'Vendor liaison & escalation'],
              },
              {
                label: 'Security Ops',
                name: 'Managed Firewall',
                desc: 'Policy management, firmware updates, rule reviews, and 24/7 alerting on your NGFW estate. You stay protected; we handle the upkeep.',
                bullets: ['Palo Alto, Fortinet, Sophos, Cisco', 'Policy review & rule hygiene', 'Firmware & signature updates', 'Threat alert triage & response', 'Monthly security reporting'],
              },
            ].map((item) => (
              <div key={item.name} className="rounded-2xl border border-white/10 bg-white/3 p-7 hover:border-[#38bdf8]/30 transition-all duration-200">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#38bdf8]/70 block mb-2">{item.label}</span>
                <h3 className="text-white font-bold text-lg mb-3">{item.name}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-5">{item.desc}</p>
                <ul className="space-y-2">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-white/45 text-sm">
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ background: '#38bdf8' }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVISORY & CONSULTING ── */}
      <section className="py-20 border-t border-white/8">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-6 h-6 rounded-md flex items-center justify-center shrink-0" style={{ background: 'rgba(56,189,248,0.15)' }}>
              <svg className="w-3.5 h-3.5" style={{ color: '#38bdf8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <h2 className="text-white font-bold text-xl">IT Consulting & Technical Advisory</h2>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                label: 'Strategy',
                name: 'IT Consulting',
                bullets: ['Technology roadmap development', 'Vendor selection & due diligence', 'Architecture review', 'IT cost optimisation', 'Digital transformation advisory'],
              },
              {
                label: 'Leadership',
                name: 'Technical Advisory (vCTO)',
                bullets: ['Fractional CTO / IT Director', 'Board-level technology reporting', 'Build vs buy decisions', 'Platform selection guidance', 'Technology team mentoring'],
              },
              {
                label: 'Operations',
                name: 'Vendor Management',
                bullets: ['Vendor relationship management', 'Contract & SLA oversight', 'Renewal management', 'Performance benchmarking', 'Escalation on your behalf'],
              },
            ].map((item) => (
              <div key={item.name} className="rounded-2xl border border-white/10 bg-white/3 p-6 hover:border-[#38bdf8]/30 transition-all duration-200">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#38bdf8]/70 block mb-2">{item.label}</span>
                <h3 className="text-white font-semibold text-base mb-4">{item.name}</h3>
                <ul className="space-y-2">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-white/40 text-sm">
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ background: '#38bdf8' }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT DELIVERY ── */}
      <section className="py-20 border-t border-white/8">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-6 h-6 rounded-md flex items-center justify-center shrink-0" style={{ background: 'rgba(56,189,248,0.15)' }}>
              <svg className="w-3.5 h-3.5" style={{ color: '#38bdf8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
            </div>
            <h2 className="text-white font-bold text-xl">Project & Service Management</h2>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                label: 'Project Delivery',
                name: 'Project Management',
                desc: 'PMP and PRINCE2-certified project managers who deliver on time and within budget, with clear reporting at every milestone.',
                bullets: ['Waterfall, Agile, and Hybrid delivery', 'Scope, risk & issue management', 'Stakeholder reporting & governance', 'Budget tracking & forecasting', 'Post-implementation review'],
              },
              {
                label: 'Service Mgmt',
                name: 'ITIL Service Management',
                desc: 'Incident, change, and problem management aligned to ITIL v4. Structured, repeatable processes your auditors can follow.',
                bullets: ['Incident & major incident management', 'Change advisory board (CAB) process', 'Problem management & root cause', 'Service catalogue management', 'SLA reporting & escalation paths'],
              },
            ].map((item) => (
              <div key={item.name} className="rounded-2xl border border-white/10 bg-white/3 p-7 hover:border-[#38bdf8]/30 transition-all duration-200">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#38bdf8]/70 block mb-2">{item.label}</span>
                <h3 className="text-white font-bold text-lg mb-3">{item.name}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-5">{item.desc}</p>
                <ul className="space-y-2">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-white/45 text-sm">
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ background: '#38bdf8' }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS & FRAMEWORKS ── */}
      <section className="border-t border-white/8">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-10">
          <p className="text-white/20 text-[10px] font-bold tracking-[0.3em] uppercase mb-1">Certifications & Partners</p>
        </div>
        <VendorTicker service="managed-services" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
            {[
              { category: 'Service Management', vendors: ['ITIL v4 Foundation', 'ITIL v4 Practitioner', 'Service Desk Institute'] },
              { category: 'Project Delivery', vendors: ['PMP (PMI)', 'PRINCE2 Practitioner', 'Agile / Scrum'] },
              { category: 'Network Operations', vendors: ['Cisco CCNP', 'Fortinet NSE', 'Sophos Certified Engineer'] },
              { category: 'SLA & Governance', vendors: ['ISO 20000 aligned', 'COBIT principles', 'GDPR & NDPA data handling'] },
            ].map(({ category, vendors }) => (
              <div key={category} className="rounded-xl border border-white/8 bg-white/2 p-5">
                <p className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: '#38bdf8' }}>{category}</p>
                <ul className="space-y-1.5">
                  {vendors.map((v) => (
                    <li key={v} className="text-white/45 text-sm">{v}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED ── */}
      <section className="py-16 border-t border-white/8">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-white/20 text-[10px] font-bold tracking-[0.3em] uppercase mb-8">Related Services</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { href: '/services/managed-security', label: 'Managed Security',  desc: 'NGFW, Zero Trust, cloud security and penetration testing.' },
              { href: '/services/infrastructure',   label: 'Infrastructure',    desc: 'Cloud, data centre, networking and AI-ready platforms.' },
              { href: '/services/applications',     label: 'Applications',      desc: 'Custom software, APIs, and enterprise integrations.' },
            ].map((r) => (
              <Link key={r.href} href={r.href}
                className="group flex flex-col gap-2.5 p-6 border border-white/8 rounded-xl bg-white/2 hover:border-[#38bdf8]/30 hover:bg-white/5 transition-all duration-200">
                <h3 className="font-bold text-white/80 group-hover:text-white transition-colors">{r.label}</h3>
                <p className="text-white/35 text-sm leading-relaxed">{r.desc}</p>
                <span className="text-[11px] font-semibold mt-1 flex items-center gap-1 group-hover:gap-2 transition-all duration-200" style={{ color: '#38bdf8' }}>
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 border-t border-white/8 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Looking for reliable, long-term IT support?</h2>
            <p className="text-white/35 text-sm leading-relaxed max-w-lg">
              Let us take ownership of your day-to-day IT operations so your team can focus on what matters.
            </p>
          </div>
          <Link href="/contact"
            className="shrink-0 text-white font-semibold px-8 py-3.5 rounded-xl text-sm tracking-wide transition-all duration-200 hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #38bdf8, #0ea5e9)' }}>
            Talk to Our Team
          </Link>
        </div>
      </section>
      </div>{/* end dark wrap */}
      </div>{/* end z-index 1 wrap */}
    </div>
  )
}
