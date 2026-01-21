

import { CallToAction } from "@/components/services/CallToAction";
import { ServiceDetails } from "@/components/services/ServiceDetails";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Digital Marketing Services India | Website, SEO, Ads | Askyline',
  description: 'Professional digital marketing services for Indian SMEs. Website development (₹50K+), SEO (₹15K/mo), Google Ads, complete marketing. Free Growth Audit. Transparent pricing.',
  keywords: 'website development company India, SEO services India, Google Ads management India, digital marketing agency Bangalore, lead generation services, e-commerce development India',
  openGraph: {
    title: 'Digital Marketing Services India | Website, SEO, Ads | Askyline',
    description: 'Professional digital marketing services for Indian SMEs. Website development (₹50K+), SEO (₹15K/mo), Google Ads, complete marketing. Free Growth Audit.',
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
