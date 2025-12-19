import { Award, Star, Trophy } from "lucide-react"

export function AboutAwards() {
  const awards = [
    {
      icon: Trophy,
      year: "2024",
      title: "Best Cake Designer",
      organization: "Regional Culinary Arts Competition",
    },
    {
      icon: Star,
      year: "2023",
      title: "Emerging Artist Award",
      organization: "Local Art Gallery Exhibition",
    },
    {
      icon: Award,
      year: "2023",
      title: "People's Choice Award",
      organization: "Community Art & Food Festival",
    },
    {
      icon: Trophy,
      year: "2022",
      title: "Creative Excellence",
      organization: "Wedding Industry Awards",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-balance">Awards & Recognition</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm honored to be recognized for my work in both culinary and fine arts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => {
            const Icon = award.icon
            return (
              <div key={index} className="text-center p-6 border border-border rounded-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <div className="text-sm text-muted-foreground mb-2">{award.year}</div>
                <h3 className="font-serif text-lg font-light mb-2">{award.title}</h3>
                <p className="text-sm text-muted-foreground">{award.organization}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
