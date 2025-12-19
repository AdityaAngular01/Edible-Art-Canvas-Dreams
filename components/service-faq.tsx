"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How far in advance should I order?",
      answer:
        "For wedding cakes and large events, I recommend booking 2-3 months in advance. Custom paintings typically need 4-6 weeks. Celebration cakes can usually be completed within 1-2 weeks depending on complexity.",
    },
    {
      question: "What cake flavors do you offer?",
      answer:
        "I offer classic flavors like vanilla, chocolate, red velvet, and lemon, as well as unique options like salted caramel, raspberry champagne, and cookies & cream. Custom flavor combinations are always welcome!",
    },
    {
      question: "Do you accommodate dietary restrictions?",
      answer:
        "Yes! I can create gluten-free, vegan, and sugar-free cake options. Please let me know about any dietary requirements during our consultation so I can ensure everyone can enjoy the cake.",
    },
    {
      question: "What painting styles do you work in?",
      answer:
        "I work in various styles including realistic, abstract, impressionistic, and contemporary. During our consultation, I'll show you my portfolio and we can discuss which style best suits your vision.",
    },
    {
      question: "Can you recreate a painting from a photo?",
      answer:
        "I love creating paintings from photographs. Whether it's a family portrait, landscape, or pet painting, just provide clear, high-resolution photos and I'll bring them to life on canvas.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Deposits are non-refundable as they secure your date and materials. However, you can reschedule with at least 2 weeks notice for cakes or 3 weeks for paintings. Full cancellations forfeit the deposit.",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-12 text-center text-balance">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-sm overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
                >
                  <span className="font-medium pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
