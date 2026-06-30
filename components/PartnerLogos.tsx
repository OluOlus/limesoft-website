export function CiscoLogo({ className = 'h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cisco bridge bars */}
      <rect x="45" y="2" width="10" height="14" rx="2" fill="#049fd9" />
      <rect x="31" y="8" width="10" height="10" rx="2" fill="#049fd9" opacity="0.7" />
      <rect x="59" y="8" width="10" height="10" rx="2" fill="#049fd9" opacity="0.7" />
      <rect x="17" y="12" width="10" height="7" rx="2" fill="#049fd9" opacity="0.4" />
      <rect x="73" y="12" width="10" height="7" rx="2" fill="#049fd9" opacity="0.4" />
      <text x="50" y="36" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="#049fd9" letterSpacing="2">
        cisco
      </text>
    </svg>
  )
}

export function AWSLogo({ className = 'h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 90 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="5" y="24" fontFamily="Amazon Ember, Arial, sans-serif" fontSize="20" fontWeight="800" fill="#FF9900" letterSpacing="-0.5">
        aws
      </text>
      {/* Smile arrow */}
      <path
        d="M6 30 Q22 38 38 30"
        stroke="#FF9900"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M36 28 L40 31 L36 33" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function MicrosoftLogo({ className = 'h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 108 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 4 squares */}
      <rect x="0" y="0" width="10.5" height="10.5" fill="#F25022" />
      <rect x="12" y="0" width="10.5" height="10.5" fill="#7FBA00" />
      <rect x="0" y="12" width="10.5" height="10.5" fill="#00A4EF" />
      <rect x="12" y="12" width="10.5" height="10.5" fill="#FFB900" />
      <text x="28" y="17.5" fontFamily="Segoe UI, Arial, sans-serif" fontSize="14" fontWeight="600" fill="white" opacity="0.85">
        Microsoft
      </text>
    </svg>
  )
}

export function HPELogo({ className = 'h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 90 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* HPE green block */}
      <rect x="2" y="4" width="26" height="26" rx="3" fill="#00B388" />
      <text x="15" y="22" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="900" fill="white">
        HPE
      </text>
      <text x="34" y="16" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="400" fill="white" opacity="0.75">
        Hewlett Packard
      </text>
      <text x="34" y="29" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="400" fill="white" opacity="0.75">
        Enterprise
      </text>
    </svg>
  )
}

export function F5Logo({ className = 'h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="56" height="34" rx="6" fill="#E4002B" />
      <text x="30" y="26" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="900" fill="white" letterSpacing="-1">
        F5
      </text>
    </svg>
  )
}

export function FortinetLogo({ className = 'h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 110 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Fortinet triangles */}
      <polygon points="8,30 16,14 24,30" fill="#EE3124" />
      <polygon points="4,30 12,14 20,30" fill="#EE3124" opacity="0.5" />
      <polygon points="12,30 20,14 28,30" fill="#EE3124" opacity="0.5" />
      <text x="34" y="25" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" fill="white" opacity="0.85" letterSpacing="0.5">
        FORTINET
      </text>
    </svg>
  )
}

export function PaloAltoLogo({ className = 'h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 130 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Palo Alto gear-sun */}
      <circle cx="19" cy="19" r="8" stroke="#00C0E8" strokeWidth="2" fill="none" />
      <circle cx="19" cy="19" r="3" fill="#00C0E8" />
      {/* Gear spokes */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <line
          key={i}
          x1={19 + 10 * Math.cos((deg * Math.PI) / 180)}
          y1={19 + 10 * Math.sin((deg * Math.PI) / 180)}
          x2={19 + 13 * Math.cos((deg * Math.PI) / 180)}
          y2={19 + 13 * Math.sin((deg * Math.PI) / 180)}
          stroke="#00C0E8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ))}
      <text x="37" y="24" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="white" opacity="0.85">
        PALO ALTO
      </text>
      <text x="37" y="36" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="400" fill="white" opacity="0.55" letterSpacing="0.5">
        NETWORKS
      </text>
    </svg>
  )
}

export function JuniperLogo({ className = 'h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="16" r="7" stroke="#84BD00" strokeWidth="2" fill="none" />
      <circle cx="10" cy="16" r="3" fill="#84BD00" />
      <text x="24" y="21" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="600" fill="white" opacity="0.8">
        JUNIPER
      </text>
    </svg>
  )
}

export function SophosLogo({ className = 'h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="28" height="28" rx="6" fill="#0073E6" />
      <text x="16" y="24" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="900" fill="white">
        S
      </text>
      <text x="38" y="23" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" fill="white" opacity="0.88">
        Sophos
      </text>
    </svg>
  )
}

export function AzureLogo({ className = 'h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Azure triangle logo */}
      <path d="M14 4 L26 4 L20 16 Z" fill="#0089D6" />
      <path d="M8 28 L22 28 L14 4 Z" fill="#0089D6" opacity="0.7" />
      <path d="M20 16 L28 28 L8 28 Z" fill="#50E6FF" opacity="0.85" />
      <text x="36" y="23" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="600" fill="white" opacity="0.88">
        Azure
      </text>
    </svg>
  )
}

export function ISC2Logo({ className = 'h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="76" height="28" rx="5" fill="#007A33" />
      <text x="40" y="24" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="800" fill="white" letterSpacing="1">
        ISC²
      </text>
    </svg>
  )
}
