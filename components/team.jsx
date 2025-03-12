"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Team() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      bio: "With over 15 years of experience in digital marketing, Sarah leads our team with vision and expertise.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "Michael Chen",
      position: "SEO Director",
      bio: "Michael specializes in technical SEO and has helped numerous businesses achieve top rankings.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "Emily Rodriguez",
      position: "Content Strategist",
      bio: "Emily crafts compelling content strategies that engage audiences and drive conversions.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
    {
      name: "David Kim",
      position: "PPC Specialist",
      bio: "David is an expert in creating high-performing paid advertising campaigns across multiple platforms.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
        facebook: "#",
      },
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 text-primary font-medium text-sm">
            Our Team
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Meet the Experts Behind Our Success
          </h2>
          <p className="text-xl text-muted-foreground">
            Our team of seasoned professionals brings diverse expertise and a passion for digital marketing excellence.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex space-x-4">
                    <a
                      href={member.social.linkedin}
                      className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
                    >
                      <Twitter className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href={member.social.facebook}
                      className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
                    >
                      <Facebook className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.position}</p>
              <p className="text-muted-foreground">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Button variant="outline">
            View All Team Members <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

