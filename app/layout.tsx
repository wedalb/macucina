import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Organic Eats - Delicious Organic Food Blog",
  description:
      "Discover delicious organic recipes, sustainable living tips, and insights about organic food that's good for you and the planet.",
  generator: 'v0.dev'
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
