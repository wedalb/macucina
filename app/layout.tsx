import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MAcucina - Leckere Gerichte mit Olga Seiwert-Häring",
  description:
      "Der einfache Weg zum guten, gesunden Leben heißt „Makrobiotik\". Makrobiotik muss erlebt werden, probiert werden, gekostet werden, dazu soll MAcucina beitragen",
  generator: 'Heidi Albarazi'
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
