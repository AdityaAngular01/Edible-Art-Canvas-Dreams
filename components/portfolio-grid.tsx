"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type Category = "all" | "cakes" | "paintings"

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")

  const categories = [
    { id: "all" as Category, label: "All Work" },
    { id: "cakes" as Category, label: "Cakes" },
    { id: "paintings" as Category, label: "Paintings" },
  ]

  const portfolioItems = [
    {
      category: "cakes",
      title: "Floral Wedding Cake",
      location: "3-Tier Custom Design",
      image: "/elegant-wedding-cake-with-floral-design.jpg",
      link: "/portfolio/cakes",
    },
    {
      category: "paintings",
      title: "Abstract Serenity",
      location: "Acrylic on Canvas",
      image: "/abstract-landscape-painting-peaceful-colors.jpg",
      link: "/portfolio/paintings",
    },
    {
      category: "cakes",
      title: "Birthday Celebration",
      location: "Custom Theme Cake",
      image: "/colorful-birthday-cake-custom-theme.jpg",
      link: "/portfolio/cakes",
    },
    {
      category: "paintings",
      title: "Sunset Dreams",
      location: "Oil on Canvas",
      image: "/vibrant-sunset-landscape-oil-painting.jpg",
      link: "/portfolio/paintings",
    },
    {
      category: "cakes",
      title: "Garden Romance",
      location: "Floral Design Cake",
      image: "/floral-garden-cake-edible-flowers.jpg",
      link: "/portfolio/cakes",
    },
    {
      category: "paintings",
      title: "Ocean Waves",
      location: "Watercolor Art",
      image: "/ocean-beach-waves-watercolor-painting.jpg",
      link: "/portfolio/paintings",
    },
    {
      category: "cakes",
      title: "Modern Geometric",
      location: "Contemporary Design",
      image: "/modern-geometric-cake-bold-design.jpg",
      link: "/portfolio/cakes",
    },
    {
      category: "paintings",
      title: "Botanical Study",
      location: "Mixed Media",
      image: "/botanical-flowers-leaves-detailed-painting.jpg",
      link: "/portfolio/paintings",
    },
    {
      category: "cakes",
      title: "Chocolate Elegance",
      location: "Luxury Dessert",
      image: "/luxury-chocolate-cake-elegant-decoration.jpg",
      link: "/portfolio/cakes",
    },
    {
      category: "paintings",
      title: "City Lights",
      location: "Acrylic Abstract",
      image: "/cityscape-skyline-night-lights-abstract-painting.jpg",
      link: "/portfolio/paintings",
    },
    {
      category: "cakes",
      title: "Rustic Charm",
      location: "Semi-Naked Cake",
      image: "/rustic-semi-naked-cake-fresh-berries.jpg",
      link: "/portfolio/cakes",
    },
    {
      category: "paintings",
      title: "Mountain Majesty",
      location: "Landscape Oil",
      image: "/mountain-landscape-scenic-nature-oil-painting.jpg",
      link: "/portfolio/paintings",
    },
  ]

  const filteredItems =
    activeCategory === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              onClick={() => setActiveCategory(cat.id)}
              className={activeCategory === cat.id ? "bg-accent text-accent-foreground" : ""}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group relative overflow-hidden rounded-sm aspect-[4/5] bg-muted"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-background translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <h3 className="font-serif text-xl font-light mb-1">{item.title}</h3>
                <p className="text-sm text-background/80">{item.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
