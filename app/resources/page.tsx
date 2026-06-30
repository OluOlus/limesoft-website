import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resources & Insights | Limesoft System',
  description:
    'Expert articles, guides, and insights on cybersecurity, digital transformation, cloud infrastructure, and enterprise IT from the Limesoft System team.',
}

const AUTHORS = {
  adewale: { name: 'Adewale',     role: 'Network Engineer', initials: 'AD', color: '#14b8a6' },
  olu:     { name: 'Olu Oluseki', role: 'Cloud & DevOps',   initials: 'OO', color: '#38bdf8' },
}

const featured = {
  category: 'Cybersecurity',
  readTime: '8 min read',
  date: 'March 2026',
  title: 'Zero Trust Architecture: Why Perimeter Security Is No Longer Enough',
  excerpt:
    'The traditional "castle and moat" approach to network security is obsolete. With hybrid workforces, multi-cloud environments, and increasingly sophisticated threat actors, organisations need a fundamentally different model. Zero Trust — "never trust, always verify" — is not just a buzzword. It is a survival strategy for modern enterprises.',
  href: '/resources/zero-trust-architecture',
  accent: '#14b8a6',
  author: AUTHORS.adewale,
}

const articles = [
  { category: 'Cybersecurity',         readTime: '9 min read', date: 'January 2026',  title: 'Cybersecurity Compliance in 2025–2026: NDPC, GDPR, and What African Businesses Must Know',         excerpt: "With Nigeria's Data Protection Commission actively enforcing the NDPA and UK/EU-based operations subject to GDPR, the compliance landscape is increasingly complex. We break it down into actionable steps — from data mapping and consent management to breach notification obligations and cross-border data transfer rules.",      href: '/resources/cybersecurity-compliance-2026',     accent: '#14b8a6', author: AUTHORS.adewale },
  { category: 'Infrastructure',        readTime: '7 min read', date: 'November 2025', title: 'AI-Ready Infrastructure: Preparing Your Data Centre for the Intelligence Era',                         excerpt: 'As AI workloads demand low-latency compute, high-bandwidth fabric, and intelligent storage, traditional data centre architectures are struggling to keep pace. GPU clusters, NVMe-over-Fabrics, and liquid cooling are no longer niche requirements — they are the new baseline. Here is what you need to build a future-proof foundation.',  href: '/resources/ai-ready-infrastructure',           accent: '#38bdf8', author: AUTHORS.olu },
  { category: 'Digital Transformation',readTime: '7 min read', date: 'August 2025',   title: 'Digital Transformation Roadmap for African Enterprises in 2025',                                       excerpt: "Africa's digital economy is growing faster than any other region. For enterprises across Nigeria, Rwanda, Cameroon, and beyond, digital transformation is no longer optional — it is the competitive frontier. We outline a practical roadmap: from connectivity and cloud adoption to security-first architecture and talent development.",  href: '/resources/africa-digital-transformation-2025',accent: '#38bdf8', author: AUTHORS.olu },
  { category: 'Cloud',                 readTime: '6 min read', date: 'May 2025',      title: 'AWS vs Azure: Choosing the Right Cloud Platform for Your Business',                                     excerpt: 'Both AWS and Microsoft Azure are enterprise-grade cloud platforms — but they serve different strengths. AWS leads in breadth of services and startup ecosystems; Azure excels in hybrid environments and Microsoft-stack integration. Understanding the differences before you migrate can save months of re-architecture and significant cost.', href: '/resources/aws-vs-azure-guide',                accent: '#14b8a6', author: AUTHORS.olu },
  { category: 'Infrastructure',        readTime: '6 min read', date: 'January 2025',  title: 'The Rise of SD-WAN: How Software-Defined Networking Is Transforming the Enterprise Edge',             excerpt: 'Software-Defined WAN is reshaping how enterprises connect branch offices, cloud services, and remote workers. For organisations with distributed operations — particularly those with pan-African or cross-continental presence — SD-WAN delivers the agility, visibility, and cost savings that MPLS-only networks cannot.',                 href: '/resources/sd-wan-enterprise-networking',      accent: '#38bdf8', author: AUTHORS.adewale },
  { category: 'Cybersecurity',         readTime: '7 min read', date: 'October 2024',  title: 'Next-Generation Firewalls Explained: What Makes NGFW Different and Why It Matters',                   excerpt: 'Traditional firewalls filter traffic by port and protocol. Next-Generation Firewalls go further — inspecting application-layer traffic, integrating live threat intelligence feeds, enforcing identity-based policies, and providing SSL/TLS decryption. We compare leading NGFW vendors and explain what to look for in your next procurement.', href: '/resources/ngfw-explained',                    accent: '#14b8a6', author: AUTHORS.adewale },
  { category: 'Applications',          readTime: '5 min read', date: 'July 2024',     title: 'Build vs Buy: A Decision Framework for Enterprise Software in 2024',                                    excerpt: "One of the most consequential technology decisions an organisation makes is whether to build custom software or deploy an off-the-shelf product. Both carry risk — buying locks you into a vendor's roadmap; building demands internal capacity. We share the framework our advisory team uses with clients across Africa and the UK.",        href: '/resources/build-vs-buy-framework',            accent: '#38bdf8', author: AUTHORS.olu },
  { category: 'Managed Services',      readTime: '5 min read', date: 'March 2024',    title: 'The Business Case for Managed IT Services: When to Outsource vs Keep In-House',                       excerpt: 'For growing organisations, the question is not "managed or in-house" — it is "where does each model create the most value?" Cybersecurity operations, network management, and cloud infrastructure management are increasingly specialist domains where managed services deliver better outcomes at lower total cost of ownership.',          href: '/resources/managed-services-business-case',    accent: '#14b8a6', author: AUTHORS.adewale },
  { category: 'Cloud',                 readTime: '8 min read', date: 'October 2023',  title: 'Cloud Migration Best Practices: A Technical Guide for Enterprises Moving Workloads to AWS or Azure',   excerpt: 'Cloud migration is rarely a "lift and shift" exercise. Done well, it is an opportunity to re-architect for scale, resilience, and security. Done poorly, it creates cloud sprawl, unexpected costs, and new attack surfaces. We share the phased migration methodology our infrastructure team applies on every cloud project.',          href: '/resources/cloud-migration-best-practices',    accent: '#38bdf8', author: AUTHORS.olu },
  { category: 'Cybersecurity',         readTime: '6 min read', date: 'June 2023',     title: 'Why Endpoint Security Has Become Your Most Critical Attack Surface',                                     excerpt: "The endpoint — the laptop, the phone, the remote worker's home router — is now the primary battleground in cybersecurity. As remote and hybrid work cements itself as the default, organisations that rely on perimeter-only security are exposing themselves to a new class of threats. EDR, XDR, and zero trust endpoint controls are no longer optional.", href: '/resources/endpoint-security-critical-surface', accent: '#14b8a6', author: AUTHORS.adewale },
]

const catColors: Record<string, string> = {
  Cybersecurity:          'text-teal-600 border-teal-200 bg-teal-50',
  Infrastructure:         'text-sky-600 border-sky-200 bg-sky-50',
  Cloud:                  'text-teal-600 border-teal-200 bg-teal-50',
  Applications:           'text-sky-600 border-sky-200 bg-sky-50',
  'Digital Transformation':'text-sky-600 border-sky-200 bg-sky-50',
  'Managed Services':     'text-teal-600 border-teal-200 bg-teal-50',
}

function CategoryBadge({ cat }: { cat: string }) {
  const cls = catColors[cat] ?? 'text-gray-500 border-slate-200 bg-gray-50'
  return (
    <span className={`inline-flex items-center border rounded-full px-3 py-0.5 text-[10px] font-semibold tracking-widest uppercase ${cls}`}>
      {cat}
    </span>
  )
}

const categories = ['All', 'Cybersecurity', 'Infrastructure', 'Cloud', 'Applications', 'Digital Transformation', 'Managed Services']

const topics = [
  'Cybersecurity', 'Zero Trust', 'NGFW', 'SD-WAN', 'Cloud Migration', 'AWS', 'Azure',
  'AI Infrastructure', 'Compliance', 'NDPA', 'GDPR', 'Managed Services',
  'Digital Transformation', 'Custom Software', 'Endpoint Security', 'Data Centre',
  'DevOps', 'Hybrid Cloud', 'Network Security', 'ITIL', 'Enterprise Architecture',
]

export default function ResourcesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#eef2f7]">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-sky-100/60 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <span className="inline-flex items-center gap-2.5 mb-8">
            <span className="w-8 h-px bg-cyan-neon" />
            <span className="text-cyan-neon text-xs font-semibold tracking-[0.3em] uppercase">Knowledge Hub</span>
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.02] tracking-tight mb-6">
            Resources &amp; Insights
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Expert articles, practical guides, and strategic insights on cybersecurity,
            infrastructure, cloud, and digital transformation — written by the Limesoft team.
          </p>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="pb-8 bg-[#eef2f7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href={featured.href} className="group block">
            <div className="grid lg:grid-cols-2 border border-slate-200 bg-white hover:border-cyan-neon/40 hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
              <div className="p-10 lg:p-14 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <CategoryBadge cat={featured.category} />
                    <span className="text-gray-400 text-xs">{featured.readTime}</span>
                    <span className="text-gray-400 text-xs">{featured.date}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-5 group-hover:text-cyan-neon transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed">{featured.excerpt}</p>
                </div>
                <div className="mt-10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black text-white"
                      style={{ background: `${featured.author.color}25`, border: `1px solid ${featured.author.color}40`, color: featured.author.color }}>
                      {featured.author.initials}
                    </div>
                    <div>
                      <div className="text-gray-700 text-xs font-semibold">{featured.author.name}</div>
                      <div className="text-gray-400 text-[10px]">{featured.author.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-neon text-sm font-semibold group-hover:gap-4 transition-all">
                    Read Article <span>→</span>
                  </div>
                </div>
              </div>
              {/* Visual panel */}
              <div className="bg-gradient-to-br from-teal-50 to-sky-100 min-h-[280px] lg:min-h-0 flex items-center justify-center p-14 relative overflow-hidden">
                <div className="relative text-center">
                  <div className="text-6xl lg:text-7xl font-black text-teal-100 leading-none tracking-tighter mb-3">
                    ZERO<br />TRUST
                  </div>
                  <p className="text-cyan-neon text-xs font-semibold tracking-[0.3em] uppercase">Featured Article</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <div className="bg-white border-b border-slate-200/60 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end gap-8 overflow-x-auto">
            {categories.map((cat, i) => (
              <button key={cat}
                className={`whitespace-nowrap text-[11px] font-semibold tracking-[0.25em] uppercase py-4 border-b-2 transition-all ${
                  i === 0
                    ? 'text-cyan-neon border-cyan-neon'
                    : 'text-gray-400 border-transparent hover:text-gray-600 hover:border-gray-300'
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ALL ARTICLES */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="divide-y divide-slate-200/60">
            {articles.map((a, i) => (
              <Link key={a.href} href={a.href}
                className="group flex flex-col md:flex-row gap-6 md:gap-10 py-10 hover:bg-teal-50/30 -mx-6 px-6 transition-colors">
                <span className="text-gray-200 text-xs font-mono w-7 shrink-0 mt-1.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <CategoryBadge cat={a.category} />
                    <span className="text-gray-400 text-xs">{a.date}</span>
                    <span className="text-gray-400 text-xs">{a.readTime}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-snug mb-3 group-hover:text-cyan-neon transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-5">{a.excerpt}</p>
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-black"
                      style={{ background: `${a.author.color}20`, border: `1px solid ${a.author.color}35`, color: a.author.color }}>
                      {a.author.initials}
                    </div>
                    <span className="text-gray-500 text-xs">{a.author.name}</span>
                    <span className="text-gray-300 text-xs">·</span>
                    <span className="text-gray-400 text-xs">{a.author.role}</span>
                  </div>
                </div>
                <div className="flex md:items-start md:pt-1.5 shrink-0">
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-cyan-neon group-hover:translate-x-1 transition-all duration-200"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TOPICS + NEWSLETTER */}
      <section className="py-24 bg-[#f4f7fa] border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-flex items-center gap-2.5 mb-6">
                <span className="w-8 h-px bg-cyan-neon" />
                <span className="text-cyan-neon text-xs font-semibold tracking-[0.3em] uppercase">Topics</span>
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Expert Insights Across the Full Technology Stack
              </h2>
              <p className="text-gray-500 leading-relaxed mb-10">
                Our certified engineers and consultants write from real-world experience on deployments
                across Africa, the UK, and beyond. Every article is grounded in projects we have actually delivered.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {topics.map((tag) => (
                  <span key={tag}
                    className="px-3.5 py-1.5 border border-slate-200 text-gray-400 text-xs bg-white cursor-default hover:border-cyan-neon/40 hover:text-teal-600 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-gray-900 font-bold text-xl mb-2">Stay Informed</h3>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                Get the latest cybersecurity and technology insights delivered to your inbox.
                Expert content only — published when it matters, never spammed.
              </p>
              <form className="space-y-4" action="mailto:info@limesoftsystem.com" method="POST" encType="text/plain">
                <input type="text" name="name" placeholder="Your name"
                  className="w-full bg-white border-b border-slate-200 pb-3 text-gray-900 placeholder-gray-300 text-sm focus:outline-none focus:border-cyan-neon transition-colors" />
                <input type="email" name="email" placeholder="your@email.com"
                  className="w-full bg-white border-b border-slate-200 pb-3 text-gray-900 placeholder-gray-300 text-sm focus:outline-none focus:border-cyan-neon transition-colors" />
                <div className="pt-4">
                  <button type="submit"
                    className="group inline-flex items-center gap-4 text-cyan-neon font-semibold text-sm tracking-wide hover:gap-6 transition-all">
                    Subscribe to Insights
                    <span className="w-10 h-px bg-cyan-neon group-hover:w-16 transition-all duration-300" />
                  </button>
                </div>
              </form>
              <p className="text-gray-300 text-xs mt-6">Unsubscribe at any time. No spam — ever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
              Ready to put these insights into action?
            </h2>
            <p className="text-gray-400 text-sm">
              Talk to our team about how these solutions apply to your organisation.
            </p>
          </div>
          <Link href="/contact"
            className="shrink-0 bg-cyan-neon text-[#0d1f3c] font-semibold px-8 py-3.5 rounded-xl text-sm tracking-wide hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] transition-all duration-200">
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
