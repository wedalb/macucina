import Link from "next/link"
import { Leaf, Instagram, Twitter, Facebook, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container px-4 md:px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6" />
              <span className="text-xl font-bold tracking-tight">Organic Eats</span>
            </Link>
            <p className="text-green-200 text-sm">
              Delicious recipes and insights about organic food that's good for you and the planet.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-green-800 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-green-800 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-green-800 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-green-800 hover:text-white">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-green-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="text-green-200 hover:text-white transition-colors">
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-green-200 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-green-200 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/recipes/breakfast" className="text-green-200 hover:text-white transition-colors">
                  Breakfast
                </Link>
              </li>
              <li>
                <Link href="/recipes/main-dish" className="text-green-200 hover:text-white transition-colors">
                  Main Dishes
                </Link>
              </li>
              <li>
                <Link href="/recipes/salad" className="text-green-200 hover:text-white transition-colors">
                  Salads
                </Link>
              </li>
              <li>
                <Link href="/recipes/dessert" className="text-green-200 hover:text-white transition-colors">
                  Desserts
                </Link>
              </li>
              <li>
                <Link href="/recipes/baking" className="text-green-200 hover:text-white transition-colors">
                  Baking
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-green-200">
                <span className="block">Email:</span>
                <a href="mailto:hello@organiceats.com" className="hover:text-white transition-colors">
                  hello@organiceats.com
                </a>
              </li>
              <li className="text-green-200">
                <span className="block">Follow:</span>
                <a href="#" className="hover:text-white transition-colors">
                  @organic.eats
                </a>
              </li>
              <li className="text-green-200 mt-4">
                <Button className="bg-white text-green-800 hover:bg-green-100">Subscribe to Newsletter</Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-green-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-200 text-sm">© {new Date().getFullYear()} Organic Eats. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-green-200 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-green-200 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-green-200 text-sm hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
