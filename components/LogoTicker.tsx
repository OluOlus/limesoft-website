'use client'

import {
  CiscoLogo,
  PaloAltoLogo,
  HPELogo,
  F5Logo,
  FortinetLogo,
  AWSLogo,
  MicrosoftLogo,
} from './PartnerLogos'

const logos = [
  { name: 'Cisco',     component: <CiscoLogo     className="h-6" /> },
  { name: 'Palo Alto', component: <PaloAltoLogo  className="h-7" /> },
  { name: 'HPE',       component: <HPELogo       className="h-7" /> },
  { name: 'F5',        component: <F5Logo        className="h-6" /> },
  { name: 'Fortinet',  component: <FortinetLogo  className="h-6" /> },
  { name: 'AWS',       component: <AWSLogo       className="h-7" /> },
  { name: 'Microsoft', component: <MicrosoftLogo className="h-5" /> },
]

export default function LogoTicker() {
  return (
    <div className="py-12 border-y border-white/6 bg-[#02020e] overflow-hidden">
      <div className="relative flex items-center">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#02020e] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#02020e] to-transparent z-10 pointer-events-none" />

        {/* Ticker track — duplicated for seamless loop */}
        <div className="ticker-track flex gap-16 md:gap-24 whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 opacity-30 hover:opacity-80 grayscale hover:grayscale-0 transition-all duration-400 cursor-default"
              title={logo.name}
            >
              {logo.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
