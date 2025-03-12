"use client"

import { motion } from "framer-motion"

export default function Clients() {
  const clients = [
    { name: "Company 1", logo: "/placeholder.svg?height=80&width=180" },
    { name: "Company 2", logo: "/placeholder.svg?height=80&width=180" },
    { name: "Company 3", logo: "/placeholder.svg?height=80&width=180" },
    { name: "Company 4", logo: "/placeholder.svg?height=80&width=180" },
    { name: "Company 5", logo: "/placeholder.svg?height=80&width=180" },
    { name: "Company 6", logo: "/placeholder.svg?height=80&width=180" },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-primary dark: text-white mb-2">Trusted by Industry Leaders</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've helped businesses of all sizes achieve their marketing goals and drive growth.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300 hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                filter: "grayscale(0)",
                transition: { duration: 0.2 },
              }}
            >
              <img src={client.logo || "/placeholder.svg"} alt={client.name} className="h-12 w-auto object-contain" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

