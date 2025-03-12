"use client"

import { motion } from "framer-motion"
import { BarChart3, Search, Mail, Share2, PenTool, LineChart, ArrowRight, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function Services() {
  const services = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic to your website.",
      features: [
        "Keyword Research & Strategy",
        "On-Page SEO Optimization",
        "Technical SEO Audits",
        "Link Building Campaigns",
        "Local SEO Optimization",
      ],
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "PPC Advertising",
      description: "Strategic pay-per-click campaigns that maximize ROI and conversions.",
      features: [
        "Google Ads Management",
        "Social Media Advertising",
        "Display & Remarketing",
        "Landing Page Optimization",
        "Conversion Tracking",
      ],
    },
    {
      icon: <Share2 className="h-10 w-10 text-primary" />,
      title: "Social Media",
      description: "Engage your audience and build brand awareness across social platforms.",
      features: [
        "Platform Strategy & Setup",
        "Content Creation & Curation",
        "Community Management",
        "Influencer Partnerships",
        "Performance Analytics",
      ],
    },
    {
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: "Email Marketing",
      description: "Targeted email campaigns that nurture leads and drive customer retention.",
      features: [
        "Campaign Strategy & Planning",
        "Email Template Design",
        "Automation & Workflows",
        "List Segmentation",
        "A/B Testing & Optimization",
      ],
    },
    {
      icon: <PenTool className="h-10 w-10 text-primary" />,
      title: "Content Creation",
      description: "Compelling content that tells your story and connects with your audience.",
      features: [
        "Blog Posts & Articles",
        "Whitepapers & Ebooks",
        "Video Production",
        "Infographics & Visuals",
        "Content Distribution",
      ],
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Analytics & Reporting",
      description: "Data-driven insights to measure performance and optimize strategies.",
      features: [
        "Custom Dashboard Setup",
        "KPI Tracking & Analysis",
        "Conversion Optimization",
        "Competitive Analysis",
        "Monthly Performance Reports",
      ],
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

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 text-primary font-medium text-sm">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Comprehensive Digital Marketing Solutions
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We offer a full spectrum of digital marketing services tailored to your business goals and target
              audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90">
                Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">Schedule a Consultation</Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-lg"></div>
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Our Services"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-muted/50">
              <TabsTrigger value="all" className="text-base px-6">
                All Services
              </TabsTrigger>
              <TabsTrigger value="seo" className="text-base px-6">
                SEO
              </TabsTrigger>
              <TabsTrigger value="ppc" className="text-base px-6">
                PPC
              </TabsTrigger>
              <TabsTrigger value="social" className="text-base px-6">
                Social Media
              </TabsTrigger>
              <TabsTrigger value="content" className="text-base px-6">
                Content
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {services.map((service, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 border-t-4 border-t-primary">
                    <CardHeader>
                      <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">{service.icon}</div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="link" className="mt-6 p-0">
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="seo">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 border-t-4 border-t-primary lg:col-span-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="p-6">
                    <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                      <Search className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">SEO Optimization</h3>
                    <p className="text-muted-foreground mb-6">
                      Our comprehensive SEO services help improve your search rankings and drive organic traffic to your
                      website. We use data-driven strategies to ensure your business appears at the top of search
                      results for relevant keywords.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Keyword Research & Strategy</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>On-Page SEO Optimization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Technical SEO Audits</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Link Building Campaigns</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Local SEO Optimization</span>
                      </li>
                    </ul>
                    <Button className="bg-primary hover:bg-primary/90">
                      Get Started with SEO <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="relative h-full min-h-[300px] lg:min-h-0">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="SEO Services"
                      fill
                      className="object-cover rounded-r-lg"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ppc">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 border-t-4 border-t-primary lg:col-span-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="p-6">
                    <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                      <BarChart3 className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">PPC Advertising</h3>
                    <p className="text-muted-foreground mb-6">
                      Our strategic pay-per-click campaigns maximize ROI and conversions. We create and manage targeted
                      ads that appear at the top of search results and across relevant websites to drive immediate
                      traffic.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Google Ads Management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Social Media Advertising</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Display & Remarketing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Landing Page Optimization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Conversion Tracking</span>
                      </li>
                    </ul>
                    <Button className="bg-primary hover:bg-primary/90">
                      Start PPC Campaigns <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="relative h-full min-h-[300px] lg:min-h-0">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="PPC Services"
                      fill
                      className="object-cover rounded-r-lg"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="social">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 border-t-4 border-t-primary lg:col-span-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="p-6">
                    <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                      <Share2 className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Social Media Marketing</h3>
                    <p className="text-muted-foreground mb-6">
                      Engage your audience and build brand awareness across social platforms. We develop and execute
                      social media strategies that connect with your target audience and drive meaningful engagement.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Platform Strategy & Setup</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Content Creation & Curation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Community Management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Influencer Partnerships</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Performance Analytics</span>
                      </li>
                    </ul>
                    <Button className="bg-primary hover:bg-primary/90">
                      Boost Social Presence <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="relative h-full min-h-[300px] lg:min-h-0">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Social Media Services"
                      fill
                      className="object-cover rounded-r-lg"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 border-t-4 border-t-primary lg:col-span-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="p-6">
                    <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                      <PenTool className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Content Creation</h3>
                    <p className="text-muted-foreground mb-6">
                      We create compelling content that tells your story and connects with your audience. Our content
                      strategies are designed to educate, engage, and convert your target market.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Blog Posts & Articles</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Whitepapers & Ebooks</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Video Production</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Infographics & Visuals</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Content Distribution</span>
                      </li>
                    </ul>
                    <Button className="bg-primary hover:bg-primary/90">
                      Create Engaging Content <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="relative h-full min-h-[300px] lg:min-h-0">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Content Creation Services"
                      fill
                      className="object-cover rounded-r-lg"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

