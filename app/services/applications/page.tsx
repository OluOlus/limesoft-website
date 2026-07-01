'use client'

import Image from 'next/image'
import Link from 'next/link'
import VendorTicker from '@/components/VendorTicker'
import Carousel from '@/components/Carousel'
import ParticleBackground from '@/components/ParticleBackground'

const highlights = [
  { num: '01', label: 'Web', name: 'Custom Web Applications', desc: 'Performant, accessible web apps in React and Next.js. Internal tools, admin dashboards, and customer-facing platforms that handle real production traffic.' },
  { num: '02', label: 'Mobile', name: 'Mobile Applications', desc: 'Cross-platform iOS and Android apps in React Native. Single codebase, native-feeling performance, offline capability, and full app store delivery.' },
  { num: '03', label: 'Enterprise', name: 'Enterprise & ERP Integration', desc: 'Connecting ERP, CRM, HR, and finance systems through clean API and integration layers. Data stays consistent without manual reconciliation.' },
  { num: '04', label: 'APIs', name: 'API Design & Development', desc: 'Versioned REST and GraphQL APIs with OpenAPI documentation, rate limiting, authentication, and monitoring. The backbone everything else connects to.' },
  { num: '05', label: 'Cloud-Native', name: 'Cloud-Native & DevOps', desc: 'Containerised applications on Kubernetes with CI/CD pipelines, infrastructure-as-code, automated testing, and observability from day one.' },
  { num: '06', label: 'Legacy', name: 'Legacy Modernisation', desc: 'Migrating legacy systems using strangler fig patterns. Business logic preserved, fragile codebases replaced with architectures that can be maintained.' },
]

export default function ApplicationsPage() {
  return (
    <div>
      <ParticleBackground r={1} g={138} b={216} count={85} maxDist={100} speed={0.55} />
      <div className="relative" style={{ zIndex: 1 }}>

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex flex-col overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(1,138,216,0.5), transparent)' }} />

        {/* Code terminal — right side */}
        <div className="absolute right-0 top-0 h-full w-[50%] flex items-center justify-center pointer-events-none select-none pr-4">
          <div className="w-[400px] rounded-2xl border border-white/10 bg-[#0a1628] shadow-2xl overflow-hidden">
            {/* Terminal bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-[#060d1a]">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="ml-3 text-white/20 text-[11px] font-mono">limesoft-app</span>
            </div>
            {/* Code lines */}
            <div className="p-5 font-mono text-[12px] leading-[1.9] space-y-0.5">
              <p><span className="text-[#38bdf8]">import</span> <span className="text-white/70">&#123; NextRequest &#125;</span> <span className="text-[#38bdf8]">from</span> <span className="text-green-400/70">&apos;next/server&apos;</span></p>
              <p><span className="text-white/25">// API route handler</span></p>
              <p><span className="text-[#018ad8]">export async function</span> <span className="text-yellow-300/80">GET</span><span className="text-white/50">(req: NextRequest) &#123;</span></p>
              <p><span className="text-white/25">  </span><span className="text-[#38bdf8]">  const</span> <span className="text-white/70"> data </span><span className="text-white/40">=</span> <span className="text-[#38bdf8]"> await</span> <span className="text-yellow-300/70"> fetchSecure</span><span className="text-white/50">()</span></p>
              <p><span className="text-[#38bdf8]">  return</span> <span className="text-yellow-300/70"> Response</span><span className="text-white/50">.json(&#123; data &#125;)</span></p>
              <p><span className="text-white/50">&#125;</span></p>
              <p className="mt-3"><span className="text-white/25">// Component</span></p>
              <p><span className="text-[#018ad8]">export default function</span> <span className="text-yellow-300/80"> App</span><span className="text-white/50">() &#123;</span></p>
              <p><span className="text-[#38bdf8]">  return</span> <span className="text-white/50"> (</span></p>
              <p><span className="text-white/40">    &lt;</span><span className="text-[#018ad8]">Dashboard</span></p>
              <p><span className="text-white/40">      </span><span className="text-[#38bdf8]">secure</span><span className="text-white/40">=&#123;</span><span className="text-orange-300/80">true</span><span className="text-white/40">&#125;</span></p>
              <p><span className="text-white/40">      </span><span className="text-[#38bdf8]">cloud</span><span className="text-white/40">=</span><span className="text-green-400/70">&quot;aws&quot;</span></p>
              <p><span className="text-white/40">    /&gt;</span></p>
              <p><span className="text-white/50">  )</span></p>
              <p><span className="text-white/50">&#125;</span></p>
              {/* Cursor */}
              <p><span className="text-[#018ad8] animate-pulse">▌</span></p>
            </div>
          </div>
        </div>

        {/* gradient fade — hero to content */}
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, rgba(7,17,30,0.94))' }} />

        <div className="relative flex-1 max-w-5xl mx-auto px-6 lg:px-8 pt-36 flex flex-col justify-center pb-20 w-full">
          <nav className="flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-white/20 mb-12">
            <Link href="/" className="hover:text-white/50 transition-colors">Home</Link>
            <span>/</span><Link href="/services" className="hover:text-white/50 transition-colors">Services</Link>
            <span>/</span><span style={{ color: '#018ad8' }}>Applications</span>
          </nav>

          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border w-fit" style={{ borderColor: 'rgba(1,138,216,0.35)', background: 'rgba(1,138,216,0.08)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#018ad8]" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#018ad8]">Applications Practice</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tight mb-6 max-w-xl">
            Software built<br />
            <span style={{ background: 'linear-gradient(120deg, #018ad8, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              for your world.
            </span>
          </h1>
          <p className="text-white/45 text-lg max-w-sm leading-relaxed mb-10">
            React, Next.js, Node.js, and cloud-native engineering. Web, mobile, and enterprise apps built around how you work.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg, #018ad8, #0179c0)' }}>
              Discuss Your Project
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
          <p className="text-white/15 text-[10px] font-bold tracking-[0.3em] uppercase">Technology Stack</p>
        </div>
        <VendorTicker service="applications" />
      </div>

      {/* ── CAPABILITIES CAROUSEL ── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-2" style={{ color: '#018ad8' }}>What We Build</p>
              <h2 className="text-3xl md:text-4xl font-black text-white">Application Capabilities</h2>
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

      {/* ── DETAILED BREAKDOWN ── */}
      <section className="border-t border-white/8">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-2" style={{ color: '#018ad8' }}>In Detail</p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-14">Full technology stack</h2>
          <div className="divide-y divide-white/6">
            {[
              { area: 'Frontend',       items: ['React 18+', 'Next.js 14 App Router', 'TypeScript', 'Tailwind CSS', 'React Native (mobile)'] },
              { area: 'Backend',        items: ['Node.js / Express', 'Python / FastAPI', 'PostgreSQL & MySQL', 'MongoDB & Redis', 'GraphQL & REST'] },
              { area: 'Cloud',          items: ['Amazon Web Services', 'Microsoft Azure', 'Docker & Kubernetes', 'Serverless (Lambda / Functions)', 'GitHub Actions & Azure DevOps'] },
              { area: 'DevOps',         items: ['Terraform (IaC)', 'CI/CD pipelines', 'SAST security scanning', 'Blue-green & canary deploys', 'Observability stack'] },
              { area: 'Integrations',   items: ['Microsoft 365 / Graph API', 'Paystack, Stripe, Flutterwave', 'Twilio / SendGrid', 'Salesforce, HubSpot', 'Cisco DevNet APIs'] },
              { area: 'Delivery',       items: ['Agile / Scrum sprints', 'Fixed-price milestones', 'Discovery & scoping workshops', 'Post-launch support', 'Code handover & documentation'] },
            ].map(row => (
              <div key={row.area} className="py-7 grid md:grid-cols-[200px_1fr] gap-4 items-start">
                <p className="text-white/35 text-sm font-semibold">{row.area}</p>
                <div className="flex flex-wrap gap-2">
                  {row.items.map(item => (
                    <span key={item} className="text-white/55 text-sm px-3 py-1 rounded-lg border border-white/8 bg-white/3">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED + CTA ── */}
      <section className="py-16 border-t border-white/8">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4 mb-14">
            {[
              { href: '/services/managed-security', label: 'Managed Security', desc: 'NGFW, Zero Trust, and cloud security.' },
              { href: '/services/infrastructure',   label: 'Infrastructure',   desc: 'Cloud, networking and data centre solutions.' },
              { href: '/services/managed-services', label: 'Managed Services', desc: 'Ongoing support and IT advisory.' },
            ].map(r => (
              <Link key={r.href} href={r.href}
                className="group flex flex-col gap-2 p-6 border border-white/8 rounded-xl bg-white/2 hover:border-[#018ad8]/25 hover:bg-white/4 transition-all duration-200">
                <h3 className="font-bold text-white/70 group-hover:text-white transition-colors">{r.label}</h3>
                <p className="text-white/30 text-sm">{r.desc}</p>
                <span className="text-[11px] font-semibold mt-1" style={{ color: '#018ad8' }}>Learn more →</span>
              </Link>
            ))}
          </div>
          <div className="rounded-2xl border border-[#018ad8]/20 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6" style={{ background: 'rgba(1,138,216,0.06)' }}>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-1.5">Have a project in mind?</h2>
              <p className="text-white/35 text-sm">Tell us what you need. We scope it, design it, and ship it.</p>
            </div>
            <Link href="/contact" className="shrink-0 text-white font-semibold px-8 py-3.5 rounded-xl text-sm hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg, #018ad8, #0179c0)' }}>
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
