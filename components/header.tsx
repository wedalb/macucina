"use client"

import Link from "next/link"
import { Leaf, Menu, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import Image from "next/image"


export default function Header() {
  const [showSearch, setShowSearch] = useState(false)

  return (
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menü öffnen</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-10">
                  <Link href="/" className="text-lg font-medium transition-colors hover:text-green-600">
                    Startseite
                  </Link>
                  <Link href="/macucina" className="text-lg font-medium transition-colors hover:text-green-600">
                    Macucina Kurse
                  </Link>
                  <Link href="/recipes" className="text-lg font-medium transition-colors hover:text-green-600">
                    Rezepte
                  </Link>
                  <Link href="/blog" className="text-lg font-medium transition-colors hover:text-green-600">
                    Blog
                  </Link>
                  <Link href="/about" className="text-lg font-medium transition-colors hover:text-green-600">
                    Über uns
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="flex items-center gap-2">
              <Image
                  src="/logo.png"
                  alt="Logo"
                  width={30}
                  height={30}
                  className="mr-1"
              />
              <span className="text-xl font-bold tracking-tight">MACucina</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-green-600">
              Startseite
            </Link>
            <Link href="/macucina" className="text-sm font-medium transition-colors hover:text-green-600">
              Macucina Kurse
            </Link>
            <Link href="/recipes" className="text-sm font-medium transition-colors hover:text-green-600">
              Rezepte
            </Link>
            <Link href="/blog" className="text-sm font-medium transition-colors hover:text-green-600">
              Blog
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-green-600">
              Über uns
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            {showSearch ? (
                <div className="relative flex items-center">
                  <Input type="search" placeholder="Suche..." className="w-[200px] pr-8" />
                  <Button variant="ghost" size="icon" className="absolute right-0" onClick={() => setShowSearch(false)}>
                    <X className="h-4 w-4" />
                    <span className="sr-only">Suche schließen</span>
                  </Button>
                </div>
            ) : (
                <Button variant="ghost" size="icon" onClick={() => setShowSearch(true)}>
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Suche</span>
                </Button>
            )}
            <Button className="hidden sm:flex bg-green-600 hover:bg-green-700">Abonnieren</Button>
          </div>
        </div>
      </header>
  )
}
