export function AboutHero() {
  return (
    <section className="pt-32 pb-0 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-serif text-5xl md:text-6xl font-light mb-6 text-balance">About Shrutika</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              I'm a passionate artist who believes that creativity has no boundaries. Whether I'm designing an elaborate
              wedding cake or painting on canvas, I pour my heart into every creation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey began with a love for both culinary arts and fine arts. Today, I combine these passions to
              create edible masterpieces and stunning paintings that bring joy to people's lives. Each piece tells a
              story and celebrates life's special moments.
            </p>
          </div>
          <div className="relative aspect-[4/5] bg-muted rounded-sm overflow-hidden">
            <img
              src="/female-artist-in-studio-with-paintings-and-cakes.jpg"
              alt="Shrutika Bansod in her art studio"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
