

import { WebDevelopmentPage } from "@/components/web/WebDevelopmentPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Top Web Development Latest Technology Company in India',
  description: `From custom websites to WordPress and eCommerce, we are among the top web development companies in Bangalore building powerful, scalable, and stunning web apps.
  Our web development services are tailored to meet your business needs, ensuring a seamless user experience and robust functionality.`,
  keywords: 'web development, web design, custom websites, eCommerce development, WordPress development, responsive design, web applications, top web development company',
  
  openGraph: {
    title: 'Top Web Development Latest Technology Company in India',
    description: 'From custom websites to WordPress and eCommerce, we are among the top web development companies in Bangalore building powerful, scalable, and stunning web apps.',
    url: 'https://askylinedigital.com/web-development',
    siteName: 'Askylinedigital',
  }
};

export default function WebPage() {
  return (
    <main>
      <WebDevelopmentPage/>
    </main>
  );
}
