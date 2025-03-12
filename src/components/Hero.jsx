"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Play, BarChart3 } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export default function Hero() {
  const { theme } = useTheme()
  const [currentWord, setCurrentWord] = useState(0)
  const words = ["Marketing", "Branding", "Strategy", "Growth"]
  const textRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // Parallax effect for background elements
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Smooth scroll function
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background dark:bg-primary/90 noise-overlay">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-accent/10 dark:to-secondary/10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 dark:bg-accent/5 clip-path-polygon"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background dark:from-primary/90 to-transparent"></div>

        {/* Blob backgrounds */}
        <div className="blob-bg absolute top-[10%] left-[20%] dark:opacity-20"></div>
        <div
          className="blob-bg absolute bottom-[20%] right-[10%] dark:opacity-20"
          style={{ animationDelay: "-5s" }}
        ></div>

        {/* Dot pattern */}
        <div className="absolute inset-0 dot-pattern"></div>

        {/* Animated shapes */}
        <motion.div
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-secondary/20 dark:bg-secondary/30"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            x: mousePosition.x * -30,
            y: mousePosition.y * -30 + 30,
          }}
        />

        <motion.div
          className="absolute bottom-20 right-[10%] w-80 h-80 rounded-full bg-accent/10 dark:bg-accent/20"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            x: mousePosition.x * 30,
            y: mousePosition.y * 30 - 40,
          }}
        />

        {/* Additional floating elements */}
        <motion.div
          className="absolute top-[30%] right-[20%] w-16 h-16 rounded-lg bg-accent/20 dark:bg-accent/30"
          animate={{
            rotate: [0, 180],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
        />

        <motion.div
          className="absolute bottom-[40%] left-[15%] w-24 h-24 rounded-full border-4 border-secondary/30 dark:border-secondary/40"
          animate={{
            rotate: [0, -180],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            x: mousePosition.x * -15,
            y: mousePosition.y * -15,
          }}
        />

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-[15%] right-[30%] w-12 h-12 border-2 border-accent/30 dark:border-accent/40"
          style={{ transform: "rotate(45deg)" }}
          animate={{
            rotate: [45, 90, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-[25%] left-[25%] w-20 h-20 border-2 border-primary/20 dark:border-white/20"
          style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
          animate={{
            borderRadius: [
              "30% 70% 70% 30% / 30% 30% 70% 70%",
              "70% 30% 30% 70% / 70% 70% 30% 30%",
              "30% 70% 70% 30% / 30% 30% 70% 70%",
            ],
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 dark:bg-accent/20 text-accent font-medium text-sm animate-pulse-glow glass-effect"
          >
            #1 Digital Marketing Agency
          </motion.div>

          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-foreground dark:text-white">
            Elevate Your{" "}
            <span className="text-accent relative">
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
                ref={textRef}
              >
                {words[currentWord]}
              </motion.span>
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-secondary"></span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-muted-foreground dark:text-white/80 max-w-[600px] mb-8"
          >
            We help ambitious businesses like yours generate more profits by building awareness, driving web traffic,
            connecting with customers, and growing overall sales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <button
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md font-medium text-lg flex items-center btn-glow shine"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <button
              onClick={scrollToContact}
              className="border border-primary dark:border-white/20 text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 px-6 py-3 rounded-md font-medium text-lg flex items-center glass-effect"
            >
              <Play className="mr-2 h-5 w-5 fill-accent text-accent" /> Watch Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-muted-foreground dark:text-white/70"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span>Results-Driven Approach</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-border dark:bg-white/20"></div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span>10+ Years Experience</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-border dark:bg-white/20"></div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span>100+ Happy Clients</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 dark:bg-accent/10 rounded-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 dark:bg-secondary/10 rounded-lg"></div>
            <div className="relative rounded-xl overflow-hidden border-8 border-white dark:border-white/10 shadow-2xl dark:shadow-accent/20 animate-pulse-glow card-3d">
            <video 
  src="/video_website.mp4" 
  autoPlay 
  loop 
  muted 
  playsInline
  className="w-full h-screen object-cover"
>
  Your browser does not support the video tag.
</video>


              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">Trusted by Industry Leaders</h3>
                  <p className="text-white/80">Join hundreds of businesses achieving their goals</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="absolute -bottom-8 -left-8 bg-white dark:bg-primary/80 rounded-lg shadow-lg p-4 flex items-center gap-4 glass-effect"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="bg-accent/10 dark:bg-accent/20 rounded-full p-3">
              <BarChart3 className="h-8 w-8 text-accent" />
            </div>
            <div>
              <div className="text-2xl font-bold dark:text-white">250%</div>
              <div className="text-sm text-muted-foreground dark:text-white/70">Average ROI</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

