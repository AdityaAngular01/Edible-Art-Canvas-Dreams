"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const portfolioItems = [
  {
    id: 1,
    category: "Wedding",
    image: "/romantic-wedding-ceremony-outdoor.jpg",
    title: "Sarah & James",
    location: "Garden Estate",
  },
  {
    id: 2,
    category: "Portrait",
    image: "/elegant-portrait-woman-natural-light.jpg",
    title: "Emma's Portrait",
    location: "Studio Session",
  },
  {
    id: 3,
    category: "Wedding",
    image: "/bride-getting-ready-wedding-details.jpg",
    title: "The Details",
    location: "Countryside Manor",
  },
  {
    id: 4,
    category: "Event",
    image: "/celebration-event-photography-candid.jpg",
    title: "Anniversary Gala",
    location: "Grand Ballroom",
  },
  {
    id: 5,
    category: "Wedding",
    image: "/couple-golden-hour-wedding-photography.jpg",
    title: "Golden Hour",
    location: "Beach Ceremony",
  },
  {
    id: 6,
    category: "Portrait",
    image: "/family-portrait-outdoor-natural.jpg",
    title: "The Johnsons",
    location: "Park Session",
  },
]

export function PortfolioSection() {
  const [filter, setFilter] = useState("All")
  const categories = ["All", "Wedding", "Portrait", "Event"]

  const filteredItems = filter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === filter)

  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-6 text-balance">
            Our <span className="italic">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
            Every photograph tells a story. Explore our collection of moments captured with care, creativity, and
            attention to detail.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={filter === category ? "bg-primary text-primary-foreground" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <p className="text-xs tracking-widest uppercase mb-2 text-white/80">{item.category}</p>
                  <h3 className="font-serif text-2xl mb-1">{item.title}</h3>
                  <p className="text-sm text-white/90">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
