import { Palette, Cake, Sparkles, Heart } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Palette,
      title: "Artistic Excellence",
      description:
        "Every creation is a masterpiece, combining technical skill with creative vision to bring your ideas to life.",
    },
    {
      icon: Cake,
      title: "Premium Ingredients",
      description:
        "Only the finest, freshest ingredients go into every cake, ensuring delicious taste alongside stunning visuals.",
    },
    {
      icon: Sparkles,
      title: "Custom Designs",
      description:
        "Each piece is uniquely crafted to match your vision, from intricate cake decorations to personalized paintings.",
    },
    {
      icon: Heart,
      title: "Passion & Dedication",
      description:
        "Every project receives personal attention and care, ensuring your celebration or space is truly special.",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">Why Choose Shrutika</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With years of experience in both cake artistry and painting, I bring passion, creativity, and dedication to
            every custom creation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
