import { AboutHero } from "@/components/about/AboutHero";
import { MissionVision } from "@/components/about/MissionVision";
import { OurProcess } from "@/components/about/OurProcess";
import { WhyChooseUs } from "@/components/about/WhyChooseUs";
import AboutUs from "@/components/home/AboutUs";
import { CallToAction } from "@/components/services/CallToAction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Us | Digital Marketing Agency India | Founder Story | Askyline',
  description: 'Founder-led digital marketing agency helping 50+ Indian businesses grow online. Transparent, results-focused, startup-friendly. Learn our story and why we\'re different.',
  keywords: 'digital marketing agency Bangalore, best SEO company India, startup-friendly digital agency, transparent digital marketing, results-focused marketing agency',
  metadataBase: new URL('https://askylinedigital.com'),
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'About Us | Digital Marketing Agency India | Founder Story | Askyline',
    description: 'Founder-led digital marketing agency helping 50+ Indian businesses grow online. Transparent, results-focused, startup-friendly. Learn our story.',
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