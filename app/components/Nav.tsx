'use client'

import { useState, useRef, useEffect } from 'react'
import { logoUrl } from '@/lib/images'

const DEXSCREENER_PLX = 'https://dexscreener.com/solana/6qPwY175YcsFJ37KTvSxxmv7FnMa9J9HgSBYB7xQtRuj'
const PLX_TOKEN_ADDRESS = 'DELZif15Jtj6kdTY5DBghyDkJGyTnQ92vtriwK3CFrE1'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#technology', label: 'Technology' },
  { href: '#partnerships', label: 'Partnerships' },
  { href: '#contact', label: 'Contact us' },
]

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [buyDropdownOpen, setBuyDropdownOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const buyDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!buyDropdownOpen) return
    const close = (e: MouseEvent) => {
      if (buyDropdownRef.current && !buyDropdownRef.current.contains(e.target as Node)) setBuyDropdownOpen(false)
    }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [buyDropdownOpen])

  const copyAddress = () => {
    navigator.clipboard.writeText(PLX_TOKEN_ADDRESS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bse-dark/95 backdrop-blur-md border-b border-sky-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <span className="font-display font-bold text-base sm:text-lg text-white tracking-tight">
          PLASTIC2BITCOIN
        </span>
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          {/* Mobile only: Buy $PLX link to the left of the logo */}
          <a
            href={DEXSCREENER_PLX}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden text-bse-cyan font-semibold hover:text-bse-glow transition-colors py-2 text-sm whitespace-nowrap"
          >
            Buy $PLX
          </a>
          <img
            src={logoUrl}
            alt="Blue Sword Energy"
            width={40}
            height={40}
            className="h-8 w-8 md:h-10 md:w-10 object-contain flex-shrink-0"
          />
          {/* Desktop links (dropdown Buy $PLX only on desktop) */}
          <div className="hidden md:flex items-center gap-4 md:gap-6 text-sm">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-slate-400 hover:text-bse-cyan transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}
            <div className="relative" ref={buyDropdownRef}>
            <button
              type="button"
              onClick={() => setBuyDropdownOpen((o) => !o)}
              className="text-bse-cyan font-semibold hover:text-bse-glow transition-colors py-2 whitespace-nowrap"
            >
              Buy $PLX
            </button>
            {buyDropdownOpen && (
              <div className="absolute right-0 top-full mt-1 w-80 rounded-lg border border-sky-500/30 bg-bse-navy shadow-lg p-3 z-50">
                <a
                  href={DEXSCREENER_PLX}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2 rounded-lg bg-bse-blue/20 text-bse-cyan font-medium hover:bg-bse-blue/30 transition-colors mb-3"
                  onClick={() => setBuyDropdownOpen(false)}
                >
                  Open on Dexscreener
                </a>
                <p className="text-slate-400 text-xs mb-1">Token address (Solana)</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 text-slate-300 text-xs break-all font-mono">{PLX_TOKEN_ADDRESS}</code>
                  <button
                    type="button"
                    onClick={copyAddress}
                    className="flex-shrink-0 px-2 py-1 rounded bg-sky-500/20 text-bse-cyan text-xs font-medium hover:bg-sky-500/30"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            )}
          </div>
          </div>
          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden p-2 -mr-2 text-slate-400 hover:text-bse-cyan transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-sky-500/10 bg-bse-dark/98 px-4 py-4 flex flex-col gap-1">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-slate-300 hover:text-bse-cyan py-3 px-2 text-base font-medium min-h-[48px] flex items-center"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="border-t border-sky-500/20 pt-3 mt-2">
            <p className="text-slate-400 text-xs mb-1 px-2">Buy $PLX (PlasticX)</p>
            <a
              href={DEXSCREENER_PLX}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-bse-cyan font-semibold hover:text-bse-glow py-2 px-2 text-base min-h-[44px] flex items-center"
              onClick={() => setMobileOpen(false)}
            >
              Open on Dexscreener
            </a>
            <p className="text-slate-400 text-xs mb-1 px-2 mt-2">Token address</p>
            <div className="flex items-center gap-2 px-2 py-2 bg-bse-navy/80 rounded-lg">
              <code className="flex-1 text-slate-300 text-xs break-all font-mono">{PLX_TOKEN_ADDRESS}</code>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(PLX_TOKEN_ADDRESS)
                  setCopied(true)
                  setTimeout(() => setCopied(false), 2000)
                }}
                className="flex-shrink-0 px-3 py-1.5 rounded bg-sky-500/20 text-bse-cyan text-xs font-medium"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
