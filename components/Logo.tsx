export function LimesoftLogoMark({ className = 'w-10 h-11' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shieldFill" x1="0" y1="0" x2="48" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0e1e8c" />
          <stop offset="100%" stopColor="#06104a" />
        </linearGradient>
        <linearGradient id="outerGlow" x1="0" y1="0" x2="48" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Shield body */}
      <path
        d="M24 1.5L3.5 10.5V27C3.5 40.2 12.8 51.8 24 54.5C35.2 51.8 44.5 40.2 44.5 27V10.5L24 1.5Z"
        fill="url(#shieldFill)"
        stroke="url(#outerGlow)"
        strokeWidth="1.2"
      />

      {/* Inner ring */}
      <circle cx="24" cy="29" r="10.5" stroke="#00e5ff" strokeWidth="1" fill="none" opacity="0.35" />

      {/* Center node */}
      <circle cx="24" cy="29" r="4" fill="#00e5ff" opacity="0.95" />

      {/* North spoke + node */}
      <line x1="24" y1="17" x2="24" y2="22.5" stroke="#00e5ff" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="24" cy="16" r="1.6" fill="#00e5ff" opacity="0.7" />

      {/* South spoke + node */}
      <line x1="24" y1="35.5" x2="24" y2="41" stroke="#00e5ff" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="24" cy="42" r="1.6" fill="#00e5ff" opacity="0.7" />

      {/* West spoke + node */}
      <line x1="11.5" y1="29" x2="17" y2="29" stroke="#00e5ff" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="10.5" cy="29" r="1.6" fill="#00e5ff" opacity="0.7" />

      {/* East spoke + node */}
      <line x1="31" y1="29" x2="36.5" y2="29" stroke="#00e5ff" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="37.5" cy="29" r="1.6" fill="#00e5ff" opacity="0.7" />

      {/* NW diagonal */}
      <line x1="16.5" y1="21.5" x2="20.5" y2="25.5" stroke="#00e5ff" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
      {/* NE diagonal */}
      <line x1="31.5" y1="21.5" x2="27.5" y2="25.5" stroke="#00e5ff" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
      {/* SW diagonal */}
      <line x1="16.5" y1="36.5" x2="20.5" y2="32.5" stroke="#00e5ff" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
      {/* SE diagonal */}
      <line x1="31.5" y1="36.5" x2="27.5" y2="32.5" stroke="#00e5ff" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

export function LimesoftWordmark({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: { name: 'text-base', tag: 'text-[9px]' },
    md: { name: 'text-lg', tag: 'text-[10px]' },
    lg: { name: 'text-2xl', tag: 'text-xs' },
  }
  return (
    <div>
      <span className={`text-white font-bold leading-none tracking-wide block ${sizes[size].name}`}>
        Limesoft
      </span>
      <span className={`text-cyan-neon tracking-[0.28em] uppercase leading-none mt-0.5 block font-medium ${sizes[size].tag}`}>
        System
      </span>
    </div>
  )
}
