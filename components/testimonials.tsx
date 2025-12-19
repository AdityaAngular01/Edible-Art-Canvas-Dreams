"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Birthday Client",
      content:
        "Shrutika created the most beautiful birthday cake for my daughter! The design was absolutely stunning and tasted even better than it looked. Everyone at the party was amazed. Highly recommend!",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Rajesh Patil",
      role: "Art Collector",
      content:
        "I commissioned a custom painting from Shrutika for my living room, and it's the centerpiece of my home now. Her artistic vision and attention to detail are exceptional. A true artist!",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Anita Deshmukh",
      role: "Wedding Client",
      content:
        "Our wedding cake was a masterpiece! Shrutika brought our vision to life with incredible precision. The design was elegant, unique, and the flavor was outstanding. Thank you for making our day special!",
      image: "/placeholder-user.jpg",
    },
  ]

  const next = () => setActiveIndex((activeIndex + 1) % testimonials.length)
  const prev = () => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">Happy Clients</h2>
            <p className="text-lg text-muted-foreground">See what people are saying about my work</p>
          </div>

          <div className="relative">
            <div className="bg-muted/20 rounded-lg p-12 md:p-16">
              <Quote className="h-12 w-12 text-accent/30 mb-8" />
              <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 text-balance">
                {testimonials[activeIndex].content}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].image || "/placeholder.svg"}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{testimonials[activeIndex].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <Button variant="outline" size="icon" onClick={prev} aria-label="Previous testimonial">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activeIndex ? "bg-accent" : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <Button variant="outline" size="icon" onClick={next} aria-label="Next testimonial">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
