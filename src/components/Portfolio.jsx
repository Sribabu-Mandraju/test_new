"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const projects = [
    {
      id: 1,
      title: "E-commerce Rebranding",
      category: "branding",
      image: "/placeholder.svg?height=600&width=800",
      description: "Complete brand refresh for an established e-commerce platform.",
    },
    {
      id: 2,
      title: "SaaS Marketing Campaign",
      category: "marketing",
      image: "/placeholder.svg?height=600&width=800",
      description: "Multi-channel campaign that increased conversions by 45%.",
    },
    {
      id: 3,
      title: "Restaurant Social Strategy",
      category: "social",
      image: "/placeholder.svg?height=600&width=800",
      description: "Social media strategy that doubled engagement for a restaurant chain.",
    },
    {
      id: 4,
      title: "Tech Startup SEO",
      category: "seo",
      image: "/placeholder.svg?height=600&width=800",
      description: "SEO optimization that resulted in 200% increase in organic traffic.",
    },
    {
      id: 5,
      title: "Retail Email Campaign",
      category: "marketing",
      image: "/placeholder.svg?height=600&width=800",
      description: "Email series with 32% open rate and 15% conversion rate.",
    },
    {
      id: 6,
      title: "Fitness Brand Identity",
      category: "branding",
      image: "/placeholder.svg?height=600&width=800",
      description: "Complete brand identity for a premium fitness brand.",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

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

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden noise-overlay">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/5"></div>
      <div className="blob-bg absolute top-[10%] right-[15%]"></div>
      <div className="blob-bg absolute bottom-[15%] left-[10%]" style={{ animationDelay: "-5s" }}></div>
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
            Our Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            Explore our portfolio of successful digital marketing projects
          </motion.p>
        </div>

        <div className="mb-8">
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <li>
              <button
                onClick={() => setActiveTab("all")}
                className={`px-6 py-2 rounded-full text-base transition-all duration-300 ${
                  activeTab === "all" ? "bg-accent text-white shine" : "glass-effect hover:bg-accent/10"
                }`}
              >
                All
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("branding")}
                className={`px-6 py-2 rounded-full text-base transition-all duration-300 ${
                  activeTab === "branding" ? "bg-accent text-white shine" : "glass-effect hover:bg-accent/10"
                }`}
              >
                Branding
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("marketing")}
                className={`px-6 py-2 rounded-full text-base transition-all duration-300 ${
                  activeTab === "marketing" ? "bg-accent text-white shine" : "glass-effect hover:bg-accent/10"
                }`}
              >
                Marketing
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("social")}
                className={`px-6 py-2 rounded-full text-base transition-all duration-300 ${
                  activeTab === "social" ? "bg-accent text-white shine" : "glass-effect hover:bg-accent/10"
                }`}
              >
                Social Media
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("seo")}
                className={`px-6 py-2 rounded-full text-base transition-all duration-300 ${
                  activeTab === "seo" ? "bg-accent text-white shine" : "glass-effect hover:bg-accent/10"
                }`}
              >
                SEO
              </button>
            </li>
          </motion.ul>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            exit="hidden"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants} className="card-hover-effect">
                <div className="group relative overflow-hidden rounded-lg shadow-md card-3d">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-white/80 mt-2">{project.description}</p>
                    <button
                      className="text-white mt-4 flex items-center w-fit hover:text-secondary transition-colors animated-underline"
                      onClick={() => scrollToSection("contact")}
                    >
                      View Case Study <ArrowUpRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-12">
          <button
            className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md font-medium btn-glow shine"
            onClick={() => scrollToSection("contact")}
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

