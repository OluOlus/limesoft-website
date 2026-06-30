import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#07111e] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-[120px] font-black leading-none text-transparent bg-clip-text mb-2 select-none"
          style={{ backgroundImage: 'linear-gradient(135deg, #018ad8 0%, #38bdf8 50%, #07111e 100%)' }}>
          404
        </p>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-8" />
        <h1 className="text-2xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-white/40 text-sm leading-relaxed mb-10">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/"
            className="inline-flex items-center gap-2 bg-[#018ad8] text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-[#0179c0] transition-colors duration-200">
            Go Home
          </Link>
          <Link href="/resources"
            className="inline-flex items-center gap-2 border border-white/15 text-white/60 font-semibold text-sm px-6 py-3 rounded-lg hover:border-white/30 hover:text-white transition-all duration-200">
            Browse Resources
          </Link>
        </div>
      </div>
    </div>
  )
}
