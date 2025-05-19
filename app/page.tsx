import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import FeaturedPosts from "@/components/featured-posts"
import PopularRecipes from "@/components/popular-recipes"
import Newsletter from "@/components/newsletter"

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full h-[80vh] overflow-hidden">
          <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/weisse-blume.mp4" type="video/mp4" />
            Dein Browser unterstützt dieses Videoformat nicht.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="max-w-2xl space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-2">
                  <Leaf className="h-4 w-4 mr-1" />
                  <span>Natürlich leben</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                  Nähre deinen Körper, <span className="text-green-400">achte auf die Erde</span>
                </h1>
                <p className="text-xl text-gray-200 max-w-[600px]">
                  Entdecke köstliche Bio-Rezepte, nachhaltige Impulse und Inspirationen für ein achtsames Leben.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Rezepte entdecken
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                      size="lg"
                      variant="outline"
                      className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  >
                    Zum Blog
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/*/!* Featured Categories *!/*/}
        {/*<section className="py-12 bg-green-50">*/}
        {/*  <div className="container px-4 md:px-6 mx-auto">*/}
        {/*    <h2 className="text-3xl font-bold tracking-tight text-center mb-12">*/}
        {/*      Entdecke unsere <span className="text-green-600">Kategorien</span>*/}
        {/*    </h2>*/}
        {/*    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">*/}
        {/*      {[*/}
        {/*        { name: "Frühstück", slug: "breakfast", image: "/placeholder.svg?height=300&width=300" },*/}
        {/*        { name: "Salate", slug: "salad", image: "/placeholder.svg?height=300&width=300" },*/}
        {/*        { name: "Hauptgerichte", slug: "main-dish", image: "/placeholder.svg?height=300&width=300" },*/}
        {/*        { name: "Desserts", slug: "dessert", image: "/placeholder.svg?height=300&width=300" },*/}
        {/*      ].map((category) => (*/}
        {/*          <Link*/}
        {/*              key={category.slug}*/}
        {/*              href={`/recipes/${category.slug}`}*/}
        {/*              className="group relative overflow-hidden rounded-xl aspect-square transition-all hover:scale-[1.03]"*/}
        {/*          >*/}
        {/*            <Image*/}
        {/*                src={category.image || "/placeholder.svg"}*/}
        {/*                alt={category.name}*/}
        {/*                fill*/}
        {/*                className="object-cover transition-transform group-hover:scale-105"*/}
        {/*            />*/}
        {/*            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">*/}
        {/*              <h3 className="text-xl font-medium text-white">{category.name}</h3>*/}
        {/*            </div>*/}
        {/*          </Link>*/}
        {/*      ))}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/* Featured Posts */}
        <FeaturedPosts />

        {/* Popular Recipes */}
        <PopularRecipes />

        {/* About Preview */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image src="/olga2.jpeg" alt="Olga Häring-Seiwert" fill className="object-cover" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">
                  Hallo, ich bin <span className="text-green-600">Olga Häring-Seiwert</span>
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Ich bin ausgebildete Reformhausfachfrau, leidenschaftliche Köchin und Unternehmerin mit über einem Jahrzehnt Erfahrung im Bereich gesunder Ernährung und nachhaltiger Lebensweise.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Nach Jahren im Reformhausbetrieb und einem veganen Bistro teile ich hier mein Wissen über bewusstes Leben, nachhaltige Ernährung und gemeinschaftliches Kochen.
                </p>
                <Link href="/about">
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    Meine Geschichte lesen
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <Newsletter />
      </div>
  )
}
