"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookingModal } from "@/components/booking-modal"
import { useState } from "react"

export function HeroSection() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/colorful-artistic-cake-and-painting-art-background.jpg" alt="Hero background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-secondary/40 to-accent/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight text-balance">
                Edible Art &
                <br />
                <span className="italic bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
                  Canvas Dreams
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed text-pretty">
                Welcome to the creative world of Shrutika Bansod. Where custom cake designs meet stunning paintings,
                crafted with passion and artistry.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                <Link href="#portfolio">View Gallery</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 px-8"
                onClick={() => setIsBookingOpen(true)}
              >
                Order Now
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 text-white/80">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-12 bg-white/30 animate-pulse" />
          </div>
        </div>
      </section>

      {/* BookingModal Component */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}
