import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MAcucina - Leckere Gerichte mit Olga Seiwert-Häring | Makrobiotische Rezepte",
  description:
      "Der einfache Weg zum guten, gesunden Leben heißt „Makrobiotik\". Entdecken Sie leckere makrobiotische Rezepte, Ernährungstipps und nachhaltige Lebensweise mit Olga Seiwert-Häring.",
  keywords: "Makrobiotik, Vegan, Vegetarisch, Gesunde Ernährung, Bio-Rezepte, Nachhaltigkeit, Olga Seiwert-Häring, Reformhaus, Aufstrich, Beilage, Hauptgericht, Dessert",
  generator: 'Heidi Albarazi',
  authors: [{ name: "Olga Seiwert-Häring" }],
  creator: "Olga Seiwert-Häring",
  publisher: "MAcucina",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://macucina.de"),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://macucina.com',
    title: 'MAcucina - Makrobiotische Rezepte und gesunde Ernährung',
    description: 'Entdecken Sie leckere makrobiotische Rezepte, Ernährungstipps und nachhaltige Lebensweise mit Olga Seiwert-Häring.',
    siteName: 'MAcucina',
    images: [
      {
        url: '/olga.jpg',
        width: 800,
        height: 600,
        alt: 'Olga Seiwert-Häring - MAcucina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAcucina - Makrobiotische Rezepte und gesunde Ernährung',
    description: 'Entdecken Sie leckere makrobiotische Rezepte, Ernährungstipps und nachhaltige Lebensweise mit Olga Seiwert-Häring.',
    images: ['/olga.jpg'],
    creator: '@macucina',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  }
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="de">
      <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
      </body>
      </html>
  )
}
