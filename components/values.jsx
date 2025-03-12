"use client"

import { motion } from "framer-motion"
import { Target, Users, TrendingUp, Lightbulb, Shield, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Values() {
  const values = [
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Results-Driven",
      description:
        "We focus on delivering measurable results that impact your bottom line. Every strategy we implement is designed to achieve specific business goals.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Client Partnership",
      description:
        "We view our clients as partners and work collaboratively to ensure your success. Your goals become our goals, and we're invested in your growth.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Continuous Improvement",
      description:
        "We're never satisfied with the status quo. We constantly seek ways to improve our strategies, processes, and results for our clients.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Innovation",
      description:
        "We stay at the forefront of digital marketing trends and technologies, bringing innovative solutions to help your business stand out.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Integrity",
      description:
        "We operate with complete transparency and honesty. You'll always know what we're doing, why we're doing it, and the results we're achieving.",
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Passion",
      description:
        "We're passionate about digital marketing and genuinely care about the success of our clients. This passion drives everything we do.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 text-primary font-medium text-sm">
            Our Core Values
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            The Principles That Guide Us
          </h2>
          <p className="text-xl text-muted-foreground">
            These core values define our culture and approach to helping our clients succeed.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 border-t-4 border-t-primary">
                <CardHeader>
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">{value.icon}</div>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

