import { notFound } from "next/navigation"
import Image from "next/image"
import { CalendarDays, Clock, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import ContactSection from "@/components/contact-section"
import blogPosts from "@/data/blogs.json"

interface BlogPost {
    id: number
    title: string
    author: string
    date: string
    category: string
    image: string
    excerpt: string
    content: string
    tags: string[]
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
    const post = blogPosts.find((p) => p.id === Number(params.id))

    if (!post) return notFound()

    // Estimate read time based on content length (roughly 200 words per minute)
    const wordCount = post.content.split(/\s+/).length
    const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} Min. Lesezeit`

    return (
        <div className="flex flex-col min-h-screen">
            <div className="container mx-auto py-12 px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <Image 
                        src={post.image} 
                        alt={post.title} 
                        width={800} 
                        height={400} 
                        className="rounded-xl object-cover w-full mb-6" 
                    />

                    <div className="mb-4">
                        <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded inline-block mb-2">
                            {post.category}
                        </div>
                        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                        <div className="flex items-center gap-1">
                            <CalendarDays className="h-4 w-4" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Tag className="h-4 w-4" />
                            <span>{post.author}</span>
                        </div>
                    </div>

                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}

                    <article className="prose prose-green max-w-none mb-12">
                        {post.content.split('\n\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </article>
                </div>
            </div>
            <ContactSection />
        </div>
    )
}
