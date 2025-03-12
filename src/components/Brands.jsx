"use client"
import { useRef } from "react"

export default function Brands() {
  const containerRef = useRef(null)

  const brands = [
    { name: "Brand 1", logo: "/placeholder.svg?height=80&width=180" },
    { name: "Brand 2", logo: "/placeholder.svg?height=80&width=180" },
    { name: "Brand 3", logo: "/placeholder.svg?height=80&width=180" },
    { name: "Brand 4", logo: "/placeholder.svg?height=80&width=180" },
    { name: "Brand 5", logo: "/placeholder.svg?height=80&width=180" },
    { name: "Brand 6", logo: "/placeholder.svg?height=80&width=180" },
    { name: "Brand 7", logo: "/placeholder.svg?height=80&width=180" },
    { name: "Brand 8", logo: "/placeholder.svg?height=80&width=180" },
    { name: "Brand 9", logo: "/placeholder.svg?height=80&width=180" },
    { name: "Brand 10", logo: "/placeholder.svg?height=80&width=180" },
  ]

  // Split brands into two rows for the marquee effect
  const firstRow = brands.slice(0, 5)
  const secondRow = brands.slice(5)

  return (
    <section className="py-16 relative overflow-hidden noise-overlay" ref={containerRef}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-secondary/5"></div>
      <div className="absolute inset-0 dot-pattern"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-primary/10 text-accent font-medium text-sm glass-effect">
            Trusted Partners
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gradient mb-4">Brands That Trust Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've helped businesses of all sizes achieve their marketing goals and drive growth.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* First row - left to right */}
        <div className="flex space-x-12 animate-marquee">
          {[...firstRow, ...firstRow].map((brand, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center justify-center min-w-[180px] h-24 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img src={brand.logo || "/placeholder.svg"} alt={brand.name} className="max-h-12 max-w-[150px]" />
            </div>
          ))}
        </div>

        {/* Second row - right to left */}
        <div className="flex space-x-12 animate-marquee-reverse mt-8">
          {[...secondRow, ...secondRow].map((brand, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center justify-center min-w-[180px] h-24 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img src={brand.logo || "/placeholder.svg"} alt={brand.name} className="max-h-12 max-w-[150px]" />
            </div>
          ))}
        </div>
      </div>

      <div className="container px-4 md:px-6 mt-12">
        <div className="text-center">
          <a
            href="/clients"
            className="inline-flex items-center text-accent font-medium hover:underline animated-underline"
          >
            View Our Client Success Stories
          </a>
        </div>
      </div>
    </section>
  )
}

