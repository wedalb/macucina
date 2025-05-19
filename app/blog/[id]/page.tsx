import { notFound } from "next/navigation"
import Image from "next/image"
import { CalendarDays, Clock } from "lucide-react"



interface BlogPost {
    content: any;
    id: number
    title: string
    author: string
    date: string
    category: string
    image: string
    excerpt: string
    readTime: string
    tags: string[]
}

const posts: BlogPost[] = [
    {
        id: 1,
        title: "Erdnuss-Apfel und Miso Aufstrich",
        author: "Nora Schubring",
        date: "07.11.2021",
        category: "Rezepte",
        image: "/olga.jpg",
        excerpt: "Geschmacklich runder Brotaufstrich, eine schöne Mischung aus salzig, süß und sauer!",
        readTime: "3 min read",
        tags: ["Aufstrich", "Makrobiotik", "Miso"],
        content: "Alle Zutaten bis auf die gerösteten Erdnüsse in einer Schüssel cremig rühren. Mit den Nüssen garnieren und zu getoastetem Vollkornbrot genießen.",
    },
    {
        id: 2,
        title: "Brauche ich eigentlich einen Kochstil?",
        author: "Nora Schubring",
        date: "18.10.2021",
        category: "Rezepte",
        image: "/olga.jpg",
        excerpt: "Ein Rezept für eine außergewöhnliche Beilage mit Lotuswurzel.",
        readTime: "6 min read",
        tags: ["Fenchel", "Orange", "Hatcho Miso"],
        content: "Wie kann man ein Gericht anpassen, das im Winter gegessen wird, ohne Fleisch? Diese Frage beantwortet dieses kreative Rezept.",
    },
    {
        id: 3,
        title: "Frische Kräuter",
        author: "Nora Schubring",
        date: "10.10.2021",
        category: "Lesetipps",
        image: "/olga.jpg",
        excerpt: "Makrobiotik und die feine Unterscheidung zwischen Kräutern und Gewürzen.",
        readTime: "5 min read",
        tags: ["Kräuter", "Makrobiotik", "Yin Yang"],
        content: "Warum frische Kräuter nicht getrocknet verwendet werden sollten und welche energetischen Wirkungen sie haben.",
    },
    {
        id: 4,
        title: "Makrobiotik und Kindheit",
        author: "Nora Schubring",
        date: "10.10.2021",
        category: "Lesetipps",
        image: "/olga.jpg",
        excerpt: "Ernährung in der frühen Kindheit aus Sicht der Makrobiotik.",
        readTime: "4 min read",
        tags: ["Kindheit", "Eltern", "Makrobiotik"],
        content: "Wie man mit makrobiotischer Ernährung Verantwortung für die nächste Generation übernimmt.",
    },
    {
        id: 5,
        title: "Linsen-Brot-Pastete mit Wein",
        author: "Nora Schubring",
        date: "04.10.2021",
        category: "Rezepte",
        image: "/olga.jpg",
        excerpt: "Praktisches Rezept zur Resteverwertung mit dunklen Linsen.",
        readTime: "6 min read",
        tags: ["Pastete", "Linsen", "Brot"],
        content: "Eine herzhafte Brotform mit Linsen, altem Brot, Oliven und einem Schuss Rotwein – perfekt zum Schmoren und Einfrieren.",
    },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
    const post = posts.find((p) => p.id === Number(params.id))

    if (!post) return notFound()

    return (
        <div className="max-w-3xl mx-auto py-12 px-4 md:px-6">
            <Image src={post.image} alt={post.title} width={800} height={400} className="rounded-xl object-cover w-full mb-6" />
            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1"><CalendarDays className="h-4 w-4" /><span>{post.date}</span></div>
                <div className="flex items-center gap-1"><Clock className="h-4 w-4" /><span>{post.readTime}</span></div>
            </div>
            <article className="prose prose-green max-w-none">
                <p>{post.content}</p>
            </article>
        </div>
    )
}