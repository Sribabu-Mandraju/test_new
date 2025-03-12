"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

export default function BlogPreview() {
  const blogPosts = [
    {
      id: 1,
      title: "10 SEO Strategies That Actually Work in 2023",
      excerpt: "Discover the most effective SEO strategies that are driving real results for businesses this year.",
      image: "/placeholder.svg?height=400&width=600",
      category: "SEO",
      author: "Sarah Johnson",
      date: "August 15, 2023",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "How to Create a Social Media Strategy That Converts",
      excerpt:
        "Learn how to develop a social media strategy that not only engages your audience but drives conversions.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Social Media",
      author: "Michael Chen",
      date: "July 28, 2023",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "The Ultimate Guide to Email Marketing Automation",
      excerpt:
        "Explore how to set up effective email marketing automation workflows that nurture leads and drive sales.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Email Marketing",
      author: "Emily Rodriguez",
      date: "July 10, 2023",
      readTime: "10 min read",
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

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="blog" className="py-20 relative overflow-hidden noise-overlay">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-accent/5"></div>
      <div className="blob-bg absolute top-[20%] left-[10%]"></div>
      <div className="blob-bg absolute bottom-[10%] right-[20%]" style={{ animationDelay: "-6s" }}></div>
      <div className="absolute inset-0 dot-pattern"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-primary/10 text-accent font-medium text-sm glass-effect">
              Latest Insights
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient">
              Marketing Blog
            </h2>
            <p className="text-xl text-muted-foreground mt-4 max-w-2xl">
              Expert tips, industry insights, and the latest trends in digital marketing.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <button
              className="inline-flex items-center text-accent font-medium hover:underline animated-underline"
              onClick={() => scrollToSection("contact")}
            >
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {blogPosts.map((post, index) => (
            <motion.div key={post.id} variants={itemVariants} className="card-hover-effect">
              <div className="bg-white rounded-lg overflow-hidden shadow-md glass-effect">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-accent transition-colors">
                    <button onClick={() => scrollToSection("contact")}>{post.title}</button>
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <button
                    className="inline-flex items-center text-accent font-medium hover:underline animated-underline"
                    onClick={() => scrollToSection("contact")}
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

