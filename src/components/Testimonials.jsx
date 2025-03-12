"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: "/placeholder.svg?height=200&width=200",
      quote:
        "Working with this agency transformed our digital presence. Their strategic approach to marketing helped us increase our leads by 200% in just six months.",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director, Retail Solutions",
      image: "/placeholder.svg?height=200&width=200",
      quote:
        "The team's expertise in SEO and content marketing is unmatched. They delivered results that exceeded our expectations and continue to be a valuable partner.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder, Wellness Brand",
      image: "/placeholder.svg?height=200&width=200",
      quote:
        "Their creative approach to our social media strategy completely revitalized our brand. We've seen engagement increase by 150% since working with them.",
    },
  ]

  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden noise-overlay">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-primary/5"></div>
      <div className="blob-bg absolute top-[20%] left-[20%]"></div>
      <div className="blob-bg absolute bottom-[10%] right-[10%]" style={{ animationDelay: "-8s" }}></div>
      <div className="absolute inset-0 dot-pattern"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient"
          >
            Client Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            Hear what our clients have to say about working with us
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="card-hover-effect"
            >
              <div className="border-none shadow-lg p-8 md:p-12 bg-white rounded-lg glass-effect">
                <div className="flex flex-col items-center text-center space-y-6">
                  <Quote className="h-12 w-12 text-accent/20" />

                  <p className="text-lg md:text-xl italic">"{testimonials[current].quote}"</p>

                  <div className="pt-6 border-t border-border w-24 mx-auto"></div>

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                      <img
                        src={testimonials[current].image || "/placeholder.svg"}
                        alt={testimonials[current].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold">{testimonials[current].name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[current].position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index)
                  setAutoplay(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current ? "bg-accent w-6" : "bg-muted"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-accent hover:text-white transition-colors glass-effect"
            onClick={() => {
              prevTestimonial()
              setAutoplay(false)
            }}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous testimonial</span>
          </button>

          <button
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-accent hover:text-white transition-colors glass-effect"
            onClick={() => {
              nextTestimonial()
              setAutoplay(false)
            }}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next testimonial</span>
          </button>
        </div>
      </div>
    </section>
  )
}

