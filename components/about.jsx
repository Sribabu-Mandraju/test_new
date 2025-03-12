"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Award, Users, Briefcase, Clock } from "lucide-react"

export default function About() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const stats = [
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      value: "100+",
      label: "Happy Clients",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-accent" />,
      value: "250+",
      label: "Projects Completed",
    },
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      value: "10+",
      label: "Years Experience",
    },
    {
      icon: <Award className="h-6 w-6 text-accent" />,
      value: "15+",
      label: "Industry Awards",
    },
  ]

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" className="py-20 relative overflow-hidden noise-overlay" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-secondary/5"></div>
      <div className="blob-bg absolute top-[30%] right-[10%]"></div>
      <div className="blob-bg absolute bottom-[20%] left-[5%]" style={{ animationDelay: "-3s" }}></div>
      <div className="absolute inset-0 dot-pattern"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/10 rounded-lg"></div>
              <motion.div className="relative rounded-lg overflow-hidden card-3d" style={{ y }}>
              <img
                alt="Our Team"
                src="/our_agency.jpg"
                className="w-full h-auto object-cover"
                style={{ maxHeight: "500px" }} // Controls image height
              />

              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient relative -top-2">
              About Our Agency
            </h2>


              <div className="mt-4 w-20 h-1 bg-accent"></div>
            </div>

            <p className="text-muted-foreground">
              We are a full-service digital marketing agency with over a decade of experience helping businesses grow
              their online presence and achieve their marketing goals.
            </p>

            <p className="text-muted-foreground">
              Our team of experts specializes in creating data-driven strategies that deliver measurable results. We
              believe in transparent communication, innovative solutions, and long-term partnerships.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-4 bg-background rounded-lg shadow-sm hover-lift glass-effect"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-accent">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <button
              className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md font-medium mt-6 btn-glow shine"
              onClick={() => scrollToSection("contact")}
            >
              Learn More About Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

