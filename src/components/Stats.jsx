"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { BarChart, TrendingUp, Users, Award } from "lucide-react"

export default function Stats() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  const stats = [
    {
      icon: <BarChart className="h-8 w-8 text-accent" />,
      value: 250,
      suffix: "%",
      label: "Average ROI",
      description: "For our clients' digital marketing campaigns",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      value: 10,
      suffix: "M+",
      label: "Website Visitors",
      description: "Generated for our clients annually",
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      value: 500,
      suffix: "+",
      label: "Satisfied Clients",
      description: "Across various industries worldwide",
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      value: 25,
      suffix: "+",
      label: "Industry Awards",
      description: "Recognizing our excellence and innovation",
    },
  ]

  // Animated counter
  const Counter = ({ value, suffix }) => {
    const [count, setCount] = useState(0)
    const duration = 2000 // ms
    const [inView, setInView] = useState(false)
    const counterRef = useRef(null)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true)
          }
        },
        { threshold: 0.1 },
      )

      if (counterRef.current) {
        observer.observe(counterRef.current)
      }

      return () => {
        if (counterRef.current) {
          observer.unobserve(counterRef.current)
        }
      }
    }, [])

    useEffect(() => {
      if (!inView) return

      let start = 0
      const end = value
      const incrementTime = Math.floor(duration / end)
      const counter = setInterval(() => {
        start += 1
        setCount(start)
        if (start >= end) clearInterval(counter)
      }, incrementTime)

      return () => {
        clearInterval(counter)
      }
    }, [value, inView])

    return (
      <span ref={counterRef} className="text-4xl md:text-5xl font-bold text-primary dark:text-accent">
        {count}
        {suffix}
      </span>
    )
  }

  return (
    <section className="py-20 relative overflow-hidden noise-overlay" ref={sectionRef} id="stats">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-primary/5 dark:from-accent/10 dark:to-primary/10"></div>
      <div className="blob-bg absolute top-[30%] right-[10%] dark:opacity-20"></div>
      <div className="blob-bg absolute bottom-[20%] left-[5%] dark:opacity-20" style={{ animationDelay: "-3s" }}></div>
      <div className="absolute inset-0 dot-pattern dark:opacity-20"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 dark:bg-accent/20 text-accent font-medium text-sm glass-effect dark:glass-effect-dark">
            By The Numbers
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-gradient dark:text-white">
            Driving Measurable Results
          </h2>
          <p className="text-xl text-muted-foreground dark:text-white/70">
            Our data-driven approach has helped hundreds of businesses achieve remarkable growth.
          </p>
        </div>

        <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center glass-effect dark:glass-effect-dark card-hover-effect"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 dark:bg-accent/20 mb-4">
                {stat.icon}
              </div>
              <div className="mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{stat.label}</h3>
              <p className="text-muted-foreground dark:text-white/70">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

