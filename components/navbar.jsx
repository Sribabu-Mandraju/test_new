"use client"

import { useState, useEffect } from "react"
import {
  Mountain,
  ChevronDown,
  Menu,
  X,
  Search,
  BarChart3,
  Share2,
  Mail,
  PenTool,
  LineChart,
  Users,
  History,
  Award,
  Briefcase,
  FileText,
  MessageSquare,
  Phone,
  Code,
  Heart,
  Monitor,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Import the ThemeToggle component at the top of the file
import ThemeToggle from "../src/components/ThemeToggle"; 

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      // Close mobile menu if open
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }

      // Smooth scroll to section
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Digital Marketing services
  const digitalMarketingItems = [
    {
      icon: <Search className="h-5 w-5 text-accent" />,
      title: "SEO Optimization",
      href: "/services/seo-optimization",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-accent" />,
      title: "PPC Advertising",
      href: "/services/ppc-advertising",
    },
    {
      icon: <Share2 className="h-5 w-5 text-accent" />,
      title: "Social Media",
      href: "/services/social-media",
    },
    {
      icon: <Mail className="h-5 w-5 text-accent" />,
      title: "Email Marketing",
      href: "/services/email-marketing",
    },
    {
      icon: <PenTool className="h-5 w-5 text-accent" />,
      title: "Content Creation",
      href: "/services/content-creation",
    },
    {
      icon: <LineChart className="h-5 w-5 text-accent" />,
      title: "Analytics & Reporting",
      href: "/services/analytics-reporting",
    },
  ]

  // IT Solutions services
  const itSolutionsItems = [
    {
      icon: <Monitor className="h-5 w-5 text-accent" />,
      title: "Website Designing",
      href: "/services/website-designing",
    },
    {
      icon: <Code className="h-5 w-5 text-accent" />,
      title: "Web Development",
      href: "/services/web-development",
    },
    {
      icon: <Share2 className="h-5 w-5 text-accent" />,
      title: "Mobile App Development",
      href: "/services/mobile-app-development",
    },
  ]

  // Healthcare services
  const healthcareItems = [
    {
      icon: <Heart className="h-5 w-5 text-accent" />,
      title: "Healthcare Marketing",
      href: "/services/healthcare-marketing",
    },
    {
      icon: <Users className="h-5 w-5 text-accent" />,
      title: "Patient Engagement",
      href: "/services/patient-engagement",
    },
  ]

  const aboutItems = [
    {
      icon: <Users className="h-5 w-5 text-accent" />,
      title: "Our Team",
      href: "#about",
    },
    {
      icon: <History className="h-5 w-5 text-accent" />,
      title: "Our Story",
      href: "#about",
    },
    {
      icon: <Award className="h-5 w-5 text-accent" />,
      title: "Awards & Recognition",
      href: "#about",
    },
    {
      icon: <Briefcase className="h-5 w-5 text-accent" />,
      title: "Careers",
      href: "#about",
    },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center space-x-2"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
            >
              <Mountain className={`h-8 w-8 ${isScrolled ? "text-primary" : "text-primary"}`} />
              <span className={`text-xl font-bold ${isScrolled ? "text-primary" : "text-primary"}`}>DigitalPro</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {/* About Us Dropdown */}
              <div className="relative group">
                <button
                  className={`px-4 py-2 rounded-md flex items-center space-x-1 hover:bg-primary/10 ${
                    isScrolled ? "text-foreground" : "text-foreground"
                  }`}
                  onClick={() => scrollToSection("about")}
                >
                  <span>About Us</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-[275px] p-2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  {aboutItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-start p-2 space-x-3 rounded-md hover:bg-muted"
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.href.substring(1))
                      }}
                    >
                      <div className="mt-0.5">{item.icon}</div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className={`px-4 py-2 rounded-md flex items-center space-x-1 hover:bg-primary/10 ${
                    isScrolled ? "text-foreground" : "text-foreground"
                  }`}
                  onClick={() => scrollToSection("services")}
                >
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-[275px] p-2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  {/* Digital Marketing Dropdown */}
                  <div className="relative group/sub">
                    <a
                      href="/services/digital-marketing"
                      className="flex items-center justify-between p-2 rounded-md hover:bg-muted w-full"
                    >
                      <div className="flex items-center space-x-3">
                        <Search className="h-5 w-5 text-accent" />
                        <span className="font-medium">Digital Marketing</span>
                      </div>
                      <ChevronDown className="h-4 w-4" />
                    </a>
                    <div className="absolute left-full top-0 w-[275px] p-2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform group-hover/sub:translate-x-0 -translate-x-2">
                      {digitalMarketingItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="flex items-start p-2 space-x-3 rounded-md hover:bg-muted"
                        >
                          <div className="mt-0.5">{item.icon}</div>
                          <div>
                            <h4 className="font-medium">{item.title}</h4>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* IT Solutions Dropdown */}
                  <div className="relative group/sub">
                    <a
                      href="/services/it-solutions"
                      className="flex items-center justify-between p-2 rounded-md hover:bg-muted w-full"
                    >
                      <div className="flex items-center space-x-3">
                        <Code className="h-5 w-5 text-accent" />
                        <span className="font-medium">IT Solutions</span>
                      </div>
                      <ChevronDown className="h-4 w-4" />
                    </a>
                    <div className="absolute left-full top-0 w-[275px] p-2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform group-hover/sub:translate-x-0 -translate-x-2">
                      {itSolutionsItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="flex items-start p-2 space-x-3 rounded-md hover:bg-muted"
                        >
                          <div className="mt-0.5">{item.icon}</div>
                          <div>
                            <h4 className="font-medium">{item.title}</h4>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Healthcare Dropdown */}
                  <div className="relative group/sub">
                    <a
                      href="/services/healthcare"
                      className="flex items-center justify-between p-2 rounded-md hover:bg-muted w-full"
                    >
                      <div className="flex items-center space-x-3">
                        <Heart className="h-5 w-5 text-accent" />
                        <span className="font-medium">Healthcare</span>
                      </div>
                      <ChevronDown className="h-4 w-4" />
                    </a>
                    <div className="absolute left-full top-0 w-[275px] p-2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform group-hover/sub:translate-x-0 -translate-x-2">
                      {healthcareItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="flex items-start p-2 space-x-3 rounded-md hover:bg-muted"
                        >
                          <div className="mt-0.5">{item.icon}</div>
                          <div>
                            <h4 className="font-medium">{item.title}</h4>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Regular Nav Items */}
              <a
                href="#portfolio"
                className={`px-4 py-2 rounded-md hover:bg-primary/10 ${
                  isScrolled ? "text-foreground" : "text-foreground"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("portfolio")
                }}
              >
                Portfolio
              </a>

              <a
                href="#blog"
                className={`px-4 py-2 rounded-md hover:bg-primary/10 ${
                  isScrolled ? "text-foreground" : "text-foreground"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("blog")
                }}
              >
                Blog
              </a>

              <a
                href="#testimonials"
                className={`px-4 py-2 rounded-md hover:bg-primary/10 ${
                  isScrolled ? "text-foreground" : "text-foreground"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("testimonials")
                }}
              >
                Testimonials
              </a>

              <a
                href="#contact"
                className={`px-4 py-2 rounded-md hover:bg-primary/10 ${
                  isScrolled ? "text-foreground" : "text-foreground"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("contact")
                }}
              >
                Contact
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggle />
              <button
                className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md font-medium btn-glow"
                onClick={() => scrollToSection("contact")}
              >
                Get a Free Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-foreground"}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-foreground"}`} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background pt-20 pb-6 px-4 overflow-y-auto lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-6">
              {/* About Us Section */}
              <div>
                <h3 className="text-lg font-semibold mb-3">About Us</h3>
                <div className="grid grid-cols-1 gap-2 pl-2">
                  {aboutItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center space-x-3 p-2 rounded-md hover:bg-muted"
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.href.substring(1))
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <div>{item.icon}</div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Services Section */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Services</h3>

                {/* Digital Marketing */}
                <div className="mb-4">
                  <h4 className="font-medium mb-2 pl-2">Digital Marketing</h4>
                  <div className="grid grid-cols-1 gap-2 pl-4">
                    {digitalMarketingItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="flex items-center space-x-3 p-2 rounded-md hover:bg-muted"
                      >
                        <div>{item.icon}</div>
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* IT Solutions */}
                <div className="mb-4">
                  <h4 className="font-medium mb-2 pl-2">IT Solutions</h4>
                  <div className="grid grid-cols-1 gap-2 pl-4">
                    {itSolutionsItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="flex items-center space-x-3 p-2 rounded-md hover:bg-muted"
                      >
                        <div>{item.icon}</div>
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Healthcare */}
                <div>
                  <h4 className="font-medium mb-2 pl-2">Healthcare</h4>
                  <div className="grid grid-cols-1 gap-2 pl-4">
                    {healthcareItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="flex items-center space-x-3 p-2 rounded-md hover:bg-muted"
                      >
                        <div>{item.icon}</div>
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Other Nav Items */}
              <div className="space-y-2">
                <a
                  href="#portfolio"
                  className="block p-2 rounded-md hover:bg-muted"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("portfolio")
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <Briefcase className="h-5 w-5 text-accent" />
                    <span>Portfolio</span>
                  </div>
                </a>

                <a
                  href="#blog"
                  className="block p-2 rounded-md hover:bg-muted"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("blog")
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-accent" />
                    <span>Blog</span>
                  </div>
                </a>

                <a
                  href="#testimonials"
                  className="block p-2 rounded-md hover:bg-muted"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("testimonials")
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-5 w-5 text-accent" />
                    <span>Testimonials</span>
                  </div>
                </a>

                <a
                  href="#contact"
                  className="block p-2 rounded-md hover:bg-muted"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("contact")
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <span>Contact</span>
                  </div>
                </a>
              </div>

              {/* Theme Toggle */}
              <div className="flex justify-center mb-4">
                <ThemeToggle />
              </div>

              {/* CTA Button */}
              <button
                className="w-full bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md font-medium"
                onClick={() => {
                  scrollToSection("contact")
                  setIsMobileMenuOpen(false)
                }}
              >
                Get a Free Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  )
}

