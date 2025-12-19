"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { BookingModal } from "@/components/booking-modal"
import { useState } from "react"

export function CallToAction() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <>
      <section className="py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
              Ready to Create Something Special?
            </h2>
            <p className="text-lg mb-10 leading-relaxed opacity-90">
              Whether you need a custom cake for your celebration or a unique painting for your space, let's bring your
              vision to life. Get in touch today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-base" onClick={() => setIsBookingOpen(true)}>
                Order Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base border-accent-foreground/20 hover:bg-accent-foreground/10 bg-transparent"
              >
                <Link href="/portfolio">View Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}
