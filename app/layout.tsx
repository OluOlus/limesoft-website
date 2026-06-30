import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Limesoft System | Technology Solutions for Africa & the UK',
  description:
    'Limesoft System delivers cybersecurity, network infrastructure, managed IT services, and cloud solutions across Africa and the UK. Offices in Nigeria, UK, Cameroon and Rwanda.',
  keywords: [
    'cybersecurity',
    'IT solutions',
    'managed services',
    'digital transformation',
    'IT infrastructure',
    'cloud computing',
    'Nigeria',
    'Africa',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0b1628] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
