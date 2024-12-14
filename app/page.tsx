import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import  AboutUs  from "@/components/home/AboutUs"
import { FounderMessage } from "@/components/home/FounderMessage";
import { WorkPortfolio } from "@/components/home/ PortfolioSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { BlogSection } from "@/components/home/BlogSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutUs/>
      <ServicesSection />
      <FounderMessage/>
      <WorkPortfolio/>
      <ReviewsSection/>
      <BlogSection/>
      <NewsletterSection/>
    </main>
  );
}