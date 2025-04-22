import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import AboutUs from "@/components/home/AboutUs"
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { WhyChooseUs } from "@/components/about/WhyChooseUs";
import { CallToAction } from "@/components/services/CallToAction";
import { FAQSection } from "@/components/home/FAQSection";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutUs/>
      <ServicesSection />
      <WhyChooseUs/>
      <PortfolioGrid/>
      <FAQSection/>
      <CallToAction/>
      <NewsletterSection/>
    </main>
  );
  
}
