import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Limesoft System | Next-Gen Cybersecurity & Tech Integration',
  description:
    'Limesoft System is a next-gen cybersecurity and tech-system integrator focused on driving innovation and securing the digital future. Offices in Nigeria, UK, Cameroon and Rwanda.',
  keywords: [
    'cybersecurity',
    'tech integration',
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
      <body className="bg-navy-950 text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
