import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PLASTIC2BITCOIN | Blue Sword Energy',
  description: 'Turning Plastic Waste Into Bitcoin. Real-world energy infrastructure meets blockchain.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans min-h-screen bg-bse-dark text-slate-200">
        {children}
      </body>
    </html>
  )
}
