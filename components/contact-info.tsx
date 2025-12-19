import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  const info = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@shrutikabansod.art",
      link: "mailto:hello@shrutikabansod.art",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: MapPin,
      label: "Studio Location",
      value: "Nagpur, Maharashtra\nIndia",
      link: null,
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Monday - Saturday: 10:00 AM - 7:00 PM\nSunday: By Appointment",
      link: null,
    },
  ]

  return (
    <div>
      <h2 className="font-serif text-3xl font-light mb-8">Contact Information</h2>

      <div className="space-y-8 mb-12">
        {info.map((item, index) => {
          const Icon = item.icon
          const content = (
            <div key={index} className="flex gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 shrink-0">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="font-medium whitespace-pre-line">{item.value}</p>
              </div>
            </div>
          )

          return item.link ? (
            <a key={index} href={item.link} className="block hover:opacity-70 transition-opacity">
              {content}
            </a>
          ) : (
            <div key={index}>{content}</div>
          )
        })}
      </div>

      <div className="bg-muted/30 rounded-sm p-8">
        <h3 className="font-serif text-xl font-light mb-4">What to Expect</h3>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-accent">•</span>
            <span>I respond to all inquiries within 24-48 hours</span>
          </li>
          <li className="flex gap-2">
            <span className="text-accent">•</span>
            <span>Initial consultation is free and flexible</span>
          </li>
          <li className="flex gap-2">
            <span className="text-accent">•</span>
            <span>Orders require a 50% deposit to begin work</span>
          </li>
          <li className="flex gap-2">
            <span className="text-accent">•</span>
            <span>Video calls available for detailed discussions</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
