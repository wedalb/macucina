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
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Fresh organic vegetables and fruits"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-2">
                <Leaf className="h-4 w-4 mr-1" />
                <span>Organic Living</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                Nourish Your Body, <span className="text-green-400">Nurture the Earth</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-[600px]">
                Discover delicious recipes and insights about organic food that's good for you and the planet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Explore Recipes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  Read the Blog
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 bg-green-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            Explore <span className="text-green-600">Categories</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Breakfast", image: "/placeholder.svg?height=300&width=300" },
              { name: "Salads", image: "/placeholder.svg?height=300&width=300" },
              { name: "Main Dishes", image: "/placeholder.svg?height=300&width=300" },
              { name: "Desserts", image: "/placeholder.svg?height=300&width=300" },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/recipes/${category.name.toLowerCase().replace(" ", "-")}`}
                className="group relative overflow-hidden rounded-xl aspect-square transition-all hover:scale-[1.03]"
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-medium text-white">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <FeaturedPosts />

      {/* Popular Recipes */}
      <PopularRecipes />

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="About me" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">
                Hello, I'm <span className="text-green-600">Emma</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                I'm a certified nutritionist, organic food advocate, and home cook passionate about creating delicious
                meals that nourish both body and soul. My journey into organic cooking began 10 years ago when I
                discovered how food choices impact our health and the environment.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through this blog, I share my favorite recipes, cooking tips, and insights about sustainable living. I
                believe that healthy eating should be joyful, not restrictive.
              </p>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Read My Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  )
}
