import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'International Peace Crusaders (IPC)',
    template: '%s | International Peace Crusaders',
  },
  description:
    'IPC is a global alliance dedicated to building sustainable peace — from the individual outward to families, communities, nations, and the world.',
  keywords: ['peace', 'NGO', 'peacebuilding', 'humanitarian', 'Africa', 'sustainable peace'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ipc-global.org',
    siteName: 'International Peace Crusaders',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
