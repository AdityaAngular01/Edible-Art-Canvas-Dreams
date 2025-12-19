"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Check, ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { format } from "date-fns"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  preSelectedPackage?: string
}

export function BookingModal({ isOpen, onClose, preSelectedPackage }: BookingModalProps) {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [date, setDate] = useState<Date>()

  const [formData, setFormData] = useState({
    // Step 1: Service Details
    serviceType: preSelectedPackage || "",
    eventDate: "",
    location: "",
    guestCount: "",

    // Step 2: Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    // Step 3: Additional Details
    hearAboutUs: "",
    budget: "",
    message: "",
  })

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 4))
  }

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const resetModal = () => {
    setStep(1)
    setIsSuccess(false)
    setFormData({
      serviceType: "",
      eventDate: "",
      location: "",
      guestCount: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      hearAboutUs: "",
      budget: "",
      message: "",
    })
    setDate(undefined)
  }

  const handleClose = () => {
    resetModal()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="mb-6 mx-auto w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
              <Check className="h-8 w-8 text-accent" />
            </div>
            <DialogHeader>
              <DialogTitle className="font-serif text-3xl font-light text-center mb-4">Thank You!</DialogTitle>
              <DialogDescription className="text-center text-base leading-relaxed">
                I've received your order request and will get back to you within 24-48 hours to discuss your project in
                detail. Check your email for confirmation.
              </DialogDescription>
            </DialogHeader>
            <Button onClick={handleClose} className="mt-8">
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-3xl font-light">Place Your Order</DialogTitle>
              <DialogDescription>Step {step} of 3 - Let's create something beautiful together</DialogDescription>
            </DialogHeader>

            {/* Progress Indicator */}
            <div className="flex gap-2 mb-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-accent" : "bg-muted"}`} />
              ))}
            </div>

            {/* Step 1: Service Details */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select value={formData.serviceType} onValueChange={(value) => updateField("serviceType", value)}>
                    <SelectTrigger id="serviceType" className="mt-2">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding-cake">Wedding Cake - From ₹500</SelectItem>
                      <SelectItem value="celebration-cake">Celebration Cake - From ₹150</SelectItem>
                      <SelectItem value="canvas-painting">Canvas Painting - From ₹300</SelectItem>
                      <SelectItem value="portrait-painting">Portrait Painting - From ₹500</SelectItem>
                      <SelectItem value="custom">Custom Project</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Needed By Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal mt-2 bg-transparent"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span className="text-muted-foreground">Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(newDate) => {
                          setDate(newDate)
                          updateField("eventDate", newDate ? format(newDate, "PPP") : "")
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label htmlFor="location">Delivery Location *</Label>
                  <Input
                    id="location"
                    placeholder="e.g., Nagpur, Maharashtra"
                    value={formData.location}
                    onChange={(e) => updateField("location", e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="guestCount">Number of Servings (for cakes)</Label>
                  <Input
                    id="guestCount"
                    type="number"
                    placeholder="e.g., 50"
                    value={formData.guestCount}
                    onChange={(e) => updateField("guestCount", e.target.value)}
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground mt-2">Not applicable for paintings</p>
                </div>
              </div>
            )}

            {/* Step 2: Personal Information */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => updateField("firstName", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => updateField("lastName", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select value={formData.budget} onValueChange={(value) => updateField("budget", value)}>
                    <SelectTrigger id="budget" className="mt-2">
                      <SelectValue placeholder="Select your budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-200">Under ₹10,000</SelectItem>
                      <SelectItem value="200-500">₹10,000 - ₹25,000</SelectItem>
                      <SelectItem value="500-1000">₹25,000 - ₹50,000</SelectItem>
                      <SelectItem value="1000-plus">₹50,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 3: Additional Details */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="hearAboutUs">How did you hear about me?</Label>
                  <Select value={formData.hearAboutUs} onValueChange={(value) => updateField("hearAboutUs", value)}>
                    <SelectTrigger id="hearAboutUs" className="mt-2">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google Search</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="referral">Friend/Family Referral</SelectItem>
                      <SelectItem value="event">Saw work at an event</SelectItem>
                      <SelectItem value="previous-client">Previous Client</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Tell me about your vision *</Label>
                  <Textarea
                    id="message"
                    placeholder="Share details about your project: theme, colors, flavors (for cakes), style preferences, reference images, or any special requests..."
                    value={formData.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    className="mt-2 min-h-[150px] resize-none"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    The more details you share, the better I can bring your vision to life
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">What happens next?</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>I'll review your request within 24-48 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>We'll discuss your vision and finalize details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>Receive a quote and timeline for your project</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t">
              <Button variant="outline" onClick={step === 1 ? handleClose : handleBack} disabled={isSubmitting}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                {step === 1 ? "Cancel" : "Back"}
              </Button>

              {step < 3 ? (
                <Button onClick={handleNext}>
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Order"
                  )}
                </Button>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
