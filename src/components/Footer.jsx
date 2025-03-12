"use client"

import { useState } from "react"
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, Mountain } from "lucide-react"
import { subscribeToNewsletter } from "../lib/api"
import { useTheme } from "./ThemeProvider"

export default function Footer() {
  const { theme } = useTheme()
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscriptionStatus, setSubscriptionStatus] = useState(null)

  const handleSubscribe = async (e) => {
    e.preventDefault()

    if (!email) return

    setIsSubmitting(true)
    setSubscriptionStatus(null)

    try {
      await subscribeToNewsletter(email)
      setSubscriptionStatus({ type: "success", message: "Successfully subscribed!" })
      setEmail("")
    } catch (error) {
      setSubscriptionStatus({ type: "error", message: "Failed to subscribe. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-gradient-primary dark:bg-gradient-to-br dark:from-primary dark:to-accent/80 text-white relative overflow-hidden noise-overlay">
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-10"></div>
      <div className="blob-bg absolute top-[10%] left-[10%] opacity-10"></div>
      <div className="blob-bg absolute bottom-[10%] right-[10%] opacity-10" style={{ animationDelay: "-7s" }}></div>

      <div className="container px-4 md:px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mountain className="h-6 w-6" />
              <span className="text-xl font-bold">DigitalPro</span>
            </div>
            <p className="text-white/80">
              We help businesses grow through strategic digital marketing solutions that drive results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors animated-underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors animated-underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors animated-underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors animated-underline">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors animated-underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors animated-underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors animated-underline">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors animated-underline">
                  PPC Advertising
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors animated-underline">
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors animated-underline">
                  Email Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors animated-underline">
                  Content Creation
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors animated-underline">
                  Analytics & Reporting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-white/80 mb-4">Subscribe to our newsletter to receive updates and marketing tips.</p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent flex-grow dark:bg-black/20 dark:border-white/10"
                  required
                />
                <button
                  type="submit"
                  className="bg-accent hover:bg-accent/90 text-white p-2 rounded-md shine"
                  disabled={isSubmitting}
                >
                  <ArrowRight className="h-4 w-4" />
                  <span className="sr-only">Subscribe</span>
                </button>
              </div>

              {subscriptionStatus && (
                <p className={`text-sm ${subscriptionStatus.type === "success" ? "text-green-300" : "text-red-300"}`}>
                  {subscriptionStatus.message}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm">© {currentYear} DigitalPro Marketing Agency. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm animated-underline">
              Privacy Policy
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm animated-underline">
              Terms of Service
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm animated-underline">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

