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
  { name: 'Cisco',     component: <CiscoLogo     className="h-8" /> },
  { name: 'Palo Alto', component: <PaloAltoLogo  className="h-9" /> },
  { name: 'HPE',       component: <HPELogo       className="h-9" /> },
  { name: 'F5',        component: <F5Logo        className="h-8" /> },
  { name: 'Fortinet',  component: <FortinetLogo  className="h-8" /> },
  { name: 'AWS',       component: <AWSLogo       className="h-9" /> },
  { name: 'Microsoft', component: <MicrosoftLogo className="h-7" /> },
]

export default function LogoTicker() {
  return (
    <div className="py-12 overflow-hidden">
      <div className="relative flex items-center">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0b1628] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0b1628] to-transparent z-10 pointer-events-none" />

        {/* Ticker track — duplicated for seamless loop */}
        <div className="ticker-track flex gap-16 md:gap-24 whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 opacity-75 hover:opacity-100 transition-opacity duration-300 cursor-default"
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
