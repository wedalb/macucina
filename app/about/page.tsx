import Image from "next/image"
import { Instagram, Twitter, Facebook, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Newsletter from "@/components/newsletter"

export default function AboutPage() {
  return (
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full h-[50vh] overflow-hidden">
          <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/lila-blume.mp4" type="video/mp4" />
            Dein Browser unterstützt dieses Videoformat nicht.
          </video>

          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Über mich</h1>
              <p className="text-xl text-gray-200 max-w-[600px] mx-auto">
                Meine Reise mit Bio-Lebensmitteln und nachhaltigem Leben
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                    src="/olga.jpg"
                    alt="Olga Häring-Seiwert"
                    fill
                    className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">
                  Hallo, ich bin <span className="text-green-600">Olga Häring-Seiwert</span>
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Ich bin ausgebildete Reformhausfachfrau, leidenschaftliche Köchin und Unternehmerin mit über einem Jahrzehnt Erfahrung im Bereich gesunder Ernährung und nachhaltiger Lebensweise.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Von 2011 bis 2024 leitete ich das traditionsreiche Reformhaus und Biomarkt Georg Fischer e.K. in Kulmbach, das ich gemeinsam mit meinem Mann übernommen hatte. Dort durfte ich viele Kund:innen auf ihrem Weg zu einer bewussteren Ernährung begleiten.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Parallel dazu betrieb ich ein veganes Bistro in Marktredwitz, in dem ich kreative pflanzenbasierte Gerichte entwickelte – nährstoffreich, bunt und voller Geschmack.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Heute bin ich dabei, in Grabow und Boek (Mecklenburg-Vorpommern) ein Arbeitszentrum für gemeinsames Kochen, Ernährung, Wandel und bewusstes Leben aufzubauen.
                </p>
              </div>
            </div>

            {/* My Story */}
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">Meine Geschichte</h2>
              <div className="prose prose-green max-w-none">
                <p>
                  Mein Weg begann mit einem tiefen Interesse für Ernährung, Nachhaltigkeit und dem Wunsch, Menschen zu helfen, gesünder zu leben.
                </p>
                <p>
                  Nach vielen Jahren im Reformhausbetrieb und in der Gastronomie wuchs der Wunsch, Wissen über gesunde Lebensführung auf ganzheitliche Weise weiterzugeben.
                </p>
                <p>
                  <strong>Was wir wissen oder zu wissen glauben:</strong> Wir studieren das Leben mit Hilfe gelöster Probleme, ungelöster Probleme,
                  durch viel Einsatz beim Weitermachen und durch ständiges Studium bei Klaus Schubring.
                </p>
                <p>
                  Wir sind überzeugt, dass wir mit unserer Nahrung alle Werkzeuge in unserer Hand haben, um uns gesund zu erhalten
                  und für ein friedliches soziales Miteinander zu sorgen – indem wir Essen richtig zusammenstellen und zubereiten
                  unter Berücksichtigung von Jahreszeit, Klima und unserem Befinden. Und dieses Wissen möchten wir teilen.
                </p>
                <p>
                  Deswegen sind wir dabei, in Grabow und Boek (Mecklenburg-Vorpommern) ein Arbeitszentrum einzurichten.
                  Hier bieten wir „gemeinsames Kochen“ an. Außerdem planen wir regelmäßig im Frühjahr Veränderungstage
                  mit der „Grünen Woche“ (von Klaus Schubring), um zu spüren, wie wenig wir brauchen, um uns besser zu fühlen und anders zu handeln.
                </p>
                <p>
                  Ich freue mich darauf, meine Erfahrungen und mein Wissen mit dir zu teilen – in Workshops, Kursen und beim gemeinsamen Kochen.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Newsletter */}
        <Newsletter />
      </div>
  )
}