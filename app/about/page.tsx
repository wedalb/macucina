import Image from "next/image"
import { Instagram, Twitter, Facebook, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Newsletter from "@/components/newsletter"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="About page header"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h1>
            <p className="text-xl text-gray-200 max-w-[600px] mx-auto">
              My journey with organic food and sustainable living
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Emma in her garden"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">
                Hello, I'm <span className="text-green-600">Emma</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to my little corner of the internet! I'm a certified nutritionist, organic food advocate, and
                passionate home cook based in Portland, Oregon. My journey into organic cooking began 10 years ago when
                I discovered how food choices impact our health and the environment.
              </p>
              <p className="text-gray-600 leading-relaxed">
                After completing my degree in Nutrition Science, I worked in several farm-to-table restaurants before
                starting this blog to share my knowledge and recipes with a wider audience. I believe that healthy
                eating should be joyful, not restrictive, and that small changes in our food choices can make a big
                difference for our planet.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not in the kitchen testing recipes or tending to my garden, you'll find me hiking with my dog
                Charlie, browsing local farmers' markets, or teaching cooking classes in my community.
              </p>
              <div className="flex space-x-4">
                <Button size="icon" variant="ghost" className="rounded-full">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button size="icon" variant="ghost" className="rounded-full">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button size="icon" variant="ghost" className="rounded-full">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button size="icon" variant="ghost" className="rounded-full">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </div>
            </div>
          </div>

          {/* My Story */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">My Story</h2>
            <div className="prose prose-green max-w-none">
              <p>
                My relationship with food wasn't always healthy. In my early twenties, I struggled with fad diets and
                processed convenience foods while working long hours in a corporate job. A wake-up call came when I was
                diagnosed with several food sensitivities and chronic fatigue.
              </p>
              <p>
                This health crisis became my turning point. I began researching nutrition, enrolled in courses, and
                completely transformed my diet. The improvement in my health was dramatic, and I became fascinated by
                the power of whole, organic foods.
              </p>
              <p>
                In 2015, I took a leap of faith, left my corporate career, and pursued formal education in nutrition. I
                also started volunteering at a local organic farm, where I learned about sustainable farming practices
                and developed a deep appreciation for knowing where my food comes from.
              </p>
              <p>
                This blog began as a personal project to document my recipes and learnings, but it quickly grew into
                something much bigger. Today, I'm honored to share this journey with thousands of readers who are also
                interested in nourishing their bodies while respecting our planet.
              </p>
              <p>
                My approach to food is simple: eat real, whole foods that are grown with care for the environment. I
                believe in balance rather than restriction, and in making sustainable choices whenever possible.
              </p>
            </div>
          </div>

          {/* My Philosophy */}
          <div className="bg-green-50 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">My Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-green-600 text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Food as Medicine</h3>
                <p className="text-gray-600">
                  I believe that what we eat directly impacts our health and wellbeing. Choosing nutrient-dense, organic
                  foods is one of the most powerful ways to prevent illness and support our bodies.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-green-600 text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Sustainability First</h3>
                <p className="text-gray-600">
                  Our food choices affect not just our health, but the health of our planet. I prioritize seasonal,
                  local, and organically grown ingredients to reduce environmental impact.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-green-600 text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Joy in Eating</h3>
                <p className="text-gray-600">
                  Healthy eating should be a pleasure, not a chore. I focus on creating recipes that are both nutritious
                  and delicious, proving that you don't have to sacrifice taste for health.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Certifications & Education</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Certified Nutritionist</h3>
                <p className="text-gray-600 mb-2">American Nutrition Association</p>
                <p className="text-sm text-gray-500">2016 - Present</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Master's in Nutrition Science</h3>
                <p className="text-gray-600 mb-2">University of Washington</p>
                <p className="text-sm text-gray-500">2014 - 2016</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Plant-Based Cooking Certificate</h3>
                <p className="text-gray-600 mb-2">Culinary Institute of America</p>
                <p className="text-sm text-gray-500">2017</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Sustainable Agriculture Program</h3>
                <p className="text-gray-600 mb-2">Oregon State University</p>
                <p className="text-sm text-gray-500">2018</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-green-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have a question, suggestion, or just want to say hello? I'd love to hear from you! You can reach me
                through social media or send me an email.
              </p>
            </div>
            <div className="flex justify-center space-x-6">
              <Button className="bg-green-600 hover:bg-green-700">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Follow on Instagram
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
