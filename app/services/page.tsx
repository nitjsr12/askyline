

import { CallToAction } from "@/components/services/CallToAction";
import { ServiceDetails } from "@/components/services/ServiceDetails";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Comprehensive Digital Services - Your Partner in Growth',
  description: `As a leading digital services provider, we offer a comprehensive suite of solutions to elevate your brand's online presence and drive growth.
  Our services include web development, app development, SEO, and digital marketing, tailored to meet your unique business needs.`,
  keywords: 'digital services, web development, app development, SEO, digital marketing, online presence, brand growth, comprehensive solutions',
  openGraph: {
    title: 'Comprehensive Digital Services - Your Partner in Growth',
    description: 'As a leading digital services provider, we offer a comprehensive suite of solutions to elevate your brand\'s online presence and drive growth.',
    url: 'https://askylinedigital.com/services',
    siteName: 'Askylinedigital',
  },
};
export default function ServicesPage() {
  return (
    <main>
      <ServiceHero/>
      <ServiceDetails />
      <CallToAction />
    </main>
  );
}
