import { AboutHero } from "@/components/about/AboutHero";
import { MissionVision } from "@/components/about/MissionVision";
import { OurProcess } from "@/components/about/OurProcess";
import { WhyChooseUs } from "@/components/about/WhyChooseUs";
import AboutUs from "@/components/home/AboutUs";
import { CallToAction } from "@/components/services/CallToAction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Your Trusted Partner for Digital Transformation Solutions',
  description: 'As a trusted partner for your digital journey, we use cutting-edge technology to craft scalable and transformational digital solutions for your brand.',
  keywords: 'digital transformation, technology solutions, digital solutions, scalable solutions, brand transformation',
  metadataBase: new URL('https://askylinedigital.com'),
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Your Trusted Partner for Digital Transformation Solutions',
    description: 'As a trusted partner for your digital journey, we use cutting-edge technology to craft scalable and transformational digital solutions for your brand.',
    url: 'https://askylinedigital.com/about',
    siteName: 'Askylinedigital',
  },
};

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