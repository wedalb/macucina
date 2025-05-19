import Link from "next/link"
import Image from "next/image"
import { Clock, Filter, Search, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RecipesPage() {
  const recipes = [
    {
      id: 1,
      title: "Quinoa Buddha Bowl with Roasted Vegetables",
      description: "A nutritious and colorful bowl packed with protein and fresh vegetables.",
      image: "/placeholder.svg?height=400&width=600",
      prepTime: "15 min",
      cookTime: "25 min",
      difficulty: "Easy",
      category: "Main Dish",
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
      category: "Main Dish",
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
      category: "Baking",
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
      category: "Breakfast",
      tags: ["Vegan", "No-Cook"],
      likes: 176,
    },
    {
      id: 5,
      title: "Mediterranean Chickpea Salad",
      description: "A protein-rich salad with fresh vegetables, herbs, and a zesty lemon dressing.",
      image: "/placeholder.svg?height=400&width=600",
      prepTime: "15 min",
      cookTime: "0 min",
      difficulty: "Easy",
      category: "Salad",
      tags: ["Vegan", "No-Cook"],
      likes: 142,
    },
    {
      id: 6,
      title: "Spiced Pumpkin Soup",
      description: "A warming soup made with organic pumpkin, aromatic spices, and coconut milk.",
      image: "/placeholder.svg?height=400&width=600",
      prepTime: "15 min",
      cookTime: "30 min",
      difficulty: "Medium",
      category: "Soup",
      tags: ["Vegan", "Gluten-Free"],
      likes: 198,
    },
    {
      id: 7,
      title: "Almond Flour Chocolate Chip Cookies",
      description: "Chewy, delicious cookies made with almond flour and organic dark chocolate.",
      image: "/placeholder.svg?height=400&width=600",
      prepTime: "15 min",
      cookTime: "12 min",
      difficulty: "Easy",
      category: "Dessert",
      tags: ["Gluten-Free", "Vegetarian"],
      likes: 231,
    },
    {
      id: 8,
      title: "Avocado Toast with Poached Eggs",
      description: "The ultimate breakfast featuring creamy avocado and perfectly poached eggs.",
      image: "/placeholder.svg?height=400&width=600",
      prepTime: "10 min",
      cookTime: "5 min",
      difficulty: "Medium",
      category: "Breakfast",
      tags: ["Vegetarian", "High-Protein"],
      likes: 287,
    },
  ]

  const categories = ["All Categories", "Breakfast", "Main Dish", "Salad", "Soup", "Dessert", "Baking", "Snack"]

  const dietaryTags = [
    "Vegan",
    "Vegetarian",
    "Gluten-Free",
    "Dairy-Free",
    "Pescatarian",
    "High-Protein",
    "Low-Carb",
    "No-Cook",
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Recipes header image"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Organic Recipes</h1>
            <p className="text-xl text-gray-200 max-w-[600px] mx-auto">
              Delicious, nutritious recipes made with organic ingredients
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 mx-auto py-12">
        {/* Search and Filter */}
        <div className="bg-green-50 rounded-xl p-6 mb-10">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input placeholder="Search recipes..." className="pl-10 bg-white" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
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
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Difficulties</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2 flex items-center">
              <Filter className="h-4 w-4 mr-1" />
              Dietary Preferences
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

        {/* Recipe Grid */}
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

        {/* Pagination */}
        <div className="mt-10 flex justify-center">
          <Button variant="outline" className="mr-2">
            Previous
          </Button>
          <Button variant="outline" className="bg-green-50">
            1
          </Button>
          <Button variant="outline" className="mx-1">
            2
          </Button>
          <Button variant="outline" className="mx-1">
            3
          </Button>
          <Button variant="outline" className="ml-2">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
