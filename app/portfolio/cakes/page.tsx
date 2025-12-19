import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Custom Cakes | Shrutika Bansod",
  description: "Browse beautiful custom cake designs for weddings, birthdays, and special occasions.",
}

export default function CakesPage() {
  const cakes = [
    {
      title: "Elegant Wedding Cake",
      description: "Multi-tier wedding cake with floral decorations",
      image: "/elegant-wedding-cake-with-floral-design.jpg",
    },
    {
      title: "Birthday Celebration Cake",
      description: "Colorful birthday cake with custom theme",
      image: "/colorful-birthday-cake-custom-theme.jpg",
    },
    {
      title: "Floral Garden Cake",
      description: "Delicate cake adorned with edible flowers",
      image: "/floral-garden-cake-edible-flowers.jpg",
    },
    {
      title: "Modern Geometric Cake",
      description: "Contemporary design with bold patterns",
      image: "/modern-geometric-cake-bold-design.jpg",
    },
    {
      title: "Rustic Naked Cake",
      description: "Semi-naked cake with fresh berries and flowers",
      image: "/rustic-naked-cake-berries-flowers.jpg",
    },
    {
      title: "Chocolate Drip Cake",
      description: "Decadent chocolate cake with ganache drip",
      image: "/chocolate-drip-cake-ganache.jpg",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Gallery
            </Link>
          </Button>
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">Custom Cakes</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Each cake is a unique edible masterpiece, designed to make your celebration unforgettable. From elegant
              wedding cakes to fun birthday creations, every design is custom-made with premium ingredients.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cakes.map((cake, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg aspect-square bg-muted mb-4">
                  <img
                    src={cake.image || "/placeholder.svg"}
                    alt={cake.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{cake.title}</h3>
                <p className="text-muted-foreground">{cake.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
