import { AboutHero } from "@/components/about/AboutHero";
import { MissionVision } from "@/components/about/MissionVision";
import { OurProcess } from "@/components/about/OurProcess";
import { TeamSection } from "@/components/about/TeamSection";
import { WhyChooseUs } from "@/components/about/WhyChooseUs";
import AboutUs from "@/components/home/AboutUs";
import { CallToAction } from "@/components/services/CallToAction";

export default function AboutPage() {
  return (
    <main className="pt-20">
      <AboutHero />
      <AboutUs/>
      <MissionVision />
      <OurProcess/>
      <WhyChooseUs />
      <CallToAction/>
    </main>
  );
}