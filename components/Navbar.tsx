'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

const services = [
  { href: '/services/managed-security', label: 'Managed Security' },
  { href: '/services/infrastructure',   label: 'Infrastructure' },
  { href: '/services/applications',     label: 'Applications' },
  { href: '/services/managed-services', label: 'Managed Services' },
]

function ChatIcon({ className = 'w-[18px] h-[18px]' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#chat-clip)">
        <path
          d="M18.5 12V18H12.5C11.4478 17.9989 10.4144 17.7212 9.50349 17.1946C8.59255 16.6681 7.83609 15.9112 7.31 15C7.8754 14.996 8.43888 14.9336 8.9915 14.814C9.41236 15.3402 9.94625 15.765 10.5536 16.0569C11.1609 16.3487 11.8262 16.5002 12.5 16.5H17V12C16.9998 11.3259 16.8479 10.6605 16.5555 10.0532C16.2631 9.44582 15.8378 8.91206 15.311 8.4915C15.4316 7.93899 15.495 7.37551 15.5 6.81C16.4112 7.33609 17.1681 8.09255 17.6946 9.00349C18.2212 9.91443 18.4989 10.9478 18.5 12ZM14 6.75C14 4.95979 13.2888 3.2429 12.023 1.97703C10.7571 0.711159 9.04021 0 7.25 0C5.45979 0 3.7429 0.711159 2.47703 1.97703C1.21116 3.2429 0.5 4.95979 0.5 6.75L0.5 13.5H7.25C9.0396 13.498 10.7553 12.7862 12.0208 11.5208C13.2862 10.2553 13.998 8.5396 14 6.75ZM2 6.75C2 5.71165 2.30791 4.69661 2.88478 3.83326C3.46166 2.9699 4.2816 2.29699 5.24091 1.89963C6.20022 1.50227 7.25582 1.3983 8.27422 1.60088C9.29262 1.80345 10.2281 2.30346 10.9623 3.03769C11.6965 3.77191 12.1966 4.70738 12.3991 5.72578C12.6017 6.74418 12.4977 7.79978 12.1004 8.75909C11.703 9.7184 11.0301 10.5383 10.1667 11.1152C9.30339 11.6921 8.28835 12 7.25 12H2V6.75Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="chat-clip">
          <rect width="18" height="18" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  )
}

function ChevronDown() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isServices = pathname === '/services' || pathname.startsWith('/services')

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#07111e]/97 backdrop-blur-xl border-b border-white/8 shadow-[0_4px_32px_rgba(0,0,0,0.5)]'
            : 'bg-[#07111e]/85 backdrop-blur-md'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-[68px] flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" aria-label="Limesoft System home" className="shrink-0">
            <Logo height={38} />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center h-full">

            {/* Home */}
            <Link
              href="/"
              className={`px-4 h-full flex items-center text-sm font-medium tracking-wide transition-colors duration-200 ${
                pathname === '/' ? 'text-cyan-neon' : 'text-white/60 hover:text-white'
              }`}
            >
              Home
            </Link>

            <div className="w-px h-4 bg-white/12 mx-0.5" />

            {/* Services dropdown */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 px-4 h-full text-sm font-medium tracking-wide transition-colors duration-200 select-none ${
                  isServices ? 'text-cyan-neon' : 'text-white/60 hover:text-white'
                }`}
              >
                Services
                <span className={`opacity-60 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}>
                  <ChevronDown />
                </span>
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 w-52 bg-[#0d1f3c] border border-white/10 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition-all duration-200 ${
                  servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="p-2">
                  <p className="px-3 pt-2 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/30">
                    Our Services
                  </p>
                  {services.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-3 py-2.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/6 transition-colors duration-150"
                      onClick={() => setServicesOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-px h-4 bg-white/12 mx-0.5" />

            <Link
              href="/about"
              className={`px-4 h-full flex items-center text-sm font-medium tracking-wide transition-colors duration-200 ${
                pathname === '/about' ? 'text-cyan-neon' : 'text-white/60 hover:text-white'
              }`}
            >
              About
            </Link>

            <div className="w-px h-4 bg-white/12 mx-0.5" />

            <Link
              href="/resources"
              className={`px-4 h-full flex items-center text-sm font-medium tracking-wide transition-colors duration-200 ${
                pathname === '/resources' || pathname.startsWith('/resources/') ? 'text-cyan-neon' : 'text-white/60 hover:text-white'
              }`}
            >
              Resources
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-2 text-[13px] font-semibold text-white bg-cyan-neon px-4 py-2 rounded-lg tracking-wide hover:bg-[#0179c0] active:bg-[#016aad] transition-colors duration-200 shrink-0"
            >
              <ChatIcon />
              GET IN TOUCH
            </Link>

            {/* Burger */}
            <button
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={`block h-[1.5px] w-5 bg-white transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block h-[1.5px] w-5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-[1.5px] w-5 bg-white transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay — outside header so it can cover full viewport */}
      <div
        className={`lg:hidden fixed inset-0 top-[68px] z-40 bg-[#07111e]/98 backdrop-blur-xl overflow-y-auto transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 flex flex-col">

          <Link
            href="/"
            className={`py-4 text-base font-medium border-b border-white/8 transition-colors ${pathname === '/' ? 'text-cyan-neon' : 'text-white/80'}`}
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          {/* Services accordion */}
          <button
            className="flex items-center justify-between w-full py-4 text-base font-medium border-b border-white/8 text-white/80 text-left"
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
          >
            Services
            <span className={`opacity-50 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}>
              <ChevronDown />
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-64' : 'max-h-0'}`}
          >
            <div className="pl-4 py-2 flex flex-col border-b border-white/8">
              {services.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="py-2.5 text-sm text-white/55 hover:text-cyan-neon transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/about"
            className={`py-4 text-base font-medium border-b border-white/8 transition-colors ${pathname === '/about' ? 'text-cyan-neon' : 'text-white/80'}`}
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>

          <Link
            href="/resources"
            className={`py-4 text-base font-medium border-b border-white/8 transition-colors ${pathname === '/resources' ? 'text-cyan-neon' : 'text-white/80'}`}
            onClick={() => setMobileOpen(false)}
          >
            Resources
          </Link>

          <Link
            href="/contact"
            className="mt-8 flex items-center justify-center gap-2.5 bg-cyan-neon text-white font-semibold text-sm py-3.5 rounded-xl tracking-wide"
            onClick={() => setMobileOpen(false)}
          >
            <ChatIcon />
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </>
  )
}
