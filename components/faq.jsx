"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Faq() {
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
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 text-primary font-medium text-sm">
            FAQ
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our digital marketing services.
          </p>
        </div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Still have questions? We're here to help.</p>
          <Button className="bg-primary hover:bg-primary/90">
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

