import Link from "next/link"
import Image from "next/image"
import { CalendarDays, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function FeaturedPosts() {
  const posts = [
    {
      id: 1,
      title: "Die Vorteile saisonaler Ernährung",
      excerpt: "Warum saisonales Obst und Gemüse besser für Gesundheit, Umwelt und Geldbeutel ist.",
      image: "/placeholder.svg?height=400&width=600",
      date: "15. Mai 2023",
      readTime: "5 Min. Lesezeit",
      category: "Ernährung",
    },
    {
      id: 2,
      title: "So startest du deinen Bio-Garten",
      excerpt: "Ein Guide für Einsteiger zum Anbau von Gemüse, Kräutern und Obst zu Hause.",
      image: "/placeholder.svg?height=400&width=600",
      date: "28. April 2023",
      readTime: "8 Min. Lesezeit",
      category: "Garten",
    },
    {
      id: 3,
      title: "Bio-Siegel verstehen",
      excerpt: "So liest du Bio-Etiketten richtig und triffst bessere Kaufentscheidungen.",
      image: "/placeholder.svg?height=400&width=600",
      date: "10. April 2023",
      readTime: "6 Min. Lesezeit",
      category: "Lebensmittelwissen",
    },
  ]

  return (
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Neues im <span className="text-green-600">Blog</span>
              </h2>
              <p className="text-gray-600 mt-2">
                Einblicke, Tipps und Geschichten rund um nachhaltiges Leben
              </p>
            </div>
            <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0 mt-4 md:mt-0">
              Alle Beiträge ansehen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
                <Card
                    key={post.id}
                    className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow"
                >
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
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
            ))}
          </div>
        </div>
      </section>
  )
}
