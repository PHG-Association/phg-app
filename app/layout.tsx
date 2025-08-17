import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://prehealthguidance.vercel.app"),
  title: "GMU Pre-Health Guidance Association",
  description:
    "Empowering George Mason University pre-health students with guidance, volunteering, and networking opportunities.",
  generator: "v0.app",
  openGraph: {
    title: "GMU Pre-Health Guidance Association",
    description: "Guidance • Volunteering • Networking for GMU pre-health students.",
    url: "https://prehealthguidance.vercel.app/",
    siteName: "PHG at GMU",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "PHG Logo" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GMU Pre-Health Guidance Association",
    description: "Guidance • Volunteering • Networking for GMU pre-health students.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
