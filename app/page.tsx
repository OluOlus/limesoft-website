import ParallaxHero from '@/components/ParallaxHero'
import LogoTicker from '@/components/LogoTicker'
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'
import Link from 'next/link'

const services = [
  {
    title: 'Managed Security',
    desc: 'Next-gen firewalls, Zero Trust, penetration testing, EDR/XDR, cloud security, and Microsoft 365 security — keeping your organisation protected.',
    href: '/services#cybersecurity',
  },
  {
    title: 'Infrastructure',
    desc: 'AWS and Azure landing zones, networking, compute, storage, Microsoft 365, and AI-ready infrastructure built for modern workloads.',
    href: '/services#infrastructure',
  },
  {
    title: 'Managed Services',
    desc: 'SLA-backed network and firewall management, monitoring, and ongoing technical support so you can focus on your business.',
    href: '/services#services',
  },
  {
    title: 'Cloud & Applications',
    desc: 'Cloud migration, application development, DevOps, and governance across AWS, Azure, and Microsoft 365.',
    href: '/services#applications',
  },
]

const differentiators = [
  { num: '01', title: 'Globally Certified',        desc: 'CCNP, PCNSE, ISC2, ITIL v4, PMP, PRINCE2 — credentials backed by real-world delivery.' },
  { num: '02', title: 'Pan-African + UK Presence',  desc: 'Local teams in Lagos, South Yorkshire, Douala, and Kigali. International standards everywhere.' },
  { num: '03', title: 'Vendor-Agnostic',             desc: 'Cisco, Palo Alto, Fortinet, AWS, Microsoft — we recommend what fits you, not what pays us.' },
  { num: '04', title: 'End-to-End Delivery',         desc: 'Design, implementation, and ongoing management — one partner for your full technology lifecycle.' },
  { num: '05', title: 'Client-First Approach',       desc: 'Your success is our metric. We stay with you through every phase and beyond go-live.' },
  { num: '06', title: 'Flexible Methodology',        desc: 'Waterfall, Agile, or Hybrid — certified project managers select the right model for each engagement.' },
]

const process = [
  { step: '01', title: 'Assess',    desc: 'We audit your current environment, identify gaps, and define requirements.' },
  { step: '02', title: 'Design',    desc: 'Our architects design a tailored solution aligned to your goals and budget.' },
  { step: '03', title: 'Implement', desc: 'Certified engineers deploy and configure — with minimal disruption to operations.' },
  { step: '04', title: 'Support',   desc: 'Ongoing managed services, monitoring, and advisory to keep you secure and optimised.' },
]

function SectionLabel({ text, color = '#018ad8' }: { text: string; color?: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-8 h-px" style={{ background: color }} />
      <span className="text-xs font-semibold tracking-[0.35em] uppercase" style={{ color }}>{text}</span>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* 1. HERO */}
      <ParallaxHero />

      {/* 2. PARTNER LOGOS */}
      <section className="py-10 border-y border-white/10 bg-white/5">
        <ScrollReveal>
          <p className="text-center text-white/60 text-[10px] font-semibold tracking-[0.35em] uppercase mb-6">Technology Partners</p>
        </ScrollReveal>
        <LogoTicker />
      </section>

      {/* 4. MISSION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <SectionLabel text="Who We Are" />
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
                  End-to-End Technology Solutions, Delivered Across Africa and the UK
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div>
                <p className="text-white/55 text-lg leading-relaxed mb-6">
                  Founded in 2020, Limesoft System was built to meet a clear need: organisations across Africa were adopting technology faster than they could secure and manage it.
                </p>
                <p className="text-white/55 text-lg leading-relaxed mb-8">
                  Today we operate across four countries with certified engineers who have delivered solutions for enterprises, studios, and growing businesses alike.
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 text-cyan-neon font-semibold text-sm hover:gap-4 transition-all duration-200">
                  Learn About Us →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. SERVICES — light section */}
      <section className="py-24 bg-[#fcfbfc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <SectionLabel text="What We Do" color="#0d9488"/>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Our Core Services</h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <StaggerItem key={s.title}>
                <Link href={s.href}
                  className="group flex flex-col h-full p-8 rounded-2xl border border-gray-200 bg-white hover:border-cyan-neon/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-0.5 mb-6 bg-cyan-neon group-hover:w-16 transition-all duration-300" />
                  <p className="text-gray-300 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">0{i + 1}</p>
                  <h3 className="text-gray-900 font-bold text-lg mb-3 group-hover:text-cyan-neon transition-colors">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>
                  <span className="text-cyan-neon text-xs font-semibold tracking-widest uppercase">Learn More →</span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. WHY LIMESOFT */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="mb-14">
            <SectionLabel text="Why Limesoft?" />
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight max-w-xl">
              Built Different. Delivered Better.
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {differentiators.map((d) => (
              <StaggerItem key={d.num}>
                <div className="group h-full p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
                  <div className="text-white/10 text-4xl font-black mb-4 leading-none group-hover:text-white/20 transition-colors">{d.num}</div>
                  <h3 className="text-white font-bold mb-2 group-hover:text-cyan-neon transition-colors">{d.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 7. OUR PROCESS — light section */}
      <section className="py-24 bg-[#fcfbfc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel text="Our Approach" color="#0d9488"/>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">How We Deliver</h2>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <StaggerItem key={p.step}>
                <div className="relative">
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-full w-full h-px bg-gray-200 z-0" />
                  )}
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full border-2 border-cyan-neon/30 bg-cyan-neon/10 flex items-center justify-center mb-5">
                      <span className="text-teal-600 font-black text-sm">{p.step}</span>
                    </div>
                    <h3 className="text-gray-900 font-bold text-lg mb-2">{p.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-neon/5 via-transparent to-sky-500/5 backdrop-blur-sm" />
        <div className="absolute inset-0 border-y border-white/10" />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(1, 138, 216,0.45), transparent)' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionLabel text="Get Started" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
              Move Forward with Confidence
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Don&apos;t let security gaps or outdated infrastructure hold your business back. Let&apos;s build something secure, scalable, and future-ready.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact"
                className="group relative overflow-hidden rounded-xl bg-cyan-neon text-[#0d1f3c] font-bold px-10 py-4 text-sm tracking-wide hover:shadow-[0_0_40px_rgba(1,138,216,0.35)] transition-shadow duration-300">
                <span className="relative z-10">Talk to an Expert</span>
                <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
              <Link href="/services"
                className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white/70 font-semibold px-10 py-4 text-sm tracking-wide hover:border-white/40 hover:text-white hover:bg-white/10 transition-all duration-300">
                View Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
