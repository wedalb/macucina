import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="py-16 bg-green-800 text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Tritt unserer Community bei</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Erhalte saisonale Rezepte, Gartentipps und exklusive Inhalte direkt in dein Postfach!
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="E-Mail-Adresse eingeben"
              className="bg-white/10 border-white/20 text-white placeholder:text-green-200"
              required
            />
            <Button className="bg-white text-green-800 hover:bg-green-100">Abonnieren</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
