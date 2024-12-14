import { AboutHero } from "@/components/about/AboutHero";
import { MissionVision } from "@/components/about/MissionVision";
import { TeamSection } from "@/components/about/TeamSection";
import { WhyChooseUs } from "@/components/about/WhyChooseUs";

export default function AboutPage() {
  return (
    <main className="pt-20">
      <AboutHero />
      <MissionVision />
      <TeamSection />
      <WhyChooseUs />
    </main>
  );
}