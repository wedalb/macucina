import Link from "next/link"
import Image from "next/image"
import { Clock, Filter, Search, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

export default function RecipesPage() {
  const recipes = [
    {
      id: 1,
      title: "Erdnuss-Apfel und Miso Aufstrich",
      description: "Ein leckerer Brotaufstrich – süß, salzig, sauer kombiniert.",
      image: "/recipes/1.jpg",
      prepTime: "15 Min.",
      cookTime: "25 Min.",
      difficulty: "Einfach",
      category: "Aufstrich",
      tags: ["Vegan", "Makrobiotik"],
      likes: 112,
    },
    {
      id: 2,
      title: "Brauche ich eigentlich einen Kochstil?",
      description: "Beilage mit Fenchel, Orange und Lotuswurzel – kreativ und makrobiotisch.",
      image: "/recipes/2.jpg",
      prepTime: "20 Min.",
      cookTime: "40 Min.",
      difficulty: "Mittel",
      category: "Beilage",
      tags: ["Makrobiotik", "Gemüse"],
      likes: 96,
    },
    {
      id: 3,
      title: "Linsen-Brot-Pastete mit Wein",
      description: "Herzhaftes Rezept zur Resteverwertung mit Linsen, Brot und Zwiebeln.",
      image: "/recipes/3.jpg",
      prepTime: "20 Min.",
      cookTime: "40 Min.",
      difficulty: "Mittel",
      category: "Hauptgericht",
      tags: ["Vegan", "Makrobiotik"],
      likes: 142,
    },
    {
      id: 4,
      title: "Mousse von Erdnuss und Apfel",
      description: "Schnelles Dessert mit Erdnussmus und Apfelsaft – makrobiotisch inspiriert.",
      image: "/recipes/4.jpg",
      prepTime: "10 Min.",
      cookTime: "10 Min.",
      difficulty: "Einfach",
      category: "Dessert",
      tags: ["Makrobiotik", "Süßspeise"],
      likes: 78,
    },
  ]

  const categories = [
    "Alle Kategorien",
    "Aufstrich",
    "Beilage",
    "Hauptgericht",
    "Dessert",
    "Suppe",
    "Frühstück"
  ]

  const dietaryTags = [
    "Vegan",
    "Vegetarisch",
    "Makrobiotik",
    "Glutenfrei",
    "Süßspeise"
  ]

  return (
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full h-[40vh] overflow-hidden">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/blume.mp4" type="video/mp4" />
            Dein Browser unterstützt dieses Videoformat nicht.
          </video>
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Rezepte</h1>
              <p className="text-xl text-gray-200 max-w-[600px] mx-auto">
                Leckere, nährstoffreiche Rezepte mit Bio-Zutaten
              </p>
            </div>
          </div>
        </section>

        <div className="container px-4 md:px-6 mx-auto py-12">
          {/* Filter */}
          <div className="bg-green-50 rounded-xl p-6 mb-10">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input placeholder="Rezepte durchsuchen..." className="pl-10 bg-white" />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Kategorie wählen" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase().replace(" ", "-")}>
                        {category}
                      </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Schwierigkeitsgrad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Schwierigkeitsgrade</SelectItem>
                  <SelectItem value="einfach">Einfach</SelectItem>
                  <SelectItem value="mittel">Mittel</SelectItem>
                  <SelectItem value="fortgeschritten">Fortgeschritten</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium mb-2 flex items-center">
                <Filter className="h-4 w-4 mr-1" />
                Ernährungseigenschaften
              </h3>
              <div className="flex flex-wrap gap-2">
                {dietaryTags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-white hover:bg-green-100 cursor-pointer">
                      {tag}
                    </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Rezeptliste */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recipes.map((recipe) => (
                <Card key={recipe.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={recipe.image || "/placeholder.svg"}
                        alt={recipe.title}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {recipe.category}
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex gap-2 mb-2">
                      {recipe.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            {tag}
                          </Badge>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{recipe.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{recipe.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{recipe.prepTime} Vorbereitung • {recipe.cookTime} Kochen</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span>{recipe.likes}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 pb-5 px-5">
                    <Link href={`/rezepte/${recipe.id}`} className="w-full">
                      <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                        Zum Rezept
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
            ))}
          </div>
        </div>
      </div>
  )
}
