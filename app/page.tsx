import Navigation from "./components/Navigation"
import HeroSection from "./components/HeroSection"
import FeaturesSection from "./components/FeaturesSection"
import ProductDemoSection from "./components/ProductDemoSection"
import InteractivePricingCalculator from "./components/InteractivePricingCalculator"
import PricingSection from "./components/PricingSection"
import TestimonialsSection from "./components/TestimonialsSection"
import FAQSection from "./components/FAQSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-950">
      <Navigation />
      <div className="pt-14 sm:pt-16 lg:pt-18">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="demo">
          <ProductDemoSection />
        </section>
        <section id="interactive-pricing">
          <InteractivePricingCalculator />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
        <Footer />
      </div>
    </main>
  )
}
