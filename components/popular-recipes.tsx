import Link from "next/link"
import Image from "next/image"
import { Clock, Bookmark, ThumbsUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PopularRecipes() {
  const recipes = [
    {
      id: 1,
      title: "Erdnuss-Apfel und Miso Aufstrich",
      description: "Ein leckeres Rezept.",
      image: "/recipes/1.jpg?height=400&width=600",
      prepTime: "15 min",
      cookTime: "25 min",
      difficulty: "Einfach",
      tags: ["Vegan", "Gluten-Frei"],
      likes: 120,
    },
    {
      id: 2,
      title: "Brauche ich eigentlich einen Kochstil?",
      description: "(Rezept für eine außergewöhnliche Beilage mit Lotuswurzel)",
      image: "/recipes/2.jpg",
      prepTime: "20 min",
      cookTime: "40 min",
      difficulty: "Medium",
      tags: ["Makrobiotik", "Außergewöhnlich"],
      likes: 86,
    },
    {
      id: 3,
      title: "Linsen-Brot-Pastete mit Wein, Zwiebeln und Lorbeer",
      description: "Küchenrecycling",
      image: "/recipes/3.jpg",
      prepTime: "20 min",
      cookTime: "40 min",
      difficulty: "Medium",
      tags: ["Makrobiotik", "Resteverwertung"],
      likes: 97,
    },
    {
      id: 4,
      title: "Mousse von Erdnuss und Apfel",
      description: "Leckeres Dessert",
      image: "/recipes/4.jpg",
      prepTime: "20 min",
      cookTime: "40 min",
      difficulty: "Medium",
      tags: ["Makrobiotik", "Dessert"],
      likes: 78,
    },
  ]

  return (
      <section className="py-16 bg-green-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Beliebte <span className="text-green-600">Rezepte</span>
              </h2>
              <p className="text-gray-600 mt-2">Unsere beliebtesten makrobiotischen Gerichte</p>
            </div>
            <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0 mt-4 md:mt-0">
              Alle Rezepte anzeigen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recipes.map((recipe) => (
                <Card
                    key={recipe.id}
                    className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={recipe.image || "/placeholder.svg"}
                        alt={recipe.title}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                    />
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full h-8 w-8"
                    >
                      <Bookmark className="h-4 w-4" />
                      <span className="sr-only">Rezept speichern</span>
                    </Button>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex gap-2 mb-2">
                      {recipe.tags.map((tag) => (
                          <Badge
                              key={tag}
                              variant="outline"
                              className="bg-green-50 text-green-700 border-green-200"
                          >
                            {tag}
                          </Badge>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{recipe.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{recipe.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>
                      {recipe.prepTime} Vorbereitung • {recipe.cookTime} Kochen
                    </span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span>{recipe.likes}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 pb-5 px-5">
                    <Link href={`/rezepte/${recipe.id}`} className="w-full">
                      <Button
                          variant="outline"
                          className="w-full border-green-600 text-green-600 hover:bg-green-50"
                      >
                        Zum Rezept
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
            ))}
          </div>
        </div>
      </section>
  )
}
