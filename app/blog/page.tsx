import Link from "next/link"
import Image from "next/image"
import { CalendarDays, Clock, Search, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Die Vorteile saisonaler Ernährung",
      excerpt: "Erfahre, warum saisonales Obst und Gemüse besser für Gesundheit, Umwelt und Geldbeutel ist.",
      image: "/placeholder.svg?height=400&width=600",
      date: "15. Mai 2023",
      readTime: "5 Min. Lesezeit",
      category: "Ernährung",
      tags: ["Saisonales", "Gesundheit", "Nachhaltigkeit"],
    },
    {
      id: 2,
      title: "So startest du deinen Bio-Garten",
      excerpt: "Einsteiger-Guide für eigenes Gemüse, Kräuter und Obst – natürlich biologisch.",
      image: "/placeholder.svg?height=400&width=600",
      date: "28. April 2023",
      readTime: "8 Min. Lesezeit",
      category: "Garten",
      tags: ["Garten", "DIY", "Nachhaltigkeit"],
    },
    {
      id: 3,
      title: "Was bedeuten Bio-Siegel eigentlich?",
      excerpt: "So liest du Bio-Etiketten richtig und triffst bessere Kaufentscheidungen.",
      image: "/placeholder.svg?height=400&width=600",
      date: "10. April 2023",
      readTime: "6 Min. Lesezeit",
      category: "Lebensmittelwissen",
      tags: ["Einkauf", "Bildung", "Bio"],
    },
    {
      id: 4,
      title: "Wie Bio-Landwirtschaft das Klima schützt",
      excerpt: "Biodiversität erhalten und CO₂ reduzieren – so wirkt nachhaltige Landwirtschaft.",
      image: "/placeholder.svg?height=400&width=600",
      date: "22. März 2023",
      readTime: "7 Min. Lesezeit",
      category: "Umwelt",
      tags: ["Nachhaltigkeit", "Klima", "Landwirtschaft"],
    },
    {
      id: 5,
      title: "Meal Prep für stressfreie Wochen",
      excerpt: "Schnelle Bio-Rezepte, die Zeit sparen und trotzdem lecker und nahrhaft sind.",
      image: "/placeholder.svg?height=400&width=600",
      date: "15. März 2023",
      readTime: "6 Min. Lesezeit",
      category: "Essensplanung",
      tags: ["Vorkochen", "Zeitsparen", "Gesund"],
    },
    {
      id: 6,
      title: "Darmgesundheit und Bio-Lebensmittel",
      excerpt: "Wie biologische Ernährung deine Verdauung und dein Wohlbefinden fördern kann.",
      image: "/placeholder.svg?height=400&width=600",
      date: "28. Februar 2023",
      readTime: "9 Min. Lesezeit",
      category: "Gesundheit",
      tags: ["Darm", "Ernährung", "Wohlbefinden"],
    },
  ]

  const categories = [
    { name: "Ernährung", count: 12 },
    { name: "Rezepte", count: 45 },
    { name: "Garten", count: 8 },
    { name: "Nachhaltigkeit", count: 15 },
    { name: "Lebensmittelwissen", count: 10 },
    { name: "Gesundheit", count: 18 },
  ]

  const popularTags = [
    "Bio",
    "Vegan",
    "Saisonal",
    "Nachhaltigkeit",
    "Wohlbefinden",
    "Garten",
    "Ernährung",
    "Rezepte",
  ]

  return (
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full h-[40vh] overflow-hidden">
          <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/traube.mp4" type="video/mp4" />
            Dein Browser unterstützt dieses Videoformat nicht.
          </video>
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Der Blog</h1>
              <p className="text-xl text-gray-200 max-w-[600px] mx-auto">
                Einblicke, Tipps und Geschichten rund um Bio-Lebensstil und nachhaltige Ernährung.
              </p>
            </div>
          </div>
        </section>

        <div className="container px-4 md:px-6 mx-auto py-12">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input placeholder="Artikel durchsuchen..." className="pl-10 border-gray-200" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {posts.map((post) => (
                    <Card key={post.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {post.category}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <CalendarDays className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0 pb-6 px-6">
                        <Link
                            href={`/blog/${post.id}`}
                            className="text-green-600 font-medium hover:text-green-700 inline-flex items-center"
                        >
                          Weiterlesen
                          <svg
                              className="ml-1 w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                          >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </Link>
                      </CardFooter>
                    </Card>
                ))}
              </div>

              <div className="mt-10 flex justify-center">
                <Button variant="outline" className="mr-2">Zurück</Button>
                <Button variant="outline" className="bg-green-50">1</Button>
                <Button variant="outline" className="mx-1">2</Button>
                <Button variant="outline" className="mx-1">3</Button>
                <Button variant="outline" className="ml-2">Weiter</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Tag className="mr-2 h-5 w-5" />
                  Kategorien
                </h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                      <li key={category.name}>
                        <Link
                            href={`/blog/category/${category.name.toLowerCase().replace(" ", "-")}`}
                            className="flex justify-between items-center text-gray-700 hover:text-green-600"
                        >
                          <span>{category.name}</span>
                          <span className="bg-white text-gray-500 text-xs px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                        </Link>
                      </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Beliebte Schlagwörter</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                      <Link key={tag} href={`/blog/tag/${tag.toLowerCase()}`}>
                        <Badge variant="outline" className="bg-white hover:bg-green-100 text-gray-700">
                          {tag}
                        </Badge>
                      </Link>
                  ))}
                </div>
              </div>

              <div className="bg-green-100 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Newsletter abonnieren</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Erhalte die neuesten Artikel und Updates direkt in dein Postfach.
                </p>
                <form className="space-y-3">
                  <Input placeholder="Deine E-Mail-Adresse" className="bg-white" />
                  <Button className="w-full bg-green-600 hover:bg-green-700">Abonnieren</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
