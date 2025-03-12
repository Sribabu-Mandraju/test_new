import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Clients from "@/components/clients"
import Services from "@/components/services"
import Process from "@/components/process"
import Portfolio from "@/components/portfolio"
import About from "@/components/about"
import Team from "@/components/team"
import Testimonials from "@/components/testimonials"
import Faq from "@/components/faq"
import Contact from "@/components/contact"
import Cta from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <Process />
      <Portfolio />
      <About />
      <Team />
      <Testimonials />
      <Faq />
      <Cta />
      <Contact />
      <Footer />
    </main>
  )
}

