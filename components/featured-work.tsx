import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FeaturedWork() {
  const featured = [
    {
      title: "Custom Cakes",
      description: "Delicious edible art for every celebration",
      image: "/beautiful-custom-decorated-cake-with-flowers.jpg",
      link: "/portfolio/cakes",
    },
    {
      title: "Paintings",
      description: "Original artworks that bring spaces to life",
      image: "/colorful-abstract-painting-art-on-canvas.jpg",
      link: "/portfolio/paintings",
    },
    {
      title: "Special Orders",
      description: "Unique creations tailored to your vision",
      image: "/elegant-wedding-cake-with-artistic-design.jpg",
      link: "/portfolio/special",
    },
  ]

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">Featured Creations</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore a collection of my latest cake designs and paintings, each piece crafted with love, creativity, and
            attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group relative overflow-hidden rounded-lg aspect-[4/5] bg-muted"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-background">
                <h3 className="font-serif text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-background/90 mb-4">{item.description}</p>
                <div className="flex items-center gap-2 text-sm uppercase tracking-wider">
                  View Gallery <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button asChild variant="outline" size="lg">
            <Link href="/portfolio">
              View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
