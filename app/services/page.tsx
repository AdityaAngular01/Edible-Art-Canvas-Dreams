import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicePackages } from "@/components/service-packages"
import { ServiceProcess } from "@/components/service-process"
import { ServiceFAQ } from "@/components/service-faq"

export const metadata = {
  title: "Services & Pricing | Shrutika Bansod Art Studio",
  description:
    "Explore custom cake designs and painting commissions by Shrutika Bansod. From wedding cakes to canvas art.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl font-light mb-6 text-balance">Services & Pricing</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From custom cake creations to original paintings, I offer personalized art services tailored to your
              vision. Every piece is crafted with passion, creativity, and attention to detail.
            </p>
          </div>
        </div>
      </div>
      <ServicePackages />
      <ServiceProcess />
      <ServiceFAQ />
      <Footer />
    </main>
  )
}
