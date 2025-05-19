import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Brand & Description */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">MACucina</h2>
            <p className="text-green-200 text-sm leading-relaxed">
              Bio-Rezepte, bewusste Ernährung & gemeinsames Kochen – direkt aus Mecklenburg-Vorpommern.
            </p>
          </div>

          {/* Kontaktinformationen */}
          <div>
            <h3 className="text-sm font-semibold uppercase mb-4 text-green-300">Kontakt</h3>
            <ul className="space-y-3 text-sm text-green-200">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5" />
                <div>
                  <p>Am Dorfplatz 2</p>
                  <p>19294 Gorlosen / OT Boek</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <a href="tel:+4938755449322" className="hover:text-white transition-colors">038755 – 44 93 22</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <a href="mailto:olgaseiwert77@gmail.com" className="hover:text-white transition-colors">
                  olgaseiwert77@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase mb-4 text-green-300">Newsletter</h3>
            <p className="text-green-200 text-sm mb-4 leading-relaxed">
              Abonniere unseren Newsletter für saisonale Rezepte, Events und Bio-Tipps.
            </p>
            <Button className="w-full bg-white text-green-900 hover:bg-green-100">
              Jetzt abonnieren
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-800 mt-12 pt-6 text-center text-sm text-green-200">
          © 2025 MACucina. Alle Rechte vorbehalten.
        </div>
      </footer>
  )
}