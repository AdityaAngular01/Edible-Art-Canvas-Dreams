import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PortfolioGrid } from "@/components/portfolio-grid"

export const metadata = {
  title: "Gallery | Shrutika Bansod",
  description: "Explore my portfolio of custom cake designs and original paintings.",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32 pb-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">My Gallery</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A collection of my custom cake designs and original paintings. Each piece is crafted with love,
              creativity, and attention to detail.
            </p>
          </div>
        </div>
      </div>
      <PortfolioGrid />
      <Footer />
    </main>
  )
}
