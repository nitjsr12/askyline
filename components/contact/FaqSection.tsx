'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSection = {
  title: string;
  items: FAQItem[];
};

const FAQAccordion = ({ 
  sections,
  activeIndex,
  setActiveIndex 
}: {
  sections: FAQSection[];
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}) => {
  return (
    <div className="space-y-8">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="space-y-4">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            {section.title}
          </h3>
          <div className="space-y-4">
            {section.items.map((item, itemIndex) => {
              // Corrected globalIndex logic
              const globalIndex =
                sections
                  .slice(0, sectionIndex)
                  .reduce((acc, sec) => acc + sec.items.length, 0) + itemIndex;

              const isActive = activeIndex === globalIndex;

              return (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                  className="border border-gray-700 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/10 transition-all"
                  whileHover={{ scale: 1.01 }}
                >
                  <motion.button
                    onClick={() => setActiveIndex(isActive ? null : globalIndex)}
                    className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-700/20 transition-colors"
                    whileTap={{ scale: 0.98 }}
                  >
                    <h4 className="text-lg font-medium text-gray-100 md:text-xl">
                      {item.question}
                    </h4>
                    <motion.span
                      animate={{ rotate: isActive ? 180 : 0 }}
                      className="ml-4 text-gray-400"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.span>
                  </motion.button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 text-gray-300"
                      >
                        <p className="leading-relaxed">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export function FAQS() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqSections: FAQSection[] = [
    {
      title: "Onboarding and Discovery",
      items: [
        {
          question: "How do I get started with Askyline Digital?",
          answer: "You can start by filling out our contact form, emailing us or reaching us on WhatsApp. We'll schedule a free discovery call to understand your needs and guide you through the next steps."
        },
        {
          question: "What happens during the discovery call?",
          answer: "We discuss your goals, target audience, project scope, and expectations. This helps us align technically and creatively before sending a proposal."
        },
        {
          question: "Do I need a detailed brief before contacting you?",
          answer: "Not necessarily. Even if you just have a rough idea, we can help shape it into a clear project plan during our discussions."
        },
        {
          question: "What kind of businesses do you work with?",
          answer: "We work with startups, small businesses, and growing brands — both in India and internationally. Whether you're launching or scaling, we tailor our solutions to you."
        },
        {
          question: "Can you help me define my project requirements?",
          answer: "Yes. We often assist clients with clarifying their needs, building user flows, and finalizing feature lists before development begins."
        }
      ]
    },
    {
      title: "Process and Collaboration",
      items: [
        {
          question: "How does the project workflow at Askyline Digital typically look?",
          answer: "We begin by understanding your requirements, then move into planning, design, development or campaign setup, testing, and final delivery. Throughout the process, you stay in the loop with updates, feedback cycles, and checkpoints."
        },
        {
          question: "How will we stay in touch during the project?",
          answer: "We communicate via your preferred channels, whether it's Email, WhatsApp, Zoom, or Google Meet. For tracking updates, changes, and deliverables, we use Notion and tools like Google Docs, Sheets, or MS Office as needed."
        },
        {
          question: "Do you provide regular reports and updates for SEO and marketing projects?",
          answer: "Yes. For SEO and digital marketing, we provide periodic reports on keyword rankings, performance metrics, traffic growth, and campaign insights, usually shared via Google Sheets, Docs, or custom dashboards, depending on your preference."
        },
        {
          question: "Can I request changes during the project?",
          answer: "Yes, we allow changes at defined stages. Small or reasonable changes are part of the process. However, if there are frequent revisions or major shifts in scope, we'll discuss how that may affect the timeline or cost and get your approval before proceeding."
        },
        {
          question: "How involved will I be throughout the project?",
          answer: "We keep you actively involved at key stages — from initial strategy discussions and design approvals to reviews and final delivery. Whether it's a website, app, or marketing campaign, your input shapes the outcome, and we make sure it aligns with your vision."
        }
      ]
    },
    {
      title: "Pricing, Timelines, and Payment",
      items: [
        {
          question: "How is pricing decided for web, app, or marketing projects?",
          answer: "Pricing depends on your project's scope, features, and goals. Whether it's a custom website, mobile app, or a full digital marketing strategy, we evaluate your requirements and provide a tailored quote."
        },
        {
          question: "Do you offer fixed packages or custom pricing?",
          answer: "We mostly follow custom, project-based pricing so we can provide value based on your specific needs. For SEO and digital marketing, we also offer monthly plans with flexible pricing depending on the services chosen."
        },
        {
          question: "What's the average timeline for development and marketing projects?",
          answer: "Websites usually take 2–4 weeks, mobile apps around 4–10 weeks, depending on complexity. SEO and marketing are ongoing, but you can start seeing early results within 4–6 weeks and stronger traction in 3–6 months."
        },
        {
          question: "Do you work with Indian as well as international clients?",
          answer: "Yes. We're based in India and work with clients across the globe. We adapt to your time zone and communication preferences, and accept both INR and international payments."
        },
        {
          question: "What are your payment terms?",
          answer: "For development, we usually follow a milestone-based payment structure — like 30% upfront, 40% midway, and 30% on delivery. For SEO/digital marketing, we usually bill monthly, with flexible options depending on the scope."
        }
      ]
    },
    {
      title: "Support and Handover",
      items: [
        {
          question: "Do you provide post-launch support?",
          answer: "Yes. We offer 30 days of free post-launch support. After that, you can opt for a monthly maintenance plan for updates, bug fixes, or performance checks."
        },
        {
          question: "Can I come back later for updates or upgrades?",
          answer: "Absolutely. We're here long-term and happy to scale your product as your business grows — whether it's adding new features, redesigning, or optimizing."
        },
        {
          question: "What if I want to pause or stop the project mid-way?",
          answer: "We understand plans change. We'll pause or terminate based on the signed agreement, and only charge for the completed milestones."
        },
        {
          question: "Will I fully own the code and assets?",
          answer: "Yes. Once the project is complete and payment is made, you own 100% of the code, designs, and assets we create for you."
        },
        {
          question: "Can I move the project to another team after it's done?",
          answer: "Yes. Everything is built in a way that's easy to hand over to another team if needed, you're never locked in."
        }
      ]
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Frequently Asked Questions
          </h2>

          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
            Everything you need to know about working with Askyline Digital. Can't find an answer? Reach out anytime.
          </p>

          <FAQAccordion 
            sections={faqSections} 
            activeIndex={activeIndex} 
            setActiveIndex={setActiveIndex} 
          />
        </motion.div>
      </div>
    </section>
  );
}
