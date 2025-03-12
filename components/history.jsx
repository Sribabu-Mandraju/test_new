"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function History() {
  const milestones = [
    {
      year: "2010",
      title: "Founded",
      description: "DigitalPro was founded with a mission to help businesses navigate the digital landscape.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2013",
      title: "Expansion",
      description: "Expanded our team and services to include social media marketing and PPC advertising.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2016",
      title: "Award-Winning",
      description: "Recognized as a top digital marketing agency with multiple industry awards.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2019",
      title: "Global Reach",
      description: "Expanded our client base to serve businesses across North America, Europe, and Asia.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2022",
      title: "Innovation Hub",
      description: "Launched our innovation hub to develop cutting-edge marketing technologies.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 text-primary font-medium text-sm">
            Our Journey
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">The DigitalPro Story</h2>
          <p className="text-xl text-muted-foreground">
            From humble beginnings to industry leadership, our journey has been defined by innovation and client
            success.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-24 relative">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="relative rounded-xl overflow-hidden">
                    <Image
                      src={milestone.image || "/placeholder.svg"}
                      alt={milestone.title}
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                    <div className="absolute top-0 left-0 bg-primary text-white py-2 px-4 rounded-br-lg font-bold">
                      {milestone.year}
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white z-10 font-bold text-xl">
                  {index + 1}
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{milestone.title}</h3>
                  <p className="text-muted-foreground text-lg">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

