import { MessageSquare, Calendar, Palette, Package } from "lucide-react"

export function ServiceProcess() {
  const steps = [
    {
      icon: MessageSquare,
      title: "1. Initial Consultation",
      description:
        "Share your vision with me through a conversation. We'll discuss themes, colors, flavors, sizes, and any specific details you have in mind.",
    },
    {
      icon: Calendar,
      title: "2. Design & Planning",
      description:
        "I'll create sketches or design mockups for your approval. For cakes, we can schedule a tasting. Once approved, we secure your date with a deposit.",
    },
    {
      icon: Palette,
      title: "3. Creation Process",
      description:
        "Your custom piece comes to life! I work with premium materials and carefully craft every detail. You'll receive progress updates throughout the creation process.",
    },
    {
      icon: Package,
      title: "4. Delivery & Enjoyment",
      description:
        "Cakes are delivered fresh and set up at your venue. Paintings are carefully packaged and delivered ready to display. Your satisfaction is my priority!",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-balance">How It Works</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A simple process that ensures your vision becomes reality, whether it's an edible masterpiece or canvas art.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-light mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
