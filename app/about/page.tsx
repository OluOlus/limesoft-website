import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | Limesoft System',
  description:
    'Limesoft System — cybersecurity, infrastructure, and managed IT services across Nigeria, UK, Cameroon, and Rwanda. Founded 2020.',
}

const coreValues = [
  {
    num: '01',
    title: 'Innovation & Excellence',
    desc: 'We continually embrace change and explore new ideas — staying at the forefront of technology so our clients benefit from the best the industry has to offer, delivered with precision.',
  },
  {
    num: '02',
    title: 'Integrity',
    desc: 'Honesty, transparency, and accountability in every interaction. Our clients trust us with their critical infrastructure — we take that responsibility seriously and hold ourselves to the highest ethical standards.',
  },
  {
    num: '03',
    title: 'Customer Obsession',
    desc: 'Our customers are the heart of everything we do. We measure our success by theirs — from the first scoping call to long-term managed service partnerships and beyond.',
  },
]

const certifications = [
  {
    group: 'Infrastructure',
    accent: '#018ad8',
    items: ['CCNP Enterprise Infrastructure', 'JNCIA — JUNOS, Cloud, Mist AI', 'JNCIS-SP', 'Azure & AWS Certified SA', 'NSE 1–3', 'F5-CA'],
  },
  {
    group: 'Cybersecurity',
    accent: '#232a85',
    items: ['CCNP Security', 'ISC2', 'Sophos CSP', 'Sophos Certified Architect', 'NSE 4', 'PCNSA', 'PCNSE'],
  },
  {
    group: 'Applications',
    accent: '#38bdf8',
    items: ['Web & App Development', 'Cisco Certified DevNet Associate'],
  },
  {
    group: 'Service Management',
    accent: '#64748b',
    items: ['CCNA', 'Sophos Certified Technician', 'PMP', 'ITIL v4', 'PRINCE2'],
  },
]

const stats = [
  { value: '2020', label: 'Founded' },
  { value: '4',    label: 'Countries' },
  { value: '20+',  label: 'Certifications' },
  { value: '100%', label: 'Vendor-Agnostic' },
]

const methodologies = [
  {
    name: 'Waterfall',
    badge: 'Sequential',
    accent: '#018ad8',
    desc: 'For projects with well-defined requirements and low risk of change. Structured phases from Discovery through to Deployment.',
  },
  {
    name: 'Hybrid',
    badge: 'Combined',
    accent: '#232a85',
    desc: 'Fixed strategic milestones combined with agile delivery sprints — predictability and adaptability working together.',
  },
  {
    name: 'Agile',
    badge: 'Iterative',
    accent: '#38bdf8',
    desc: 'Two-week sprints, continuous feedback, and rapid iteration for evolving projects with changing requirements.',
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* ─── HERO — dark ─── */}
      <section className="relative min-h-[70vh] flex flex-col justify-end pb-20 overflow-hidden bg-[#07111e]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#018ad8] opacity-[0.06] blur-[160px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full bg-[#232a85] opacity-[0.08] blur-[140px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-40">
          <span className="inline-flex items-center gap-2.5 mb-10">
            <span className="w-8 h-px bg-cyan-neon" />
            <span className="text-cyan-neon text-xs font-semibold tracking-[0.35em] uppercase">Our Story</span>
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-14 max-w-5xl">
            Built to Secure.<br />
            <span className="text-cyan-neon">Designed to Scale.</span>
          </h1>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-[#07111e] px-8 py-7">
                <p className="text-3xl font-black text-white mb-1">{value}</p>
                <p className="text-white/40 text-xs tracking-widest uppercase">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO WE ARE ─── */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="text-cyan-neon text-[10px] font-bold tracking-[0.4em] uppercase mb-6">Who We Are</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                We bridge the gap between ambition and secure technology.
              </h2>
              <blockquote className="border-l-4 border-cyan-neon pl-6 py-2">
                <p className="text-gray-800 text-xl font-medium italic leading-snug">
                  &ldquo;Securing Africa&rsquo;s Digital Future.&rdquo;
                </p>
              </blockquote>
            </div>
            <div className="lg:col-span-7 space-y-6 text-gray-600 leading-relaxed text-lg pt-2">
              <p>
                Founded in 2020, Limesoft System emerged from a clear need: organisations across Africa
                and beyond were adopting technology faster than they could secure and integrate it.
                We were built to bridge that gap.
              </p>
              <p>
                Today, we operate across four countries — <span className="text-gray-900 font-semibold">Nigeria, the United Kingdom, Cameroon, and Rwanda</span> —
                with a team of certified engineers and consultants delivering solutions for enterprises,
                studios, and growing businesses alike.
              </p>
              <p>
                Our approach combines <span className="text-gray-900 font-semibold">deep technical expertise</span> with{' '}
                <span className="text-gray-900 font-semibold">strategic thinking</span>. We do not just implement
                technology — we understand your business, design the right architecture, and stay with you
                through every phase of delivery and beyond.
              </p>
              <p>
                We hold vendor relationships with Cisco, Palo Alto Networks, HPE, F5, Fortinet, AWS, and Microsoft —
                but we are always vendor-agnostic in our recommendations. The right solution for you is the one
                we recommend, not the one that benefits us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION / VISION ─── */}
      <section className="bg-[#07111e] py-28 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-[#018ad8] opacity-[0.05] blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-px bg-white/10">
            <div className="bg-[#07111e] p-12 md:p-16">
              <span className="inline-block w-8 h-1 bg-cyan-neon rounded-full mb-8" />
              <p className="text-cyan-neon text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Our Mission</p>
              <p className="text-white/80 text-xl leading-relaxed">
                To support organisations through their digital transformation journey by delivering{' '}
                <span className="text-white font-semibold">intelligent, cutting-edge, secure, and scalable</span>{' '}
                integrated technology solutions — through expert collaboration, relentless innovation, and
                an unwavering commitment to excellence.
              </p>
            </div>
            <div className="bg-[#07111e] p-12 md:p-16">
              <span className="inline-block w-8 h-1 bg-[#232a85] rounded-full mb-8" />
              <p className="text-[#38bdf8] text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Our Vision</p>
              <p className="text-white/80 text-xl leading-relaxed">
                To become the{' '}
                <span className="text-white font-semibold">No.1 trusted catalyst</span>{' '}
                for intelligent and secure digital transformation — forging excellence in a connected world
                and leading across every territory we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ─── */}
      <section className="bg-[#f4f7fa] py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-cyan-neon text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Core Values</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-20">Our Foundation</h2>
          <div className="space-y-0 divide-y divide-slate-200/80">
            {coreValues.map((v, i) => (
              <div key={v.num} className={`grid md:grid-cols-12 gap-8 py-12 group ${i === 0 ? 'border-t border-slate-200/80' : ''}`}>
                <div className="md:col-span-1">
                  <span className="text-5xl font-black text-slate-200 group-hover:text-cyan-neon/30 transition-colors duration-500">
                    {v.num}
                  </span>
                </div>
                <div className="md:col-span-4 flex items-start pt-2">
                  <h3 className="text-xl font-bold text-gray-900">{v.title}</h3>
                </div>
                <div className="md:col-span-7 flex items-start pt-2">
                  <p className="text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-cyan-neon text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Proven Expertise</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-20">Technical Certifications</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {certifications.map((group) => (
              <div key={group.group} className="rounded-2xl border border-slate-100 bg-[#f8fafc] p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: group.accent }} />
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-900">{group.group}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 text-gray-600 text-xs font-medium bg-white hover:border-cyan-neon/50 hover:text-gray-900 transition-colors cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── METHODOLOGY ─── */}
      <section className="bg-[#07111e] py-28 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-[#018ad8] opacity-[0.05] blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-cyan-neon text-[10px] font-bold tracking-[0.4em] uppercase mb-4">How We Deliver</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Methodology That Fits the Job</h2>
          <p className="text-white/50 text-lg max-w-2xl mb-16">
            We select the right delivery framework for each project — not the most familiar one,
            but the one that gives your initiative the best chance of success.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {methodologies.map((m) => (
              <div key={m.name} className="rounded-2xl bg-white/5 border border-white/10 p-8 hover:bg-white/8 hover:border-white/20 transition-colors duration-300">
                <div className="h-1 w-10 rounded-full mb-8" style={{ backgroundColor: m.accent }} />
                <p className="text-[10px] font-bold tracking-[0.4em] uppercase mb-3" style={{ color: m.accent }}>
                  {m.badge}
                </p>
                <h3 className="text-xl font-bold text-white mb-4">{m.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#eef2f7] py-24 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Ready to work with us?
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto mb-10">
            Let&apos;s start the conversation — no commitment, just an honest discussion about your technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="bg-cyan-neon text-[#07111e] font-bold px-10 py-4 rounded-xl text-sm tracking-wide hover:shadow-[0_0_40px_rgba(1,138,216,0.35)] transition-all duration-300">
              Get in Touch
            </Link>
            <Link href="/services"
              className="border border-slate-300 text-gray-700 font-semibold px-10 py-4 rounded-xl text-sm tracking-wide hover:border-cyan-neon/50 hover:text-gray-900 transition-colors duration-300">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
