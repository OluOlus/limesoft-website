import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | Limesoft System',
  description:
    'Learn about Limesoft System — cybersecurity and IT solutions firm with offices in Nigeria, UK, Cameroon, and Rwanda.',
}

const certifications = [
  { group: 'Infrastructure', accent: '#00e5ff', items: ['CCNP Enterprise Infrastructure', 'JNCIA — JUNOS, Cloud, Mist AI', 'JNCIS-SP', 'Azure & AWS Certified SA', 'NSE 1–3', 'F5-CA'] },
  { group: 'Cybersecurity', accent: '#a855f7', items: ['CCNP Security', 'ISC2', 'Sophos CSP', 'Sophos Certified Architect', 'NSE 4', 'PCNSA', 'PCNSE'] },
  { group: 'Applications', accent: '#e879f9', items: ['Web & App Development', 'Cisco Certified DevNet Associate'] },
  { group: 'Services', accent: '#94a3b8', items: ['CCNA', 'Sophos Certified Technician', 'PMP', 'ITIL v4', 'PRINCE2'] },
]

const offices = [
  { flag: '🇳🇬', country: 'Nigeria', city: 'Lagos', address: 'Plot 1, Remi Olowude St, Lekki Phase 1, Lagos 105102' },
  { flag: '🇬🇧', country: 'United Kingdom', city: 'South Yorkshire', address: '46 Leatham Avenue, South Yorkshire S61 1AD' },
  { flag: '🇨🇲', country: 'Cameroon', city: 'Douala', address: 'Boulevard de la Liberté, Akwa, Douala' },
  { flag: '🇷🇼', country: 'Rwanda', city: 'Kigali', address: 'KG 7 Ave, Kigali Heights, Kigali' },
]


export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#09172e]" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-neon/5 rounded-full blur-[150px] -translate-y-1/3 translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <span className="inline-flex items-center gap-2.5 mb-8">
            <span className="w-8 h-px bg-cyan-neon" />
            <span className="text-cyan-neon text-xs font-semibold tracking-[0.3em] uppercase">Our Story</span>
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.02] tracking-tight mb-8 max-w-4xl">
            Securing and Transforming the Digital Future
          </h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            Limesoft System delivers cybersecurity, infrastructure, and managed IT services that
            protect critical assets and accelerate digital growth — from Lagos to London.
          </p>
        </div>
      </section>

      {/* ── MISSION / VISION ── full-bleed split ── */}
      <section className="bg-[#09172e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/8">
            <div className="py-16 md:pr-16">
              <p className="text-cyan-neon text-[10px] font-semibold tracking-[0.4em] uppercase mb-6">Our Mission</p>
              <p className="text-white/75 text-lg leading-relaxed">
                To support organisations through their digital transformation journey by delivering
                <span className="text-white font-semibold"> intelligent, cutting-edge, secure, and scalable</span> integrated
                technology solutions — through expert collaboration, relentless innovation, and an unwavering
                commitment to excellence and customer success.
              </p>
            </div>
            <div className="py-16 md:pl-16">
              <p className="text-purple-neon text-[10px] font-semibold tracking-[0.4em] uppercase mb-6">Our Vision</p>
              <p className="text-white/75 text-lg leading-relaxed">
                To become the{' '}
                <span className="text-white font-semibold">No.1 trusted catalyst</span>{' '}
                for intelligent and secure digital transformation — forging excellence in a connected world
                and leading across every territory we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT TEXT — editorial ── */}
      <section className="py-24 bg-[#060d1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <span className="inline-flex items-center gap-2.5 mb-6 lg:sticky lg:top-28">
                <span className="w-8 h-px bg-magenta-neon" />
                <span className="text-magenta-neon text-xs font-semibold tracking-[0.3em] uppercase">Who We Are</span>
              </span>
            </div>
            <div className="lg:col-span-8 space-y-6 text-white/60 leading-relaxed text-lg">
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
                <span className="text-white font-medium">deep technical expertise</span> with{' '}
                <span className="text-white font-medium">strategic thinking</span>. We do not just implement
                technology — we understand your business, design the right architecture, and stay with you
                through every phase of delivery and beyond.
              </p>
              <p>
                We are vendor relationships with Cisco, Palo Alto Networks, HPE, F5, Fortinet, AWS,
                and Microsoft — but we are always vendor-agnostic in our recommendations.
                The right solution for you is the one we recommend, not the one that benefits us.
              </p>
              <blockquote className="border-l-2 border-cyan-neon pl-6 mt-10">
                <p className="text-white text-xl font-medium italic leading-snug">
                  "Securing Africa&apos;s Digital Future."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── horizontal scroll / editorial ── */}
      <section className="py-24 bg-[#09172e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="inline-flex items-center gap-2.5 mb-5">
                <span className="w-8 h-px bg-cyan-neon" />
                <span className="text-cyan-neon text-xs font-semibold tracking-[0.3em] uppercase">Core Values</span>
              </span>
              <h2 className="text-4xl font-bold text-white">Our Foundation</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/8">
            <div className="py-10 md:pr-12">
              <div className="text-6xl font-black text-white/5 mb-4 leading-none">01</div>
              <h3 className="text-xl font-bold text-white mb-4">Innovation &amp; Excellence</h3>
              <p className="text-white/45 leading-relaxed">
                We continually embrace change and explore new ideas — staying at the forefront of technology
                so our clients benefit from the best that the industry has to offer, delivered with precision.
              </p>
            </div>
            <div className="py-10 md:px-12">
              <div className="text-6xl font-black text-white/5 mb-4 leading-none">02</div>
              <h3 className="text-xl font-bold text-white mb-4">Integrity</h3>
              <p className="text-white/45 leading-relaxed">
                We act with Honesty, Transparency, and Accountability in every interaction.
                Our clients trust us with their critical infrastructure — we take that responsibility seriously
                and hold ourselves to the highest ethical standards.
              </p>
            </div>
            <div className="py-10 md:pl-12">
              <div className="text-6xl font-black text-white/5 mb-4 leading-none">03</div>
              <h3 className="text-xl font-bold text-white mb-4">Customer Obsession</h3>
              <p className="text-white/45 leading-relaxed">
                Our customers are the heart of everything we do. We measure our success by theirs —
                from the first scoping call to long-term managed service partnerships and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── flat tag style ── */}
      <section className="py-24 bg-[#09172e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="inline-flex items-center gap-2.5 mb-12">
            <span className="w-8 h-px bg-cyan-neon" />
            <span className="text-cyan-neon text-xs font-semibold tracking-[0.3em] uppercase">Proven Expertise</span>
          </span>
          <h2 className="text-4xl font-bold text-white mb-16">Technical Certifications</h2>

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
                    <span
                      key={item}
                      className="px-4 py-2 border border-white/10 text-white/55 text-xs font-medium hover:border-white/25 hover:text-white/80 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ── */}
      <section className="py-24 bg-[#060d1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2.5 mb-6">
                <span className="w-8 h-px bg-cyan-neon" />
                <span className="text-cyan-neon text-xs font-semibold tracking-[0.3em] uppercase">How We Deliver</span>
              </span>
              <h2 className="text-4xl font-bold text-white mb-6">Our Expert Team Delivers Always</h2>
              <p className="text-white/45 leading-relaxed">
                We select the right methodology for each project — not the one that is most familiar,
                but the one that gives your project the best chance of success. Our certified PMs
                and project leads have delivered complex programmes under Waterfall, Hybrid, and Agile frameworks.
              </p>
            </div>
            <div className="space-y-0 divide-y divide-white/8">
              {[
                { name: 'Waterfall', badge: 'Sequential', desc: 'For projects with well-defined requirements and low risk of change. Structured phases: Discovery → Design → Build → Test → Deploy.' },
                { name: 'Hybrid', badge: 'Combined', desc: 'For complex projects needing both predictability and adaptability. Fixed milestones with agile delivery sprints between them.' },
                { name: 'Agile', badge: 'Iterative', desc: 'For evolving projects with changing requirements and fast delivery cycles. Two-week sprints, continuous feedback, rapid iteration.' },
              ].map((m) => (
                <div key={m.name} className="py-8 flex gap-6">
                  <span className="text-white/15 text-xs font-mono w-5 mt-1 shrink-0">{m.name.charAt(0)}</span>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white font-bold">{m.name}</h3>
                      <span className="text-[10px] font-semibold tracking-widest uppercase text-cyan-neon/60">{m.badge}</span>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFICES ── */}
      <section className="py-24 bg-[#09172e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="inline-flex items-center gap-2.5 mb-12">
            <span className="w-8 h-px bg-purple-neon" />
            <span className="text-purple-neon text-xs font-semibold tracking-[0.3em] uppercase">Global Presence</span>
          </span>
          <h2 className="text-4xl font-bold text-white mb-16">Our Digital Footprint</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/8">
            {offices.map(({ flag, country, city, address }) => (
              <div key={country} className="py-8 sm:px-8 first:pl-0 last:pr-0">
                <div className="text-3xl mb-5">{flag}</div>
                <p className="text-white font-bold mb-1">{country}</p>
                <p className="text-cyan-neon text-xs font-semibold mb-3">{city}</p>
                <p className="text-white/35 text-xs leading-relaxed">{address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#060d1a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to transform your digital estate?
            </h2>
            <p className="text-white/40 text-sm">Let&apos;s start the conversation.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-cyan-neon text-navy-950 font-semibold px-8 py-3.5 rounded-sm tracking-wide hover:bg-white transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
