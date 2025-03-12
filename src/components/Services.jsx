"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  BarChart3,
  Search,
  Mail,
  Share2,
  PenTool,
  LineChart,
  ArrowRight,
  CheckCircle,
  Code,
  Monitor,
  Heart,
  Users,
} from "lucide-react"
import { getServices } from "../lib/api"

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  // Default services if API fails
  const defaultServices = [
    {
      icon: <Search className="h-10 w-10 text-accent" />,
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic to your website.",
      features: [
        "Keyword Research & Strategy",
        "On-Page SEO Optimization",
        "Technical SEO Audits",
        "Link Building Campaigns",
        "Local SEO Optimization",
      ],
      category: "digital-marketing",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-accent" />,
      title: "PPC Advertising",
      description: "Strategic pay-per-click campaigns that maximize ROI and conversions.",
      features: [
        "Google Ads Management",
        "Social Media Advertising",
        "Display & Remarketing",
        "Landing Page Optimization",
        "Conversion Tracking",
      ],
      category: "digital-marketing",
    },
    {
      icon: <Share2 className="h-10 w-10 text-accent" />,
      title: "Social Media",
      description: "Engage your audience and build brand awareness across social platforms.",
      features: [
        "Platform Strategy & Setup",
        "Content Creation & Curation",
        "Community Management",
        "Influencer Partnerships",
        "Performance Analytics",
      ],
      category: "digital-marketing",
    },
    {
      icon: <Mail className="h-10 w-10 text-accent" />,
      title: "Email Marketing",
      description: "Targeted email campaigns that nurture leads and drive customer retention.",
      features: [
        "Campaign Strategy & Planning",
        "Email Template Design",
        "Automation & Workflows",
        "List Segmentation",
        "A/B Testing & Optimization",
      ],
      category: "digital-marketing",
    },
    {
      icon: <Monitor className="h-10 w-10 text-accent" />,
      title: "Website Designing",
      description: "Custom website designs that reflect your brand and engage your audience.",
      features: [
        "Responsive Design",
        "UI/UX Design",
        "Wireframing & Prototyping",
        "Brand Integration",
        "Conversion-Focused Layouts",
      ],
      category: "it-solutions",
    },
    {
      icon: <Code className="h-10 w-10 text-accent" />,
      title: "Web Development",
      description: "Custom web applications and websites built with the latest technologies.",
      features: [
        "Frontend Development",
        "Backend Development",
        "E-commerce Solutions",
        "CMS Integration",
        "API Development",
      ],
      category: "it-solutions",
    },
    {
      icon: <Heart className="h-10 w-10 text-accent" />,
      title: "Healthcare Marketing",
      description: "Specialized marketing strategies for healthcare providers and organizations.",
      features: [
        "HIPAA Compliant Marketing",
        "Patient Acquisition Strategies",
        "Healthcare SEO",
        "Medical Content Creation",
        "Reputation Management",
      ],
      category: "healthcare",
    },
    {
      icon: <Users className="h-10 w-10 text-accent" />,
      title: "Patient Engagement",
      description: "Digital solutions to improve patient engagement and satisfaction.",
      features: [
        "Patient Portal Development",
        "Appointment Scheduling Systems",
        "Telehealth Integration",
        "Patient Education Materials",
        "Feedback & Survey Systems",
      ],
      category: "healthcare",
    },
  ]

  // Fetch services on component mount and when category changes
  useEffect(() => {
    async function fetchServices() {
      setLoading(true)
      try {
        // If category is "all", fetch all services
        const category = activeCategory === "all" ? null : activeCategory
        const response = await getServices(category)

        if (response && response.services && response.services.length > 0) {
          // Map icon strings to actual icon components
          const servicesWithIcons = response.services.map((service) => {
            // If service already has an icon component, return as is
            if (typeof service.icon !== "string") {
              return service
            }

            // Otherwise, map string to icon component
            const iconMap = {
              Search: <Search className="h-10 w-10 text-accent" />,
              BarChart3: <BarChart3 className="h-10 w-10 text-accent" />,
              Share2: <Share2 className="h-10 w-10 text-accent" />,
              Mail: <Mail className="h-10 w-10 text-accent" />,
              PenTool: <PenTool className="h-10 w-10 text-accent" />,
              LineChart: <LineChart className="h-10 w-10 text-accent" />,
              Monitor: <Monitor className="h-10 w-10 text-accent" />,
              Code: <Code className="h-10 w-10 text-accent" />,
              Heart: <Heart className="h-10 w-10 text-accent" />,
              Users: <Users className="h-10 w-10 text-accent" />,
            }

            return {
              ...service,
              icon: iconMap[service.icon] || <CheckCircle className="h-10 w-10 text-accent" />,
            }
          })

          setServices(servicesWithIcons)
        } else {
          // If no services returned, use default services filtered by category
          if (activeCategory === "all") {
            setServices(defaultServices)
          } else {
            setServices(defaultServices.filter((service) => service.category === activeCategory))
          }
        }
      } catch (error) {
        console.error("Error fetching services:", error)
        // Use default services on error
        if (activeCategory === "all") {
          setServices(defaultServices)
        } else {
          setServices(defaultServices.filter((service) => service.category === activeCategory))
        }
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [activeCategory])

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

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

  // Categories for filter buttons
  const categories = [
    { id: "all", label: "All Services" },
    { id: "digital-marketing", label: "Digital Marketing" },
    { id: "it-solutions", label: "IT Solutions" },
    { id: "healthcare", label: "Healthcare" },
  ]

  return (
    <section id="services" className="py-24 relative overflow-hidden noise-overlay dark:bg-primary/90">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-accent/5 dark:from-secondary/10 dark:to-accent/10"></div>
      <div className="blob-bg absolute top-[20%] left-[10%] dark:opacity-20"></div>
      <div
        className="blob-bg absolute bottom-[10%] right-[20%] dark:opacity-20"
        style={{ animationDelay: "-7s" }}
      ></div>
      <div className="absolute inset-0 dot-pattern dark:opacity-20"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 dark:bg-accent/20 text-accent font-medium text-sm glass-effect dark:glass-effect-dark">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-gradient dark:text-white">
              Comprehensive Digital Marketing Solutions
            </h2>
            <p className="text-xl text-muted-foreground dark:text-white/70 mb-8">
              We offer a full spectrum of digital marketing services tailored to your business goals and target
              audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md font-medium btn-glow shine flex items-center"
                onClick={() => scrollToSection("portfolio")}
              >
                Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button
                className="border border-primary dark:border-white/20 text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-white/10 px-4 py-2 rounded-md font-medium glass-effect dark:glass-effect-dark"
                onClick={() => scrollToSection("contact")}
              >
                Schedule a Consultation
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 dark:bg-accent/10 rounded-lg"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 dark:bg-secondary/10 rounded-lg"></div>
            <div className="relative rounded-xl overflow-hidden card-3d">
              <img
                src="/comprehensive digital marketing solutions.jpg"
                alt="Our Services"
                className="w-full h-auto object-cover"
                style={{ maxHeight: "500px" }} // Ensures the image doesn't exceed 500px in height
              />
            </div>
          </motion.div>
        </div>

        <div className="mb-12">
          <ul className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  className={`${
                    activeCategory === category.id
                      ? "bg-accent text-white shine"
                      : "glass-effect dark:glass-effect-dark dark:text-white hover:bg-accent/10"
                  } px-6 py-2 rounded-full text-base transition-all duration-300`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            ref={ref}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants} className="card-hover-effect">
                <div className="h-full transition-all border-t-4 border-t-accent bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 glass-effect dark:glass-effect-dark">
                  <div className="mb-4 p-3 bg-accent/10 dark:bg-accent/20 rounded-lg w-fit">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 dark:text-white">{service.title}</h3>
                  <p className="text-muted-foreground dark:text-white/70 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span className="dark:text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="text-accent font-medium flex items-center hover:underline animated-underline"
                    onClick={() => scrollToSection("contact")}
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}

