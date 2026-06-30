import type { Metadata } from 'next'
import Link from 'next/link'
import Carousel from '@/components/Carousel'

export const metadata: Metadata = {
  title: 'About Us | Limesoft System',
  description:
    'Learn about Limesoft System — cybersecurity and IT solutions firm with offices in Nigeria, UK, Cameroon, and Rwanda.',
}

const coreValues = [
  {
    num: '01',
    title: 'Innovation & Excellence',
    desc: 'We continually embrace change and explore new ideas — staying at the forefront of technology so our clients benefit from the best that the industry has to offer, delivered with precision.',
  },
  {
    num: '02',
    title: 'Integrity',
    desc: 'We act with Honesty, Transparency, and Accountability in every interaction. Our clients trust us with their critical infrastructure — we take that responsibility seriously and hold ourselves to the highest ethical standards.',
  },
  {
    num: '03',
    title: 'Customer Obsession',
    desc: 'Our customers are the heart of everything we do. We measure our success by theirs — from the first scoping call to long-term managed service partnerships and beyond.',
  },
]

const certifications = [
  { group: 'Infrastructure', accent: '#018ad8', items: ['CCNP Enterprise Infrastructure', 'JNCIA — JUNOS, Cloud, Mist AI', 'JNCIS-SP', 'Azure & AWS Certified SA', 'NSE 1–3', 'F5-CA'] },
  { group: 'Cybersecurity',  accent: '#0d9488', items: ['CCNP Security', 'ISC2', 'Sophos CSP', 'Sophos Certified Architect', 'NSE 4', 'PCNSA', 'PCNSE'] },
  { group: 'Applications',   accent: '#38bdf8', items: ['Web & App Development', 'Cisco Certified DevNet Associate'] },
  { group: 'Services',       accent: '#64748b', items: ['CCNA', 'Sophos Certified Technician', 'PMP', 'ITIL v4', 'PRINCE2'] },
]



export default function AboutPage() {
  return (
    <div className="text-gray-800">
      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#eef2f7]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-200/30 rounded-full blur-[150px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <span className="inline-flex items-center gap-2.5 mb-8">
            <span className="w-8 h-px bg-cyan-neon" />
            <span className="text-cyan-neon text-xs font-semibold tracking-[0.3em] uppercase">Our Story</span>
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-[1.02] tracking-tight mb-8 max-w-4xl">
            Securing and Transforming the Digital Future
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
            Limesoft System delivers cybersecurity, infrastructure, and managed IT services that
            protect critical assets and accelerate digital growth — from Lagos to London.
          </p>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-[#f4f7fa] border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200/60">
            <div className="py-16 md:pr-16">
              <p className="text-cyan-neon text-[10px] font-semibold tracking-[0.4em] uppercase mb-6">Our Mission</p>
              <p className="text-gray-600 text-lg leading-relaxed">
                To support organisations through their digital transformation journey by delivering
                <span className="text-gray-800 font-semibold"> intelligent, cutting-edge, secure, and scalable</span> integrated
                technology solutions — through expert collaboration, relentless innovation, and an unwavering
                commitment to excellence and customer success.
              </p>
            </div>
            <div className="py-16 md:pl-16">
              <p className="text-sky-500 text-[10px] font-semibold tracking-[0.4em] uppercase mb-6">Our Vision</p>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the{' '}
                <span className="text-gray-800 font-semibold">No.1 trusted catalyst</span>{' '}
                for intelligent and secure digital transformation — forging excellence in a connected world
                and leading across every territory we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT TEXT */}
      <section className="py-24 bg-[#eef2f7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <span className="inline-flex items-center gap-2.5 mb-6 lg:sticky lg:top-28">
                <span className="w-8 h-px bg-cyan-neon" />
                <span className="text-cyan-neon text-xs font-semibold tracking-[0.3em] uppercase">Who We Are</span>
              </span>
            </div>
            <div className="lg:col-span-8 space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Founded in 2020, Limesoft System emerged from a clear need: organisations across Africa
                and beyond were adopting technology faster than they could secure and integrate it.
                We were built to bridge that gap.
              </p>
              <p>
                Today, we operate across four countries — Nigeria, the United Kingdom, Cameroon, and Rwanda —
                with a team of certified engineers and consultants who have delivered solutions for enterprises,
                studios, and growing businesses alike.
              </p>
              <p>
                Our approach combines{' '}
                <span className="text-gray-800 font-medium">deep technical expertise</span> with{' '}
                <span className="text-gray-800 font-medium">strategic thinking</span>. We do not just implement
                technology — we understand your business, design the right architecture, and stay with you
                through every phase of delivery and beyond.
              </p>
              <p>
                We hold vendor relationships with Cisco, Palo Alto Networks, HPE, F5, Fortinet, AWS,
                and Microsoft — but we are always vendor-agnostic in our recommendations.
                The right solution for you is the one we recommend, not the one that benefits us.
              </p>
              <blockquote className="border-l-2 border-cyan-neon pl-6 mt-10">
                <p className="text-gray-800 text-xl font-medium italic leading-snug">
                  "Securing Africa&apos;s Digital Future."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-[#f4f7fa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="inline-flex items-center gap-2.5 mb-5">
                <span className="w-8 h-px bg-cyan-neon" />
                <span className="text-cyan-neon text-xs font-semibold tracking-[0.3em] uppercase">Core Values</span>
              </span>
              <h2 className="text-4xl font-bold text-gray-800">Our Foundation</h2>
            </div>
          </div>
          <Carousel theme="light">
            {coreValues.map((v) => (
              <div key={v.num} className="h-full p-8 rounded-2xl border border-slate-200/60 bg-white hover:border-cyan-neon/40 hover:shadow-lg transition-all duration-300">
                <div className="text-6xl font-black text-slate-200 mb-4 leading-none">{v.num}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-24 bg-[#eef2f7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="inline-flex items-center gap-2.5 mb-12">
            <span className="w-8 h-px bg-cyan-neon" />
            <span className="text-cyan-neon text-xs font-semibold tracking-[0.3em] uppercase">Proven Expertise</span>
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mb-16">Technical Certifications</h2>
          <div className="space-y-12">
            {certifications.map((group) => (
              <div key={group.group} className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-3">
                  <p className="text-sm font-bold uppercase tracking-widest" style={{ color: group.accent }}>
                    {group.group}
                  </p>
                </div>
                <div className="md:col-span-9 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span key={item}
                      className="px-4 py-2 border border-slate-200 text-gray-600 text-xs font-medium bg-[#f4f7fa] hover:border-cyan-neon/50 hover:text-gray-800 transition-colors cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-24 bg-[#f4f7fa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2.5 mb-6">
                <span className="w-8 h-px bg-cyan-neon" />
                <span className="text-cyan-neon text-xs font-semibold tracking-[0.3em] uppercase">How We Deliver</span>
              </span>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Expert Team Delivers Always</h2>
              <p className="text-gray-600 leading-relaxed">
                We select the right methodology for each project — not the one that is most familiar,
                but the one that gives your project the best chance of success. Our certified PMs
                and project leads have delivered complex programmes under Waterfall, Hybrid, and Agile frameworks.
              </p>
            </div>
            <div className="space-y-0 divide-y divide-slate-200/60">
              {[
                { name: 'Waterfall', badge: 'Sequential', desc: 'For projects with well-defined requirements and low risk of change. Structured phases: Discovery → Design → Build → Test → Deploy.' },
                { name: 'Hybrid',    badge: 'Combined',   desc: 'For complex projects needing both predictability and adaptability. Fixed milestones with agile delivery sprints between them.' },
                { name: 'Agile',     badge: 'Iterative',  desc: 'For evolving projects with changing requirements and fast delivery cycles. Two-week sprints, continuous feedback, rapid iteration.' },
              ].map((m) => (
                <div key={m.name} className="py-8 flex gap-6">
                  <span className="text-slate-300 text-xs font-mono w-5 mt-1 shrink-0">{m.name.charAt(0)}</span>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-gray-800 font-bold">{m.name}</h3>
                      <span className="text-[10px] font-semibold tracking-widest uppercase text-cyan-neon">{m.badge}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f4f7fa] border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Ready to transform your digital estate?
            </h2>
            <p className="text-gray-600 text-sm">Let&apos;s start the conversation.</p>
          </div>
          <Link href="/contact"
            className="shrink-0 bg-cyan-neon text-[#0d1f3c] font-semibold px-8 py-3.5 rounded-xl tracking-wide hover:shadow-[0_0_30px_rgba(1,138,216,0.3)] transition-all duration-200">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
