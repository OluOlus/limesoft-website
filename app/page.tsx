import ParallaxHero from '@/components/ParallaxHero'
import LogoTicker from '@/components/LogoTicker'
import ServicesList from '@/components/ServicesList'
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'
import Link from 'next/link'

const stats = [
  { value: '4',    label: 'Global Offices',     sub: 'Nigeria · UK · Cameroon · Rwanda' },
  { value: '8+',   label: 'Tech Partners',       sub: 'Cisco, AWS, Microsoft & more' },
  { value: '15+',  label: 'Certifications',      sub: 'CCNP, PCNSE, ISC2, ITIL & more' },
  { value: '100%', label: 'Delivery Commitment', sub: 'Waterfall · Hybrid · Agile' },
]

const projects = [
  {
    client: 'Novare Africa',
    service: 'Cybersecurity',
    headline: 'Next-Gen Firewall Refresh',
    desc: 'Secure network perimeter using Sophos XGS Series NGFW — protecting enterprise assets across multiple sites.',
    accent: '#00e5ff',
  },
  {
    client: 'Elysium Diem',
    service: 'Infrastructure',
    headline: 'SD-WLAN for 30+ Offices',
    desc: 'UniFi Software Defined WLAN deployed across 30+ offices and 400+ users with unified control and visibility.',
    accent: '#a855f7',
  },
  {
    client: 'Jott Limited',
    service: 'Managed Services',
    headline: 'Managed Networks & Firewall',
    desc: 'Ongoing managed network and firewall services with technical advisory and SLA-backed support.',
    accent: '#e879f9',
  },
  {
    client: 'Rocksteady Studios',
    service: 'Applications',
    headline: 'Cloud & Application Services',
    desc: 'End-to-end cloud and application design, implementation, and sustained support for digital delivery.',
    accent: '#00e5ff',
  },
]

const executive = [
  {
    initials: 'KA',
    name: 'Kelvin Adeyemi',
    role: 'Chief Executive Officer',
    bio: 'Technology strategist with 15+ years driving digital transformation across West Africa and the UK. Leads Limesoft System\'s vision to become the No.1 trusted tech integrator on the continent.',
    ringColor: '#00e5ff',
  },
  {
    initials: 'TA',
    name: 'Tunde Afolabi',
    role: 'Chief Technology Officer',
    bio: 'CCNP-certified infrastructure architect and cybersecurity expert. Oversees technical delivery across all four Limesoft offices, ensuring global standards on every project.',
    ringColor: '#a855f7',
  },
  {
    initials: 'FN',
    name: 'Fatima Ndoye',
    role: 'Head of Cybersecurity',
    bio: 'PCNSE, ISC2, and Sophos-certified security architect. Leads Limesoft\'s cybersecurity practice, designing and delivering Zero Trust and NGFW solutions for enterprise clients.',
    ringColor: '#e879f9',
  },
  {
    initials: 'EM',
    name: 'Emmanuel Mwangi',
    role: 'Director of Operations',
    bio: 'PMP and PRINCE2 certified programme director. Ensures flawless delivery across Limesoft\'s projects in Nigeria, Rwanda, Cameroon, and the United Kingdom.',
    ringColor: '#00e5ff',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── PARALLAX HERO ── */}
      <ParallaxHero />

      {/* ── ANIMATED PARTNER LOGO TICKER ── */}
      <LogoTicker />

      {/* ── STATS ── */}
      <section className="py-20 bg-[#02020e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map(({ value, label, sub }) => (
              <StaggerItem key={label}>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white mb-1 tracking-tight">
                    {value}
                  </div>
                  <div className="text-cyan-neon text-[11px] font-bold tracking-widest uppercase mb-1">
                    {label}
                  </div>
                  <div className="text-white/25 text-xs">{sub}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── SERVICES — interactive rows ── */}
      <section className="py-24 bg-[#030318]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="mb-14 flex items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-cyan-neon" />
                <span className="text-cyan-neon text-xs font-semibold tracking-[0.35em] uppercase">What We Do</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Solutions Built for<br />the Digital Age
              </h2>
            </div>
            <Link href="/services" className="hidden md:inline text-white/30 text-xs font-semibold tracking-widest uppercase hover:text-cyan-neon transition-colors shrink-0">
              All Services →
            </Link>
          </ScrollReveal>
          <ServicesList />
        </div>
      </section>

      {/* ── WHY LIMESOFT ── */}
      <section className="bg-[#02020e] overflow-hidden py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <ScrollReveal className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px" style={{ background: '#a855f7' }} />
                <span className="text-xs font-semibold tracking-[0.35em] uppercase" style={{ color: '#a855f7' }}>Why Limesoft?</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-8">
                Trusted Partner in Every Digital Journey
              </h2>
              <p className="text-white/45 leading-relaxed mb-8">
                Forward-thinking. Globally certified. Customer obsessed.
                We combine deep technical expertise with strategic thinking — and stay with you
                through every phase of delivery.
              </p>
              <div className="space-y-3 mb-10">
                {['4 Global Offices', '15+ Technical Certifications', 'Vendor-Agnostic Advice', 'End-to-End Delivery'].map((tag) => (
                  <div key={tag} className="flex items-center gap-3 text-white/50 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-neon" />
                    {tag}
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-flex items-center gap-2 text-cyan-neon text-sm font-semibold hover:gap-4 transition-all">
                Learn About Us →
              </Link>
            </ScrollReveal>

            <StaggerContainer className="space-y-0">
              {[
                { t: 'Globally Certified Team',    d: 'CCNP, PCNSE, ISC2, ITIL v4, PMP, PRINCE2 — credentials that prove our expertise, not just our claims.' },
                { t: 'Pan-African + UK Presence',  d: 'Offices in Lagos, South Yorkshire, Douala, and Kigali — local knowledge, international standards.' },
                { t: 'Vendor-Agnostic Approach',   d: 'Cisco, Palo Alto, Fortinet, AWS, Microsoft — we recommend what is right for you, not what benefits us.' },
                { t: 'Flexible Methodology',       d: 'Waterfall, Agile, or Hybrid — our certified PMs select the right delivery model for each project.' },
                { t: 'Customer Obsession',         d: 'Our clients are the heart of everything we do. Their success is our primary metric, every single time.' },
                { t: 'Full-Lifecycle Delivery',    d: 'From design and implementation to ongoing managed services — one partner for the complete technology journey.' },
              ].map((r, i) => (
                <StaggerItem key={r.t}>
                  <div className="flex gap-6 py-7 border-b border-white/5 group cursor-default">
                    <span className="text-white/12 text-xs font-mono w-5 mt-0.5 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-white font-bold mb-2 group-hover:text-cyan-neon transition-colors duration-200">
                        {r.t}
                      </h3>
                      <p className="text-white/40 text-sm leading-relaxed">{r.d}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ── EXECUTIVE TEAM ── */}
      <section className="py-28 bg-[#030318]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px" style={{ background: '#e879f9' }} />
              <span className="text-xs font-semibold tracking-[0.35em] uppercase" style={{ color: '#e879f9' }}>Leadership</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Executive Team</h2>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {executive.map((exec) => (
              <StaggerItem key={exec.name}>
                <div
                  className="group h-full border border-white/8 hover:border-white/20 transition-all duration-500 p-7"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 100%)' }}
                >
                  <div className="mb-6">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center border"
                      style={{
                        background: `${exec.ringColor}20`,
                        borderColor: `${exec.ringColor}40`,
                      }}
                    >
                      <span className="text-white font-black text-lg">{exec.initials}</span>
                    </div>
                  </div>
                  <h3 className="text-white font-bold mb-0.5">{exec.name}</h3>
                  <p
                    className="text-[11px] font-bold tracking-widest uppercase mb-4"
                    style={{ color: exec.ringColor }}
                  >
                    {exec.role}
                  </p>
                  <p className="text-white/40 text-xs leading-relaxed">{exec.bio}</p>
                  <div
                    className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: exec.ringColor, opacity: 0.4 }}
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── REFERENCE PROJECTS ── */}
      <section className="py-28 bg-[#02020e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-cyan-neon" />
              <span className="text-cyan-neon text-xs font-semibold tracking-[0.35em] uppercase">Our Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Reference Projects</h2>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-px bg-white/5">
            {projects.map((p) => (
              <StaggerItem key={p.client}>
                <div className="bg-[#02020e] p-10 group hover:bg-[#050530] transition-colors duration-500 h-full">
                  <p
                    className="text-[11px] font-black tracking-[0.3em] uppercase mb-6"
                    style={{ color: p.accent }}
                  >
                    {p.service}
                  </p>
                  <p className="text-white/25 text-sm mb-2">{p.client}</p>
                  <h3 className="text-white font-bold text-xl mb-4 leading-snug">{p.headline}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
                  <div
                    className="mt-8 h-px w-8 group-hover:w-16 transition-all duration-500"
                    style={{ background: p.accent }}
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #02020e 0%, #06063a 50%, #0e0030 100%)' }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(0,229,255,0.4), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(168,85,247,0.3), transparent)' }} />
        <div className="absolute -top-20 right-1/4 w-80 h-80 rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute -bottom-20 left-1/4 w-80 h-80 rounded-full" style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-cyan-neon" />
              <span className="text-cyan-neon text-xs font-semibold tracking-[0.35em] uppercase">Start Today</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-8">
              Ready to Secure Your
              <span className="text-gradient-brand"> Digital Future?</span>
            </h2>
            <p className="text-white/45 text-lg mb-12 leading-relaxed max-w-xl">
              Partner with Limesoft System — your trusted catalyst for intelligent, secure,
              and scalable technology solutions across Africa and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group relative overflow-hidden bg-cyan-neon text-[#02020e] font-black px-10 py-4 text-sm tracking-wide"
                style={{ boxShadow: '0 0 0 rgba(0,229,255,0)' }}
              >
                <span className="relative z-10">Start the Conversation</span>
                <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
              <Link
                href="/resources"
                className="border border-white/15 text-white/60 font-semibold px-10 py-4 text-sm tracking-wide hover:border-white/40 hover:text-white transition-all duration-300"
              >
                Read Our Articles
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
