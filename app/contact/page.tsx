import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { FAQS } from "@/components/contact/FaqSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Us - Top Digital Transformation Company in India',  
  description: `Get in touch with us for all your digital transformation needs. We are here to help you with web development, app development, and digital marketing solutions.`,
  keywords: 'contact us, digital transformation, web development, app development, digital marketing, customer support, inquiries, business solutions',
  openGraph: {
    title: 'Contact Us - Top Digital Transformation Company in India',
    description: 'Get in touch with us for all your digital transformation needs. We are here to help you with web development, app development, and digital marketing solutions.',
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