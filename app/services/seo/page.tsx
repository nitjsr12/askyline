
import { SEOPage } from "@/components/seo/SEOPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'SEO Services - Top SEO Company in India',
  description: `As a leading SEO company in India, we specialize in enhancing your online visibility and driving organic traffic to your website.
  Our SEO services are tailored to meet your business needs, ensuring a seamless user experience and robust functionality.`,
  keywords: 'SEO services, search engine optimization, top SEO company, digital marketing, online visibility, organic traffic, SEO strategies, keyword research',
  openGraph: {
    title: 'SEO Services - Top SEO Company in India',
    description: 'As a leading SEO company in India, we specialize in enhancing your online visibility and driving organic traffic to your website.',
    url: 'https://askylinedigital.com/seo',
    siteName: 'Askylinedigital',  
  }
};
export default function SEO() {
  return (
    <main>
      <SEOPage />
    </main>
  );
}