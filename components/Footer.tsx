import Link from 'next/link'
import Logo from './Logo'

const offices = [
  { flag: '🇳🇬', country: 'Nigeria', address: 'Plot 1, Remi Olowude St, Lekki Phase 1, Lagos' },
  { flag: '🇬🇧', country: 'United Kingdom', address: '46 Leatham Avenue, South Yorkshire S61 1AD' },
  { flag: '🇨🇲', country: 'Cameroon', address: 'Boulevard de la Liberté, Akwa, Douala' },
  { flag: '🇷🇼', country: 'Rwanda', address: 'KG 7 Ave, Kigali Heights, Kigali' },
]

export default function Footer() {
  return (
    <footer className="bg-[#060d1a] border-t border-white/10">
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-neon/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand + offices */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Logo height={44} />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
              Cybersecurity · Infrastructure · Managed Services · Cloud Solutions — delivered across Africa and the UK.
            </p>

            <div className="space-y-4">
              {offices.map(({ flag, country, address }) => (
                <div key={country} className="flex items-start gap-3">
                  <span className="text-base leading-none mt-0.5">{flag}</span>
                  <div>
                    <p className="text-white/60 text-xs font-semibold">{country}</p>
                    <p className="text-white/30 text-xs mt-0.5">{address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="lg:col-span-3">
            <h3 className="text-white/30 text-[10px] font-semibold tracking-[0.3em] uppercase mb-6">Company</h3>
            <ul className="space-y-4">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Resources', href: '/resources' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-white/50 text-sm hover:text-cyan-neon transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-white/30 text-[10px] font-semibold tracking-[0.3em] uppercase mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                { label: 'Cybersecurity', href: '/services#cybersecurity' },
                { label: 'Infrastructure', href: '/services#infrastructure' },
                { label: 'Applications', href: '/services#applications' },
                { label: 'Managed Services', href: '/services#services' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-white/50 text-sm hover:text-cyan-neon transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <h3 className="text-white/30 text-[10px] font-semibold tracking-[0.3em] uppercase mb-4">Contact</h3>
              <a href="mailto:info@limesoftsystem.com" className="block text-white/50 text-sm hover:text-cyan-neon transition-colors mb-2">
                info@limesoftsystem.com
              </a>
              <a href="tel:+2348146412574" className="block text-white/50 text-sm hover:text-cyan-neon transition-colors">
                +234 814 641 2574
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">© 2025 Limesoft System. All rights reserved.</p>
          <p className="text-white/15 text-xs">Securing Africa&apos;s Digital Future</p>
        </div>
      </div>
    </footer>
  )
}
