"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/data-viz", label: "Data & Viz" },
  { href: "/about", label: "About" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-3 font-bold text-xl text-primary hover:text-secondary transition-colors"
          >
            <Image
              src="/images/iu-trident-logo.png"
              alt="Indiana University"
              width={32}
              height={40}
              className="h-10 w-auto"
            />
            <span>Disrupted Development</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-primary hover:bg-muted rounded-md",
                  pathname === item.href ? "text-primary bg-muted pixel-shadow" : "text-muted-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="hover:bg-muted">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-2 text-base font-medium transition-all duration-200 hover:text-primary hover:bg-muted rounded-md",
                    pathname === item.href ? "text-primary bg-muted pixel-shadow" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
