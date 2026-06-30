import type { Metadata } from 'next'
import ContactForm from './ContactForm'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us | Limesoft System',
  description:
    'Get in touch with Limesoft System. Offices in Nigeria, United Kingdom, Cameroon, and Rwanda.',
}

const offices = [
  { flag: '🇳🇬', country: 'Nigeria', city: 'Lagos', address: 'Plot 1, Remi Olowude St, Lekki Phase 1, Lagos 105102', accent: '#00e5ff' },
  { flag: '🇬🇧', country: 'United Kingdom', city: 'South Yorkshire', address: '46 Leatham Avenue, South Yorkshire S61 1AD', accent: '#a855f7' },
  { flag: '🇨🇲', country: 'Cameroon', city: 'Douala', address: 'Boulevard de la Liberté, Akwa, Douala', accent: '#e879f9' },
  { flag: '🇷🇼', country: 'Rwanda', city: 'Kigali', address: 'KG 7 Ave, Kigali Heights, Kigali', accent: '#00e5ff' },
]

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#09172e]" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-magenta-neon/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <span className="inline-flex items-center gap-2.5 mb-8">
            <span className="w-8 h-px bg-cyan-neon" />
            <span className="text-cyan-neon text-xs font-semibold tracking-[0.3em] uppercase">Get In Touch</span>
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.02] tracking-tight mb-6 max-w-3xl">
            Let&apos;s Start Your Digital Journey
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            Whether you need cybersecurity, infrastructure, a custom application, or an expert second opinion —
            our team is ready to help.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTACT AREA ── */}
      <section className="py-16 bg-[#09172e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">

            {/* Form — 7 cols */}
            <div className="lg:col-span-7">
              <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase mb-8">Send a Message</p>
              <ContactForm />
            </div>

            {/* Info — 5 cols */}
            <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-white/10">
              <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase mb-10">Direct Contact</p>

              <div className="space-y-10">
                <div>
                  <p className="text-white/25 text-xs uppercase tracking-widest mb-2">Email</p>
                  <a
                    href="mailto:info@limesoftsystem.com"
                    className="text-white/70 hover:text-cyan-neon transition-colors text-sm"
                  >
                    info@limesoftsystem.com
                  </a>
                </div>

                <div>
                  <p className="text-white/25 text-xs uppercase tracking-widest mb-2">Phone</p>
                  <a
                    href="tel:+2348146412574"
                    className="text-white/70 hover:text-cyan-neon transition-colors text-sm"
                  >
                    +234 814 641 2574
                  </a>
                </div>

                <div>
                  <p className="text-white/25 text-xs uppercase tracking-widest mb-2">Website</p>
                  <a
                    href="https://www.limesoftsystem.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-cyan-neon transition-colors text-sm"
                  >
                    www.limesoftsystem.com
                  </a>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/25 text-xs uppercase tracking-widest mb-6">Response Time</p>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-neon animate-pulse" />
                    <p className="text-white/50 text-sm">
                      We respond within <span className="text-white">24 hours</span> on business days.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/25 text-xs uppercase tracking-widest mb-6">Offices</p>
                  <div className="space-y-6">
                    {offices.map(({ flag, country, city }) => (
                      <div key={country} className="flex items-start gap-3">
                        <span className="text-base">{flag}</span>
                        <div>
                          <p className="text-white/70 text-sm font-medium">{country}</p>
                          <p className="text-white/30 text-xs">{city}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFICES DETAIL ── flat horizontal ── */}
      <section className="py-20 bg-[#060d1a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-white/25 text-[10px] tracking-[0.4em] uppercase mb-12">Our Locations</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {offices.map(({ flag, country, city, address, accent }) => (
              <div key={country} className="py-8 sm:px-8 first:pl-0 last:pr-0">
                <div className="text-2xl mb-4">{flag}</div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: accent }}>
                  {city}
                </p>
                <p className="text-white font-semibold mb-3">{country}</p>
                <p className="text-white/30 text-xs leading-relaxed">{address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES QUICK LINKS ── */}
      <section className="py-20 bg-[#09172e] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-white/25 text-[10px] tracking-[0.4em] uppercase mb-8">What can we help you with?</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Cybersecurity', href: '/services#cybersecurity', accent: '#00e5ff' },
              { label: 'Infrastructure', href: '/services#infrastructure', accent: '#a855f7' },
              { label: 'Applications', href: '/services#applications', accent: '#e879f9' },
              { label: 'Managed Services', href: '/services#services', accent: '#00e5ff' },
            ].map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="group flex items-center justify-between border border-white/10 px-6 py-5 hover:border-white/25 transition-colors"
              >
                <span className="text-white/60 text-sm font-medium group-hover:text-white transition-colors">
                  {s.label}
                </span>
                <svg
                  className="w-4 h-4 text-white/20 group-hover:text-cyan-neon group-hover:translate-x-1 transition-all"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
