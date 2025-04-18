import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { FAQS } from "@/components/contact/FaqSection";

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