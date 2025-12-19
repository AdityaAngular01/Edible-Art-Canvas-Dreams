import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export const metadata = {
  title: "Contact Shrutika Bansod | Custom Orders & Commissions",
  description: "Get in touch to order a custom cake or commission a painting. I'd love to bring your vision to life.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl font-light mb-6 text-balance">Get In Touch</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to order a custom cake or commission a painting? I'd love to hear about your vision. Fill out the
              form below or reach out directly.
            </p>
          </div>
        </div>
      </div>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
