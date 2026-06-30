import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getArticleBySlug, allArticles } from '@/lib/articles'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return allArticles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  return {
    title: `${article.title} | Limesoft System`,
    description: article.excerpt,
  }
}

const catColors: Record<string, string> = {
  Cybersecurity:           '#018ad8',
  Infrastructure:          '#38bdf8',
  Cloud:                   '#018ad8',
  Applications:            '#38bdf8',
  'Digital Transformation':'#018ad8',
  'Managed Services':      '#38bdf8',
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const accent = catColors[article.category] ?? '#018ad8'
  const others = allArticles.filter((a) => a.slug !== article.slug).slice(0, 3)

  return (
    <div className="bg-[#07111e] min-h-screen">

      {/* ── HEADER BAND ── */}
      <div className="relative pt-[68px] overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #060d1a 0%, #07111e 100%)' }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accent}55, transparent)` }} />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 pt-14 pb-16">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-white/20 mb-10">
            <Link href="/" className="hover:text-white/50 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-white/50 transition-colors">Resources</Link>
            <span>/</span>
            <span style={{ color: accent }}>{article.category}</span>
          </nav>

          {/* Category pill */}
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border"
            style={{ borderColor: `${accent}40`, background: `${accent}12` }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase" style={{ color: accent }}>
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-[2.6rem] font-black text-white leading-[1.12] tracking-tight mb-6">
            {article.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-white/8">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black shrink-0"
                style={{ background: `${article.author.color}25`, border: `1.5px solid ${article.author.color}50`, color: article.author.color }}>
                {article.author.initials}
              </div>
              <div>
                <p className="text-white/70 text-sm font-semibold leading-none">{article.author.name}</p>
                <p className="text-white/30 text-[11px] mt-0.5">{article.author.role}</p>
              </div>
            </div>
            <div className="h-4 w-px bg-white/10 hidden sm:block" />
            <span className="text-white/30 text-sm">{article.date}</span>
            <div className="h-4 w-px bg-white/10 hidden sm:block" />
            <span className="text-white/30 text-sm">{article.readTime}</span>
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 pb-24">

        {/* Excerpt / lead */}
        <p className="text-white/55 text-lg leading-[1.75] mb-14 border-l-2 pl-6"
          style={{ borderColor: accent }}>
          {article.excerpt}
        </p>

        {/* Sections */}
        <div className="space-y-14">
          {article.body.map((section, i) => (
            <div key={i}>
              <div className="flex items-start gap-4 mb-5">
                <span className="text-[11px] font-bold tabular-nums mt-0.5 shrink-0" style={{ color: `${accent}70` }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug">{section.heading}</h2>
              </div>
              <div className="pl-8 space-y-5">
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-white/50 leading-[1.8] text-[15px]">{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-16 flex items-center gap-4">
          <div className="flex-1 h-px bg-white/8" />
          <div className="w-2 h-2 rounded-full" style={{ background: accent }} />
          <div className="flex-1 h-px bg-white/8" />
        </div>

        {/* CTA block */}
        <div className="rounded-2xl border border-white/10 bg-white/3 p-8 md:p-10">
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase mb-3" style={{ color: accent }}>
            Work with Limesoft
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
            Need help applying these insights to your organisation?
          </h3>
          <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-lg">
            Our certified engineers have delivered projects across Africa and the UK. Let&apos;s talk about your specific situation.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact"
              className="inline-flex items-center gap-2 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors duration-200"
              style={{ background: accent }}>
              Get in Touch
            </Link>
            <Link href="/resources"
              className="inline-flex items-center gap-2 border border-white/15 text-white/60 font-semibold text-sm px-5 py-2.5 rounded-lg hover:border-white/30 hover:text-white transition-all duration-200">
              ← All Articles
            </Link>
          </div>
        </div>
      </div>

      {/* ── MORE ARTICLES ── */}
      <section className="border-t border-white/8 bg-[#060d1a] py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-white/25 text-[10px] font-bold tracking-[0.3em] uppercase mb-8">More from Limesoft</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {others.map((a) => {
              const ac = catColors[a.category] ?? '#018ad8'
              return (
                <Link key={a.slug} href={a.href}
                  className="group flex flex-col gap-3 p-5 rounded-xl border border-white/8 bg-white/2 hover:border-white/20 hover:bg-white/5 transition-all duration-200">
                  <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: ac }}>
                    {a.category}
                  </span>
                  <h4 className="text-white/70 text-sm font-semibold leading-snug group-hover:text-white transition-colors line-clamp-3">
                    {a.title}
                  </h4>
                  <span className="text-white/25 text-[11px] mt-auto">{a.date}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
