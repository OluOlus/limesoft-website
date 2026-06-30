import Image from 'next/image'

interface LogoProps {
  height?: number
  className?: string
}

export default function Logo({ height = 44, className = '' }: LogoProps) {
  const width = Math.round(height * (990 / 340))
  return (
    <Image
      src="/Limesoft-site.png"
      alt="Limesoft System"
      width={width}
      height={height}
      priority
      className={className}
    />
  )
}

// Keep named exports for any remaining references
export function LimesoftLogoMark({ className = '' }: { className?: string }) {
  return <Image src="/Limesoft-site.png" alt="Limesoft System" width={130} height={44} priority className={className} />
}

export function LimesoftWordmark() {
  return null
}
