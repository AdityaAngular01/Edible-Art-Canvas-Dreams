export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <div className="relative aspect-[3/4] lg:aspect-[4/5] rounded-sm overflow-hidden">
            <img src="/professional-photographer-with-camera-portrait.jpg" alt="About us" className="w-full h-full object-cover" />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-4xl md:text-6xl font-light mb-6 text-balance">
                About <span className="italic">Lumière</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  For over a decade, Lumière Studios has been capturing life's most precious moments with artistry and
                  authenticity. Our passion lies in creating timeless imagery that tells your unique story.
                </p>
                <p>
                  We believe that photography is more than just pressing a shutter—it's about understanding emotions,
                  anticipating moments, and preserving memories that will be treasured for generations.
                </p>
                <p>
                  Based in the heart of the city, we've had the privilege of documenting hundreds of weddings,
                  portraits, and special events. Each project is approached with fresh eyes and a commitment to
                  excellence.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="font-serif text-4xl md:text-5xl font-light text-accent mb-2">500+</div>
                <div className="text-sm text-muted-foreground tracking-wide">Weddings</div>
              </div>
              <div className="text-center border-x border-border">
                <div className="font-serif text-4xl md:text-5xl font-light text-accent mb-2">10+</div>
                <div className="text-sm text-muted-foreground tracking-wide">Years</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-4xl md:text-5xl font-light text-accent mb-2">1000+</div>
                <div className="text-sm text-muted-foreground tracking-wide">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
