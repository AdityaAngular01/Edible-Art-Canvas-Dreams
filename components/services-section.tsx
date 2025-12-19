import { Card, CardContent } from "@/components/ui/card"
import { Camera, Users, Sparkles, Heart } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    description:
      "Full-day coverage capturing every precious moment of your special day, from preparation to reception.",
    features: ["8-12 hours coverage", "Second photographer", "Online gallery", "Print rights"],
  },
  {
    icon: Camera,
    title: "Portrait Sessions",
    description: "Professional portrait photography for individuals, couples, and families in stunning locations.",
    features: ["1-2 hours session", "Multiple locations", "Wardrobe changes", "Retouched images"],
  },
  {
    icon: Sparkles,
    title: "Special Events",
    description: "Document your celebrations, corporate events, and milestone moments with elegance and artistry.",
    features: ["Flexible hours", "Candid coverage", "Quick turnaround", "Digital delivery"],
  },
  {
    icon: Users,
    title: "Engagement Shoots",
    description: "Capture the excitement and romance of your engagement with a personalized photo session.",
    features: ["Scenic locations", "Outfit consultation", "Save-the-date cards", "Print package"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-6 text-balance">
            Our <span className="italic">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
            Tailored photography packages designed to meet your unique needs and preserve your most cherished memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
