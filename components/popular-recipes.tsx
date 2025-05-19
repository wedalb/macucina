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
      title: "Quinoa Buddha Bowl with Roasted Vegetables",
      description: "A nutritious and colorful bowl packed with protein and fresh vegetables.",
      image: "/placeholder.svg?height=400&width=600",
      prepTime: "15 min",
      cookTime: "25 min",
      difficulty: "Easy",
      tags: ["Vegan", "Gluten-Free"],
      likes: 245,
    },
    {
      id: 2,
      title: "Honey Glazed Salmon with Garlic Roasted Broccoli",
      description: "Wild-caught salmon with a sweet and savory glaze paired with crispy broccoli.",
      image: "/placeholder.svg?height=400&width=600",
      prepTime: "10 min",
      cookTime: "20 min",
      difficulty: "Medium",
      tags: ["Pescatarian", "High-Protein"],
      likes: 189,
    },
    {
      id: 3,
      title: "Homemade Sourdough Bread",
      description: "A rustic loaf with a crispy crust and soft interior using organic flour.",
      image: "/placeholder.svg?height=400&width=600",
      prepTime: "30 min",
      cookTime: "45 min",
      difficulty: "Advanced",
      tags: ["Baking", "Vegetarian"],
      likes: 312,
    },
    {
      id: 4,
      title: "Summer Berry Chia Pudding",
      description: "A refreshing breakfast or dessert loaded with antioxidants and omega-3s.",
      image: "/placeholder.svg?height=400&width=600",
      prepTime: "10 min",
      cookTime: "4 hrs",
      difficulty: "Easy",
      tags: ["Vegan", "No-Cook"],
      likes: 176,
    },
  ]

  return (
    <section className="py-16 bg-green-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Popular <span className="text-green-600">Recipes</span>
            </h2>
            <p className="text-gray-600 mt-2">Our most loved organic recipes</p>
          </div>
          <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0 mt-4 md:mt-0">
            View all recipes
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <Card key={recipe.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow">
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
                  <span className="sr-only">Save recipe</span>
                </Button>
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
                    <span>
                      {recipe.prepTime} prep • {recipe.cookTime} cook
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span>{recipe.likes}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0 pb-5 px-5">
                <Link href={`/recipes/${recipe.id}`} className="w-full">
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                    View Recipe
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
