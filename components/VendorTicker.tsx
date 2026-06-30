'use client'

import {
  CiscoLogo,
  PaloAltoLogo,
  FortinetLogo,
  SophosLogo,
  MicrosoftLogo,
  AWSLogo,
  AzureLogo,
  HPELogo,
  F5Logo,
  JuniperLogo,
  ISC2Logo,
} from './PartnerLogos'

type LogoSet = 'security' | 'infrastructure' | 'applications' | 'managed-services'

const sets: Record<LogoSet, { name: string; component: React.ReactNode }[]> = {
  security: [
    { name: 'Palo Alto Networks', component: <PaloAltoLogo className="h-8" /> },
    { name: 'Fortinet',           component: <FortinetLogo  className="h-8" /> },
    { name: 'Sophos',             component: <SophosLogo    className="h-8" /> },
    { name: 'Cisco',              component: <CiscoLogo     className="h-8" /> },
    { name: 'Microsoft',          component: <MicrosoftLogo className="h-7" /> },
    { name: 'ISC2',               component: <ISC2Logo      className="h-8" /> },
  ],
  infrastructure: [
    { name: 'Amazon Web Services', component: <AWSLogo      className="h-8" /> },
    { name: 'Azure',               component: <AzureLogo    className="h-8" /> },
    { name: 'Microsoft',           component: <MicrosoftLogo className="h-7" /> },
    { name: 'Cisco',               component: <CiscoLogo    className="h-8" /> },
    { name: 'HPE Aruba',           component: <HPELogo      className="h-8" /> },
    { name: 'Juniper',             component: <JuniperLogo  className="h-7" /> },
    { name: 'Fortinet',            component: <FortinetLogo  className="h-8" /> },
    { name: 'F5',                  component: <F5Logo       className="h-8" /> },
  ],
  applications: [
    { name: 'Amazon Web Services', component: <AWSLogo      className="h-8" /> },
    { name: 'Azure',               component: <AzureLogo    className="h-8" /> },
    { name: 'Microsoft',           component: <MicrosoftLogo className="h-7" /> },
    { name: 'Cisco DevNet',        component: <CiscoLogo    className="h-8" /> },
  ],
  'managed-services': [
    { name: 'Cisco',      component: <CiscoLogo     className="h-8" /> },
    { name: 'Fortinet',   component: <FortinetLogo  className="h-8" /> },
    { name: 'Sophos',     component: <SophosLogo    className="h-8" /> },
    { name: 'Microsoft',  component: <MicrosoftLogo className="h-7" /> },
    { name: 'ISC2',       component: <ISC2Logo      className="h-8" /> },
  ],
}

export default function VendorTicker({ service }: { service: LogoSet }) {
  const logos = sets[service]
  return (
    <div className="relative overflow-hidden py-6">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#07111e] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#07111e] to-transparent z-10 pointer-events-none" />

      <div className="vendor-ticker-track flex items-center gap-14 whitespace-nowrap">
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 opacity-40 hover:opacity-75 transition-opacity duration-300"
            title={logo.name}
          >
            {logo.component}
          </div>
        ))}
      </div>
    </div>
  )
}
