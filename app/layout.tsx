import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite",
  description: "Transform your marketing strategy with our comprehensive AI-powered platform",
  keywords: "AI marketing, marketing automation, brand management, digital marketing, AI content generation",
  authors: [{ name: "ADmyBRAND" }],
  creator: "ADmyBRAND",
  publisher: "ADmyBRAND",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://admybrand.com",
    title: "ADmyBRAND AI Suite - Transform Your Marketing Strategy",
    description: "Transform your marketing strategy with our comprehensive AI-powered platform.",
    siteName: "ADmyBRAND AI Suite",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADmyBRAND AI Suite - Transform Your Marketing Strategy",
    description: "Transform your marketing strategy with our comprehensive AI-powered platform.",
    creator: "@admybrand",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical CSS for immediate rendering */
              body { 
                font-family: system-ui, -apple-system, sans-serif; 
                margin: 0; 
                padding: 0; 
                background: #ffffff;
                color: #111827;
                line-height: 1.6;
              }
              .dark body { 
                background: #111827; 
                color: #ffffff; 
              }
              * { box-sizing: border-box; }
              .container { max-width: 1280px; margin: 0 auto; padding: 0 1rem; }
              @media (min-width: 640px) { .container { padding: 0 1.5rem; } }
              @media (min-width: 1024px) { .container { padding: 0 2rem; } }
            `,
          }}
        />
      </head>
      <body className="antialiased bg-white dark:bg-gray-900 transition-colors duration-300">{children}</body>
    </html>
  )
}
