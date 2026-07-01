'use client'

import Image from 'next/image'
import Link from 'next/link'
import VendorTicker from '@/components/VendorTicker'
import Carousel from '@/components/Carousel'
import ParticleBackground from '@/components/ParticleBackground'

const highlights = [
  {
    num: '01', label: 'Perimeter Defence',
    name: 'Next-Generation Firewalls',
    desc: 'Deep packet inspection, application-layer policy, SSL decryption, and live threat feeds on Palo Alto, Fortinet, Sophos, and Cisco platforms. We design, deploy, and manage your NGFW estate.',
  },
  {
    num: '02', label: 'Zero Trust',
    name: 'Zero Trust Network Access',
    desc: 'Access verified by identity, device posture, and live risk signals. Not by IP address. We replace broad VPN tunnels with application-specific controls that travel with your users.',
  },
  {
    num: '03', label: 'Endpoint & XDR',
    name: 'EDR / XDR Detection & Response',
    desc: 'Behavioural AI across endpoints, email, cloud, and network telemetry. Correlating signals that single-product tools miss. Sophos Intercept X, Microsoft Defender, and CrowdStrike, run by our team.',
  },
  {
    num: '04', label: 'Cloud Security',
    name: 'Cloud Security Posture Management',
    desc: 'Continuous scanning of AWS and Azure for misconfigurations, over-privileged identities, and exposed services. Aligned to CIS benchmarks and wired into your DevOps pipeline.',
  },
  {
    num: '05', label: 'Identity',
    name: 'Identity & Access Management',
    desc: 'MFA, Conditional Access, and Privileged Identity Management on Microsoft Entra ID and Cisco ISE. Access control built as a foundation, not an afterthought.',
  },
  {
    num: '06', label: 'Testing',
    name: 'Penetration Testing & Red Team',
    desc: 'ISC2-certified ethical hackers testing your network, web applications, staff phishing susceptibility, and physical controls. You get a clear findings report and a remediation plan you can actually follow.',
  },
]

export default function ManagedSecurityPage() {
  return (
    <div>
      <ParticleBackground r={1} g={138} b={216} count={60} maxDist={145} speed={0.2} />
      <div className="relative" style={{ zIndex: 1 }}>

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex flex-col overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(1,138,216,0.5), transparent)' }} />

        {/* Radar — right side */}
        <div className="absolute right-0 top-0 h-full w-[50%] flex items-center justify-center pointer-events-none select-none">
          <div className="relative w-[440px] h-[440px] opacity-70">
            {[1, 0.72, 0.46, 0.26].map((s, i) => (
              <div key={i} className="absolute rounded-full border"
                style={{ borderColor: `rgba(1,138,216,${0.1 + i * 0.05})`, inset: `${(1 - s) * 50}%` }} />
            ))}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 origin-center"
                style={{ background: 'conic-gradient(from 0deg, transparent 0deg, rgba(1,138,216,0.3) 55deg, transparent 65deg)', animation: 'spin-slow 4s linear infinite' }} />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#018ad8] pulse-ring" />
            {[{ t: '20%', l: '62%', d: '0.8s' }, { t: '58%', l: '76%', d: '2s' }, { t: '72%', l: '36%', d: '3.2s' }, { t: '33%', l: '25%', d: '1.5s' }].map((b, i) => (
              <div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-[#38bdf8]"
                style={{ top: b.t, left: b.l, animation: 'pulse-glow 2.5s ease-in-out infinite', animationDelay: b.d, opacity: 0.75 }} />
            ))}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image src="/limesoft-shield.png" alt="" width={64} height={64} className="object-contain opacity-15" />
            </div>
          </div>
        </div>

        {/* gradient fade — hero to content */}
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, rgba(7,17,30,0.94))' }} />

        <div className="relative flex-1 max-w-5xl mx-auto px-6 lg:px-8 pt-36 flex flex-col justify-center pb-20 w-full">
          <nav className="flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-white/20 mb-12">
            <Link href="/" className="hover:text-white/50 transition-colors">Home</Link>
            <span>/</span><Link href="/services" className="hover:text-white/50 transition-colors">Services</Link>
            <span>/</span><span style={{ color: '#018ad8' }}>Managed Security</span>
          </nav>

          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border w-fit" style={{ borderColor: 'rgba(1,138,216,0.35)', background: 'rgba(1,138,216,0.08)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#018ad8]" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#018ad8]">Security Practice</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tight mb-6 max-w-xl">
            Threat&#8209;driven<br />
            <span style={{ background: 'linear-gradient(120deg, #018ad8, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              security.
            </span>
          </h1>
          <p className="text-white/45 text-lg max-w-sm leading-relaxed mb-10">
            Certified across Palo Alto, Sophos, Fortinet, and Cisco. We protect your perimeter, endpoints, cloud, and identity.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg, #018ad8, #0179c0)' }}>
              Get a Security Assessment
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
          <p className="text-white/15 text-[10px] font-bold tracking-[0.3em] uppercase">Certified Technology Partners</p>
        </div>
        <VendorTicker service="security" />
      </div>

      {/* ── CAPABILITIES CAROUSEL ── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-2" style={{ color: '#018ad8' }}>What We Deliver</p>
              <h2 className="text-3xl md:text-4xl font-black text-white">Security Capabilities</h2>
            </div>
            <p className="text-white/25 text-xs hidden sm:block">Swipe to explore →</p>
          </div>
          <Carousel theme="dark" itemWidthClass="w-[88%] sm:w-[380px]">
            {highlights.map((h) => (
              <div key={h.num} className="h-full rounded-2xl border border-white/8 p-8 flex flex-col" style={{ background: 'rgba(1,138,216,0.04)' }}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[11px] font-black tabular-nums" style={{ color: 'rgba(1,138,216,0.5)' }}>{h.num}</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full" style={{ background: 'rgba(1,138,216,0.12)', color: '#018ad8' }}>{h.label}</span>
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
              { href: '/services/infrastructure',   label: 'Infrastructure',    desc: 'Cloud, networking and data centre solutions.' },
              { href: '/services/applications',     label: 'Applications',      desc: 'Custom software, APIs, and integrations.' },
              { href: '/services/managed-services', label: 'Managed Services',  desc: 'Ongoing support and IT advisory.' },
            ].map(r => (
              <Link key={r.href} href={r.href}
                className="group flex flex-col gap-2 p-6 border border-white/8 rounded-xl bg-white/2 hover:border-[#018ad8]/25 hover:bg-white/4 transition-all duration-200">
                <h3 className="font-bold text-white/70 group-hover:text-white transition-colors">{r.label}</h3>
                <p className="text-white/30 text-sm">{r.desc}</p>
                <span className="text-[11px] font-semibold mt-1 group-hover:gap-2 transition-all" style={{ color: '#018ad8' }}>Learn more →</span>
              </Link>
            ))}
          </div>
          <div className="rounded-2xl border border-[#018ad8]/20 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6" style={{ background: 'rgba(1,138,216,0.06)' }}>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-1.5">Start with a security assessment</h2>
              <p className="text-white/35 text-sm">We map your posture, identify the gaps, and design the programme to close them.</p>
            </div>
            <Link href="/contact" className="shrink-0 text-white font-semibold px-8 py-3.5 rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg, #018ad8, #0179c0)' }}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
      </div>{/* end dark wrap */}
      </div>{/* end z-index 1 wrap */}
    </div>
  )
}
