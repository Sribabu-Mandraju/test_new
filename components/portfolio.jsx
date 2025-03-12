"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all")

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

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Work</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore our portfolio of successful digital marketing projects
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="branding">Branding</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
              <TabsTrigger value="social">Social Media</TabsTrigger>
              <TabsTrigger value="seo">SEO</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab}>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={activeTab}
            >
              {filteredProjects.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <div className="group relative overflow-hidden rounded-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-white/80 mt-2">{project.description}</p>
                      <Button variant="link" className="text-white p-0 mt-2 w-fit">
                        View Case Study <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-12">
          <Button size="lg">View All Projects</Button>
        </div>
      </div>
    </section>
  )
}

