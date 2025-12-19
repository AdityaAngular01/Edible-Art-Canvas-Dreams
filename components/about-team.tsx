export function AboutTeam() {
  const specializations = [
    {
      name: "Wedding Cakes",
      description: "Elegant multi-tier cakes designed to complement your wedding theme and wow your guests.",
      image: "/elegant-wedding-cake-multiple-tiers.jpg",
    },
    {
      name: "Celebration Cakes",
      description: "Custom themed cakes for birthdays, anniversaries, graduations, and all of life's special moments.",
      image: "/colorful-birthday-celebration-cake.jpg",
    },
    {
      name: "Canvas Paintings",
      description:
        "Original artwork in various styles, from abstract expressionism to realistic landscapes and florals.",
      image: "/colorful-abstract-canvas.png",
    },
    {
      name: "Portrait Art",
      description:
        "Hand-painted portraits that capture personality and emotion, perfect for gifts or family heirlooms.",
      image: "/painted-portrait-artwork-realistic.jpg",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-balance">My Specializations</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From edible art to canvas creations, I bring passion and expertise to every project I undertake.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specializations.map((item, index) => (
            <div key={index} className="text-center">
              <div className="relative aspect-square bg-muted rounded-sm overflow-hidden mb-6">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-serif text-2xl font-light mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
