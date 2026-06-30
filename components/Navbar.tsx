'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isLightPage =
    pathname === '/about' || pathname.startsWith('/about/') ||
    pathname === '/services' || pathname.startsWith('/services/') ||
    pathname === '/resources' || pathname.startsWith('/resources/')

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isLightPage
          ? 'bg-navy-950/95 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_32px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" aria-label="Limesoft System home">
          <Logo height={40} className="transition-transform group-hover:scale-105" />
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative text-sm font-medium tracking-wide transition-colors duration-200 py-1 ${
                pathname === href
                  ? 'text-cyan-neon'
                  : 'text-white/65 hover:text-white'
              }`}
            >
              {label}
              {pathname === href && (
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-cyan-neon rounded-full" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="text-sm font-semibold text-[#0d1f3c] bg-cyan-neon px-5 py-2 rounded-xl tracking-wide hover:opacity-90 transition-opacity duration-200"
          >
            Get in Touch
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-5 bg-white transition-all origin-center ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block h-0.5 w-5 bg-white transition-all ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block h-0.5 w-5 bg-white transition-all origin-center ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-navy-900/100 backdrop-blur-xl border-b border-white/10">
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-xl font-medium ${pathname === href ? 'text-cyan-neon' : 'text-white/80'}`}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 bg-cyan-neon text-navy-950 font-semibold text-center py-3 rounded-xl"
              onClick={() => setMobileOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
