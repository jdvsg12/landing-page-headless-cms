"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Navbar } from "@/components/navbar"
import { HeroBanner } from "@/components/hero-banner"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <LanguageProvider>
      <main>
        <Navbar />
        <HeroBanner />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <div className="relative z-40">
          <Footer />
        </div>
      </main>
    </LanguageProvider>
  )
}
