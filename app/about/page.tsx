import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutStory } from "@/components/about-story"
import { AboutTeam } from "@/components/about-team"
import { AboutAwards } from "@/components/about-awards"

export const metadata = {
  title: "About Shrutika Bansod | Artist & Cake Designer",
  description: "Meet Shrutika Bansod, a passionate artist specializing in custom cake designs and original paintings.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <AboutStory />
      <AboutTeam />
      <AboutAwards />
      <Footer />
    </main>
  )
}
