"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookingModal } from "@/components/booking-modal"
import { useState } from "react"

export function ServicePackages() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<string>("")

  const handleBookNow = (packageType: string) => {
    setSelectedPackage(packageType)
    setIsBookingOpen(true)
  }

  const packages = [
    {
      name: "Wedding Cake",
      price: "From $500",
      description: "Custom designed cakes for your special day",
      type: "wedding-cake",
      features: [
        "Custom design consultation",
        "Serves 100-150 guests",
        "Multiple tier options",
        "Premium ingredients",
        "Flavor tasting included",
        "Delivery & setup included",
      ],
      popular: true,
    },
    {
      name: "Celebration Cake",
      price: "From $150",
      description: "Perfect for birthdays, anniversaries, and parties",
      type: "celebration-cake",
      features: [
        "Custom theme design",
        "Serves 15-30 guests",
        "Your choice of flavors",
        "Edible decorations",
        "Personalized message",
        "Local pickup or delivery",
      ],
      popular: false,
    },
    {
      name: "Canvas Painting",
      price: "From $300",
      description: "Original artwork created just for you",
      type: "canvas-painting",
      features: [
        "Custom size options",
        "Your choice of subject/theme",
        "Professional quality paints",
        "Signed original artwork",
        "Ready to hang",
        "4-6 week completion time",
      ],
      popular: false,
    },
    {
      name: "Portrait Painting",
      price: "From $500",
      description: "Hand-painted portraits from photos",
      type: "portrait-painting",
      features: [
        "Photorealistic or stylized",
        "Multiple size options available",
        "Work from your photos",
        "Revisions included",
        "Museum-quality canvas",
        "Perfect gift option",
      ],
      popular: false,
    },
  ]

  return (
    <>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={pkg.popular ? "border-accent shadow-lg" : ""}>
                {pkg.popular && (
                  <div className="bg-accent text-accent-foreground text-center py-2 text-sm font-medium uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-serif text-2xl font-light">{pkg.name}</CardTitle>
                  <div className="text-3xl font-light mt-4">{pkg.price}</div>
                  <CardDescription className="mt-2">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={pkg.popular ? "default" : "outline"}
                    onClick={() => handleBookNow(pkg.type)}
                  >
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Have a unique idea? I create custom cakes and paintings for any occasion.
            </p>
            <Button variant="outline" onClick={() => handleBookNow("custom")}>
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preSelectedPackage={selectedPackage}
      />
    </>
  )
}
