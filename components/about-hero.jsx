"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function AboutHero() {
  return (
    <section className="pt-24 pb-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 text-primary font-medium text-sm">
              About DigitalPro
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              We're a Team of Digital Marketing Experts
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Founded in 2010, DigitalPro has grown from a small startup to a leading digital marketing agency serving
              clients worldwide. Our mission is to help businesses grow through innovative, data-driven digital
              marketing strategies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Results-Driven</h3>
                  <p className="text-muted-foreground">We focus on delivering measurable results</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Client-Focused</h3>
                  <p className="text-muted-foreground">Your success is our top priority</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Innovative Approach</h3>
                  <p className="text-muted-foreground">We stay ahead of industry trends</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Transparent Communication</h3>
                  <p className="text-muted-foreground">Clear reporting and open dialogue</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div>
                <div className="text-3xl font-bold text-primary">250+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-muted-foreground">Industry Awards</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-lg"></div>
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Our Team"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

