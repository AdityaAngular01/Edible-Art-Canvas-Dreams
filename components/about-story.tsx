export function AboutStory() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-12 text-center text-balance">My Story</h2>

          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              Art has always been my language. From childhood, I found myself equally drawn to the kitchen and the
              canvas—two spaces where imagination becomes reality through skilled hands and patient dedication.
            </p>

            <p>
              After studying fine arts and completing professional pastry training, I realized I didn't have to choose
              between my two passions. In 2018, I started creating custom cakes and paintings from my home studio,
              combining technical skill with artistic vision.
            </p>

            <p>
              What began as a creative outlet quickly grew into something more meaningful. Clients weren't just ordering
              cakes or commissioning paintings—they were inviting me to be part of their celebrations, their homes,
              their memories. That responsibility and trust drives everything I create.
            </p>

            <p>
              Today, my work spans from multi-tier wedding cakes adorned with hand-painted details to large canvas
              paintings that bring color and life to living spaces. Every project is unique, personal, and crafted with
              the same care whether it's meant to be displayed or devoured.
            </p>

            <p>
              I believe that art should be accessible, joyful, and meaningful. Whether you're celebrating with a
              beautifully designed cake or decorating your space with original artwork, I'm here to bring your vision to
              life.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 text-center">
            <div>
              <div className="text-4xl font-light text-accent mb-2">6+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Years Creating</div>
            </div>
            <div>
              <div className="text-4xl font-light text-accent mb-2">300+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-light text-accent mb-2">500+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Creations Made</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
