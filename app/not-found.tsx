import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bse-dark flex flex-col items-center justify-center px-6">
      <h1 className="font-display text-4xl font-bold text-white mb-2">404</h1>
      <p className="text-slate-400 mb-6">This page could not be found.</p>
      <Link
        href="/"
        className="text-bse-cyan hover:text-bse-blue font-semibold"
      >
        Go to PLASTIC2BITCOIN home →
      </Link>
    </div>
  )
}
