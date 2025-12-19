"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.")
  }

  return (
    <div>
      <h2 className="font-serif text-3xl font-light mb-8">Send Me a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" required className="mt-2" />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" required className="mt-2" />
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required className="mt-2" />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" className="mt-2" />
        </div>

        <div>
          <Label htmlFor="service">Service Interested In</Label>
          <Select required>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wedding-cake">Wedding Cake</SelectItem>
              <SelectItem value="celebration-cake">Celebration Cake</SelectItem>
              <SelectItem value="canvas-painting">Canvas Painting</SelectItem>
              <SelectItem value="portrait-painting">Portrait Painting</SelectItem>
              <SelectItem value="custom">Custom Project</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="date">Needed By Date</Label>
          <Input id="date" type="date" className="mt-2" />
        </div>

        <div>
          <Label htmlFor="message">Tell Me About Your Vision</Label>
          <Textarea
            id="message"
            required
            className="mt-2 min-h-[150px]"
            placeholder="Share details about your project, theme, colors, size, or any specific requests..."
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </Button>
      </form>
    </div>
  )
}
