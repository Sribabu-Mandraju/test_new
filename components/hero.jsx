"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Play, BarChart3 } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ["Marketing", "Branding", "Strategy", "Growth"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 clip-path-polygon"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent"></div>

        {/* Animated shapes */}
        <motion.div
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-secondary/10"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-[10%] w-80 h-80 rounded-full bg-accent/10"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container relative z-10 px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 text-primary font-medium text-sm">
            #1 Digital Marketing Agency
          </div>

          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Elevate Your{" "}
            <span className="text-primary relative">
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                {words[currentWord]}
              </motion.span>
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-accent/30"></span>
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-[600px] mb-8">
            We help ambitious businesses like yours generate more profits by building awareness, driving web traffic,
            connecting with customers, and growing overall sales.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-6">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button size="lg" variant="outline" className="text-lg px-6">
              <Play className="mr-2 h-5 w-5 fill-primary text-primary" /> Watch Demo
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Results-Driven Approach</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-border"></div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>10+ Years Experience</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-border"></div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>100+ Happy Clients</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-lg"></div>
            <div className="relative rounded-xl overflow-hidden border-8 border-white shadow-2xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Digital Marketing Experts"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">Trusted by Industry Leaders</h3>
                  <p className="text-white/80">Join hundreds of businesses achieving their goals</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-lg p-4 flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="bg-primary/10 rounded-full p-3">
              <BarChart3 className="h-8 w-8 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold">250%</div>
              <div className="text-sm text-muted-foreground">Average ROI</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

