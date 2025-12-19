import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Paintings | Shrutika Bansod",
  description: "Explore original paintings and artwork by Shrutika Bansod.",
}

export default function PaintingsPage() {
  const paintings = [
    {
      title: "Abstract Burst",
      description: "Vibrant abstract composition with bold colors",
      image: "/abstract-burst-vibrant-colors-painting.jpg",
    },
    {
      title: "Serene Landscape",
      description: "Peaceful landscape with mountains and sky",
      image: "/serene-landscape-mountains-sky-painting.jpg",
    },
    {
      title: "Floral Symphony",
      description: "Beautiful floral arrangement on canvas",
      image: "/floral-symphony-arrangement-canvas.jpg",
    },
    {
      title: "Ocean Waves",
      description: "Dynamic seascape with crashing waves",
      image: "/ocean-waves-dynamic-seascape-painting.jpg",
    },
    {
      title: "Urban Dreams",
      description: "City skyline at sunset",
      image: "/urban-dreams-city-skyline-sunset.jpg",
    },
    {
      title: "Nature's Palette",
      description: "Mixed media nature-inspired artwork",
      image: "/nature-palette-mixed-media-artwork.jpg",
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
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">Original Paintings</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover original artwork that brings color and life to any space. From abstract compositions to serene
              landscapes, each painting is created with passion and artistic vision.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paintings.map((painting, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-muted mb-4">
                  <img
                    src={painting.image || "/placeholder.svg"}
                    alt={painting.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{painting.title}</h3>
                <p className="text-muted-foreground">{painting.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
