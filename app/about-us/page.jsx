import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AboutHero from "@/components/about-hero"
import Team from "@/components/team"
import Values from "@/components/values"
import History from "@/components/history"
import Cta from "@/components/cta"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutHero />
      <Values />
      <History />
      <Team />
      <Cta />
      <Footer />
    </main>
  )
}

