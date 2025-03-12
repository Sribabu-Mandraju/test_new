"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, ChevronDown, Search } from "lucide-react"

export default function Faq() {
  const [openItem, setOpenItem] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index)
  }

  const faqs = [
    {
      question: "What services does your digital marketing agency offer?",
      answer:
        "We offer a comprehensive range of digital marketing services including SEO, PPC advertising, social media marketing, content creation, email marketing, and analytics & reporting. Our team can create a customized strategy that combines these services to meet your specific business goals.",
    },
    {
      question: "How long does it take to see results from digital marketing efforts?",
      answer:
        "The timeline for results varies depending on the specific services and your starting point. SEO typically takes 3-6 months to show significant results, while PPC and social media advertising can generate results more quickly. During our initial consultation, we'll provide a realistic timeline based on your specific situation and goals.",
    },
    {
      question: "How do you measure the success of your marketing campaigns?",
      answer:
        "We establish clear KPIs (Key Performance Indicators) at the beginning of each campaign, which may include metrics like website traffic, conversion rates, lead generation, engagement rates, and ROI. We provide regular reports that track these metrics and demonstrate the impact of our work on your business objectives.",
    },
    {
      question: "What makes your agency different from other digital marketing agencies?",
      answer:
        "Our agency stands out through our data-driven approach, transparent communication, and focus on measurable results. We don't just implement tactics; we develop strategic plans tailored to your business goals. Additionally, our team consists of specialists in each area of digital marketing, ensuring expertise across all services we provide.",
    },
    {
      question: "Do you require long-term contracts?",
      answer:
        "While we recommend a minimum commitment of 3-6 months to see meaningful results from digital marketing efforts, we offer flexible contract options. We're confident in our ability to deliver results, which is why we don't lock clients into lengthy contracts. We can discuss the options that work best for your business during our consultation.",
    },
    {
      question: "How much does digital marketing cost?",
      answer:
        "Our pricing is customized based on your specific needs, goals, and the scope of services required. We offer different packages to accommodate various budget levels, and we're transparent about costs from the beginning. During our initial consultation, we'll discuss your budget and provide a detailed proposal outlining the investment required to achieve your goals.",
    },
    {
      question: "Do you work with businesses in specific industries?",
      answer:
        "We work with businesses across various industries, including e-commerce, SaaS, healthcare, finance, education, and more. Our team has experience developing successful digital marketing strategies for diverse sectors, allowing us to understand the unique challenges and opportunities in your industry.",
    },
    {
      question: "How often will I receive reports on my campaign performance?",
      answer:
        "We provide detailed monthly reports that track your campaign's performance against established KPIs. These reports include data analysis, insights, and recommendations for optimization. Additionally, we offer access to real-time dashboards for certain services, allowing you to monitor performance at any time.",
    },
  ]

  const filteredFaqs = searchQuery
    ? faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : faqs

  return (
    <section className="py-24 relative overflow-hidden noise-overlay">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-secondary/5"></div>
      <div className="blob-bg absolute top-[15%] right-[15%]"></div>
      <div className="blob-bg absolute bottom-[15%] left-[15%]" style={{ animationDelay: "-4s" }}></div>
      <div className="absolute inset-0 dot-pattern"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 text-accent font-medium text-sm glass-effect">
            FAQ
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-gradient">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our digital marketing services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent glass-effect"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          </div>
        </div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-sm overflow-hidden glass-effect"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
                  >
                    <span className="text-lg font-medium">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-accent transition-transform duration-300 ${
                        openItem === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openItem === index ? "max-h-96 p-4 pt-0" : "max-h-0"
                    }`}
                  >
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No questions found matching your search.</p>
                <button onClick={() => setSearchQuery("")} className="text-accent hover:underline mt-2">
                  Clear search
                </button>
              </div>
            )}
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Still have questions? We're here to help.</p>
          <div className="flex justify-center">
  <button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md font-medium btn-glow shine flex items-center justify-center">
    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
  </button>
</div>



        </div>
      </div>
    </section>
  )
}

