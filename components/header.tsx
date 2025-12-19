"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-serif text-2xl md:text-3xl font-semibold tracking-wide text-foreground">
              Shrutika Bansod
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm tracking-wider uppercase transition-colors ${
                isActive("/") && pathname === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className={`text-sm tracking-wider uppercase transition-colors ${
                isActive("/portfolio") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/services"
              className={`text-sm tracking-wider uppercase transition-colors ${
                isActive("/services") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`text-sm tracking-wider uppercase transition-colors ${
                isActive("/about") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm tracking-wider uppercase transition-colors ${
                isActive("/contact") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Contact
            </Link>
            <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Order Now</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/portfolio"
                className="text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/services"
                className="text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 mt-2">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Order Now
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
