import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PLASTIC2BITCOIN | Blue Sword Energy',
  description: 'Turning Plastic Waste Into Bitcoin. Real-world energy infrastructure meets blockchain.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="font-sans min-h-screen bg-bse-dark text-slate-200 overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
