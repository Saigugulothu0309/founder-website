import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import '@/styles/globals.css'

const name = process.env.NEXT_PUBLIC_FOUNDER_NAME || 'Founder'
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourname.com'

export const metadata: Metadata = {
  title: {
    default: `${name} — Founder · Researcher · Builder`,
    template: `%s | ${name}`,
  },
  description: 'Building technology that solves real human problems. AI, Accessibility, Computer Vision, Research & Ventures.',
  metadataBase: new URL(siteUrl),
  keywords: ['founder', 'researcher', 'AI', 'accessibility', 'computer vision', 'startup', 'venture builder'],
  authors: [{ name }],
  creator: name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: `${name} — Founder · Researcher · Builder`,
    description: 'Building technology that solves real human problems.',
    siteName: name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${name} — Founder · Researcher · Builder`,
    description: 'Building technology that solves real human problems.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
