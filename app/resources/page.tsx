'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'

const AUTHORS = {
  adewale: { name: 'Adewale',     role: 'Network Engineer',  initials: 'AD', color: '#018ad8' },
  olu:     { name: 'Olu Oluseki', role: 'Cloud & DevOps',    initials: 'OO', color: '#38bdf8' },
}

const featured = {
  category: 'Cybersecurity',
  readTime: '8 min read',
  date: 'March 2026',
  title: 'Zero Trust Architecture: Why Perimeter Security Is No Longer Enough',
  excerpt:
    'The traditional "castle and moat" approach to network security is obsolete. With hybrid workforces, multi-cloud environments, and increasingly sophisticated threat actors, organisations need a fundamentally different model.',
  href: '/resources/zero-trust-architecture',
  author: AUTHORS.adewale,
}

type Article = {
  category: string
  readTime: string
  date: string
  title: string
  excerpt: string
  href: string
  author: typeof AUTHORS.adewale
}

const articles: Article[] = [
  { category: 'Cybersecurity',          readTime: '9 min', date: 'Jan 2026',  title: 'Cybersecurity Compliance in 2025–2026: NDPC, GDPR, and What African Businesses Must Know',        excerpt: "With Nigeria's Data Protection Commission actively enforcing the NDPA and UK/EU-based operations subject to GDPR, the compliance landscape is increasingly complex. We break it down into actionable steps.",      href: '/resources/cybersecurity-compliance-2026',      author: AUTHORS.adewale },
  { category: 'Infrastructure',         readTime: '7 min', date: 'Nov 2025',  title: 'AI-Ready Infrastructure: Preparing Your Data Centre for the Intelligence Era',                        excerpt: 'GPU clusters, NVMe-over-Fabrics, and liquid cooling are no longer niche requirements — they are the new baseline. Here is what you need to build a future-proof foundation.',  href: '/resources/ai-ready-infrastructure',            author: AUTHORS.olu },
  { category: 'Digital Transformation', readTime: '7 min', date: 'Aug 2025',  title: 'Digital Transformation Roadmap for African Enterprises in 2025',                                      excerpt: "Africa's digital economy is growing faster than any other region. For enterprises across Nigeria, Rwanda, and Cameroon, digital transformation is no longer optional — it is the competitive frontier.",  href: '/resources/africa-digital-transformation-2025', author: AUTHORS.olu },
  { category: 'Cloud',                  readTime: '6 min', date: 'May 2025',  title: 'AWS vs Azure: Choosing the Right Cloud Platform for Your Business',                                    excerpt: 'AWS leads in breadth of services and startup ecosystems; Azure excels in hybrid environments and Microsoft-stack integration. Understanding the differences before you migrate matters.',  href: '/resources/aws-vs-azure-guide',                 author: AUTHORS.olu },
  { category: 'Infrastructure',         readTime: '6 min', date: 'Jan 2025',  title: 'The Rise of SD-WAN: How Software-Defined Networking Is Transforming the Enterprise Edge',             excerpt: 'SD-WAN delivers the agility, visibility, and cost savings that MPLS-only networks cannot — especially for organisations with pan-African or cross-continental presence.',        href: '/resources/sd-wan-enterprise-networking',       author: AUTHORS.adewale },
  { category: 'Cybersecurity',          readTime: '7 min', date: 'Oct 2024',  title: 'Next-Generation Firewalls Explained: What Makes NGFW Different and Why It Matters',                   excerpt: 'Next-Generation Firewalls inspect application-layer traffic, integrate live threat intelligence, enforce identity-based policies, and provide SSL/TLS decryption.',             href: '/resources/ngfw-explained',                     author: AUTHORS.adewale },
  { category: 'Applications',           readTime: '5 min', date: 'Jul 2024',  title: 'Build vs Buy: A Decision Framework for Enterprise Software in 2024',                                   excerpt: 'Buying locks you into a vendor\'s roadmap; building demands internal capacity. We share the framework our advisory team uses with clients across Africa and the UK.',         href: '/resources/build-vs-buy-framework',             author: AUTHORS.olu },
  { category: 'Managed Services',       readTime: '5 min', date: 'Mar 2024',  title: 'The Business Case for Managed IT Services: When to Outsource vs Keep In-House',                       excerpt: 'Cybersecurity operations, network management, and cloud infrastructure are increasingly specialist domains where managed services deliver better outcomes at lower TCO.',        href: '/resources/managed-services-business-case',     author: AUTHORS.adewale },
  { category: 'Cloud',                  readTime: '8 min', date: 'Oct 2023',  title: 'Cloud Migration Best Practices: A Technical Guide for Moving Workloads to AWS or Azure',              excerpt: 'Done well, migration is an opportunity to re-architect for scale, resilience, and security. Done poorly, it creates cloud sprawl, unexpected costs, and new attack surfaces.',  href: '/resources/cloud-migration-best-practices',     author: AUTHORS.olu },
  { category: 'Cybersecurity',          readTime: '6 min', date: 'Jun 2023',  title: 'Why Endpoint Security Has Become Your Most Critical Attack Surface',                                    excerpt: "As remote and hybrid work cements itself as the default, organisations that rely on perimeter-only security are exposing themselves to a new class of threats.",               href: '/resources/endpoint-security-critical-surface', author: AUTHORS.adewale },
]

const CATS = ['All', 'Cybersecurity', 'Infrastructure', 'Cloud', 'Applications', 'Digital Transformation', 'Managed Services']

const catAccent: Record<string, string> = {
  Cybersecurity:          '#018ad8',
  Infrastructure:         '#38bdf8',
  Cloud:                  '#018ad8',
  Applications:           '#38bdf8',
  'Digital Transformation':'#018ad8',
  'Managed Services':     '#38bdf8',
}

function AuthorBadge({ author }: { author: typeof AUTHORS.adewale }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-black shrink-0"
        style={{ background: `${author.color}25`, border: `1px solid ${author.color}40`, color: author.color }}>
        {author.initials}
      </div>
      <span className="text-white/50 text-xs">{author.name}</span>
    </div>
  )
}

const latestTwo = articles.slice(0, 2)

export default function ResourcesPage() {
  const [activeCat, setActiveCat] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchCat = activeCat === 'All' || a.category === activeCat
      const q = query.toLowerCase()
      const matchQuery = !q || a.title.toLowerCase().includes(q) || a.category.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)
      return matchCat && matchQuery
    })
  }, [activeCat, query])

  return (
    <div className="bg-[#07111e] text-white min-h-screen">

      {/* ─── HERO ─── */}
      <section className="relative pt-28 pb-16 border-b border-white/8 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-cyan-neon/5 blur-[160px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] uppercase text-white/30 mb-10">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">Insights</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-3">
            Limesoft Insights
          </h1>
          <p className="text-white/45 text-base max-w-xl mb-14">
            Expert articles and practical guidance on cybersecurity, infrastructure, cloud, and digital transformation — written by our team.
          </p>

          {/* Hero split: latest list + featured card */}
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12">

            {/* Left — Latest news list */}
            <div>
              <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/30 mb-6">Latest</p>
              <div className="flex flex-col divide-y divide-white/8">
                {latestTwo.map((a) => (
                  <Link key={a.href} href={a.href} className="group py-5 flex flex-col gap-2 hover:opacity-80 transition-opacity">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: catAccent[a.category] ?? '#018ad8' }}>
                        {a.category}
                      </span>
                      <span className="text-white/25 text-[11px]">/</span>
                      <span className="text-white/30 text-[11px]">{a.date}</span>
                    </div>
                    <p className="text-white/85 text-[15px] font-semibold leading-snug group-hover:text-white transition-colors line-clamp-2">
                      {a.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right — Featured article */}
            <Link href={featured.href} className="group block relative overflow-hidden border border-white/10 rounded-2xl bg-[#0d1f3c] hover:border-cyan-neon/30 hover:bg-[#0f2448] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-neon/5 to-transparent pointer-events-none" />
              <div className="relative p-8 lg:p-10 h-full flex flex-col justify-between min-h-[280px]">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: catAccent[featured.category] }}>
                      {featured.category}
                    </span>
                    <span className="text-white/25 text-[11px]">/</span>
                    <span className="text-white/35 text-[11px]">{featured.date}</span>
                    <span className="text-white/25 text-[11px]">/</span>
                    <span className="text-white/35 text-[11px]">{featured.readTime}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white leading-snug mb-4 group-hover:text-cyan-neon transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed line-clamp-3">{featured.excerpt}</p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <AuthorBadge author={featured.author} />
                  <div className="flex items-center gap-1.5 text-cyan-neon text-[13px] font-semibold group-hover:gap-3 transition-all duration-200">
                    Read article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FILTERS + SEARCH ─── */}
      <div className="sticky top-[68px] z-40 bg-[#07111e]/95 backdrop-blur-md border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Category pills */}
          <div className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden shrink-0">
            {CATS.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`shrink-0 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase transition-all duration-200 ${
                  activeCat === cat
                    ? 'bg-cyan-neon text-white'
                    : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative sm:ml-auto w-full sm:w-56">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search articles…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-[13px] text-white placeholder-white/25 focus:outline-none focus:border-cyan-neon/50 focus:bg-white/8 transition-all"
            />
          </div>
        </div>
      </div>

      {/* ─── ARTICLES GRID ─── */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="text-white/30 text-sm">No articles match your search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((a) => {
                const accent = catAccent[a.category] ?? '#018ad8'
                return (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="group flex flex-col border border-white/8 rounded-xl overflow-hidden bg-[#0d1f3c]/50 hover:border-white/20 hover:bg-[#0d1f3c] transition-all duration-300"
                  >
                    {/* Accent top bar */}
                    <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />

                    <div className="p-6 flex flex-col flex-1">
                      {/* Meta */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: accent }}>
                          {a.category}
                        </span>
                        <span className="text-white/20 text-[11px]">/</span>
                        <span className="text-white/30 text-[11px]">{a.date}</span>
                        <span className="text-white/20 text-[11px]">/</span>
                        <span className="text-white/30 text-[11px]">{a.readTime}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-white/90 text-[15px] font-bold leading-snug mb-3 group-hover:text-white transition-colors flex-1 line-clamp-3">
                        {a.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-white/40 text-xs leading-relaxed line-clamp-2 mb-5">
                        {a.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/8">
                        <AuthorBadge author={a.author} />
                        <svg className="w-4 h-4 text-white/20 group-hover:text-cyan-neon group-hover:translate-x-1 transition-all duration-200"
                          fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* ─── NEWSLETTER + CTA ─── */}
      <section className="py-20 border-t border-white/8 mt-8">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-start gap-16">
          {/* Newsletter */}
          <div className="flex-1">
            <p className="text-cyan-neon text-[11px] font-bold tracking-[0.3em] uppercase mb-3">Stay Informed</p>
            <h2 className="text-2xl font-bold text-white mb-2">Get Insights in Your Inbox</h2>
            <p className="text-white/40 text-sm leading-relaxed mb-7">
              Expert content only — published when it matters, never spammed.
            </p>
            <form className="space-y-4" action="mailto:info@limesoftsystem.com" method="POST" encType="text/plain">
              <input type="text" name="name" placeholder="Your name"
                className="w-full bg-transparent border-b border-white/15 pb-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyan-neon/60 transition-colors" />
              <input type="email" name="email" placeholder="your@email.com"
                className="w-full bg-transparent border-b border-white/15 pb-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyan-neon/60 transition-colors" />
              <div className="pt-3">
                <button type="submit"
                  className="group inline-flex items-center gap-4 text-cyan-neon font-semibold text-sm tracking-wide hover:gap-6 transition-all duration-300">
                  Subscribe
                  <span className="w-10 h-px bg-cyan-neon group-hover:w-16 transition-all duration-300" />
                </button>
              </div>
            </form>
          </div>

          {/* CTA */}
          <div className="flex-1 border border-white/10 rounded-2xl p-8 bg-[#0d1f3c]/50">
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-cyan-neon mb-3">Ready to act?</p>
            <h3 className="text-xl font-bold text-white mb-3">Put These Insights to Work</h3>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Talk to our team about how these solutions apply to your specific environment.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-cyan-neon text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#0179c0] transition-colors duration-200"
            >
              Start the Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
