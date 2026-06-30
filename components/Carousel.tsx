'use client'

import { useRef, useState, useEffect, useCallback } from 'react'

export default function Carousel({
  children,
  theme = 'dark',
  itemWidthClass = 'w-[80%] sm:w-[400px]',
}: {
  children: React.ReactNode[]
  theme?: 'dark' | 'light'
  itemWidthClass?: string
}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const [progress, setProgress] = useState(0)
  const [trackPct, setTrackPct] = useState(100)

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const maxScroll = el.scrollWidth - el.clientWidth
    setCanScrollLeft(el.scrollLeft > 8)
    setCanScrollRight(el.scrollLeft < maxScroll - 8)
    setProgress(maxScroll > 0 ? el.scrollLeft / maxScroll : 0)
    setTrackPct(Math.min(100, (el.clientWidth / el.scrollWidth) * 100))
  }, [])

  useEffect(() => {
    updateScrollState()
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    return () => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [updateScrollState])

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'left' ? -el.clientWidth * 0.85 : el.clientWidth * 0.85, behavior: 'smooth' })
  }

  const isDark = theme === 'dark'

  const btnCls = isDark
    ? 'bg-navy-900/95 border-white/15 text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:border-cyan-neon/60 hover:text-cyan-neon hover:shadow-[0_0_24px_rgba(1,138,216,0.4)]'
    : 'bg-white border-slate-200 text-gray-500 shadow-[0_4px_20px_rgba(15,23,42,0.12)] hover:border-cyan-neon/60 hover:text-cyan-neon hover:shadow-[0_0_24px_rgba(1,138,216,0.25)]'

  const trackCls = isDark ? 'bg-white/10' : 'bg-slate-200/70'

  const maskStyle = {
    WebkitMaskImage: `linear-gradient(to right, transparent, black ${canScrollLeft ? '32px' : '0px'}, black calc(100% - ${canScrollRight ? '32px' : '0px'}), transparent)`,
    maskImage: `linear-gradient(to right, transparent, black ${canScrollLeft ? '32px' : '0px'}, black calc(100% - ${canScrollRight ? '32px' : '0px'}), transparent)`,
  }

  return (
    <div className="relative">
      <div className="relative">
        <div
          ref={scrollRef}
          style={maskStyle}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 -mx-6 px-6 lg:mx-0 lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {children.map((child, i) => (
            <div key={i} className={`snap-start shrink-0 ${itemWidthClass}`}>
              {child}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scroll('left')}
          aria-label="Previous"
          tabIndex={canScrollLeft ? 0 : -1}
          className={`hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full border items-center justify-center backdrop-blur-sm transition-all duration-300 ${btnCls} ${
            canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none -translate-x-1/3'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scroll('right')}
          aria-label="Next"
          tabIndex={canScrollRight ? 0 : -1}
          className={`hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-12 h-12 rounded-full border items-center justify-center backdrop-blur-sm transition-all duration-300 ${btnCls} ${
            canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none translate-x-1/3'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-4 mt-7">
        <div className={`relative flex-1 h-1 rounded-full overflow-hidden ${trackCls}`}>
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-cyan-neon transition-[left] duration-150 ease-out"
            style={{ width: `${trackPct}%`, left: `${progress * (100 - trackPct)}%` }}
          />
        </div>
        <div className="flex sm:hidden gap-2 shrink-0">
          <button
            type="button"
            onClick={() => scroll('left')}
            aria-label="Previous"
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${btnCls} ${
              canScrollLeft ? 'opacity-100' : 'opacity-30 pointer-events-none'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            aria-label="Next"
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${btnCls} ${
              canScrollRight ? 'opacity-100' : 'opacity-30 pointer-events-none'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
