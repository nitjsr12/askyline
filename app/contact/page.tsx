import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { FAQS } from "@/components/contact/FaqSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Us | Free Growth Audit | Digital Marketing Agency India',
  description: 'Get your Free 30-Minute Growth Audit. Fast response (24 hours). WhatsApp chat available. Transparent pricing. No spam. Digital marketing agency India.',
  keywords: 'contact digital marketing agency, free website audit India, digital marketing consultation, get quote for SEO services',
  openGraph: {
    title: 'Contact Us | Free Growth Audit | Digital Marketing Agency India',
    description: 'Get your Free 30-Minute Growth Audit. Fast response (24 hours). WhatsApp chat available. Transparent pricing. No spam.',
    url: 'https://askylinedigital.com/contact',
    siteName: 'Askylinedigital',  
  }
};
export default function ContactPage() {
  return (
    <main className="pt-20">
      <ContactHero />
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
           
          </div>
        </div>
      </div>
      <FAQS/>
    </main>
  );
}