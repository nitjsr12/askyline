'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FAQItem = {
  question: string;
  answer: string;
};

const FAQItems = ({ 
  items,
  activeIndex,
  setActiveIndex 
}: {
  items: FAQItem[];
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}) => {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="border border-gray-700 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/10 transition-all"
          whileHover={{ scale: 1.01 }}
        >
          <motion.button
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-700/20 transition-colors"
            whileHover={{ backgroundColor: 'rgba(55, 65, 81, 0.2)' }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="text-lg font-medium text-gray-100 md:text-xl">
              {item.question}
            </h3>
            <motion.span
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              className="ml-4 text-gray-400 text-xl"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.span>
          </motion.button>

          <AnimatePresence>
            {activeIndex === index && (
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
      ))}
    </div>
  );
};

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'How much does it cost to build a website?',
      answer:
        'Our website development starts at ₹50,000 for a basic business website (5-7 pages). E-commerce websites start at ₹1,50,000. We provide transparent pricing upfront – no hidden costs. Payment plans available for startups.',
    },
    {
      question: 'How long does it take to see results from SEO?',
      answer:
        'SEO is a long-term strategy. You\'ll typically see initial improvements in 2-3 months, and significant ranking improvements in 4-6 months. However, the results compound over time. Most of our clients see 2-3x more organic traffic within 6 months.',
    },
    {
      question: 'What\'s included in the Free Growth Audit?',
      answer:
        'We review your website, current online presence, and business goals. Then we send you a detailed PDF report within 24 hours with: website performance analysis, SEO opportunities you\'re missing, quick wins to get more leads, recommendations specific to your business. No sales pitch, just honest value.',
    },
    {
      question: 'Do you work with small businesses?',
      answer:
        'Yes! In fact, most of our clients are SMEs and startups. We offer startup-friendly pricing and payment plans. We believe every business, regardless of size, deserves professional digital marketing.',
    },
    {
      question: 'What makes you different from other agencies?',
      answer:
        'We\'re founder-led, transparent, and results-focused. No fancy buzzwords. We care about your revenue, not our portfolio. Plus, direct access to decision-maker means faster responses and real accountability.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer:
        'Yes! We offer monthly maintenance packages starting at ₹5,000/month. This includes website updates, security monitoring, backups, and basic content changes. You can also reach us on WhatsApp for urgent issues.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
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
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Frequently Asked Questions About Our Services
          </h2>
          
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
            Got questions? We've got answers. Can't find what you're looking for? Chat with us on WhatsApp or get your Free Growth Audit.
          </p>

          <FAQItems 
            items={faqs} 
            activeIndex={activeIndex} 
            setActiveIndex={setActiveIndex} 
          />

          <motion.div 
            className="mt-16 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="/contact"
              className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-base bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all hover:scale-[1.02] text-center"
            >
              <span className="hidden sm:inline">Get Free Growth Audit</span>
              <span className="sm:hidden">Free Audit</span>
            </a>
            <a
              href="https://wa.me/917256889395?text=Hi,%20I%20have%20a%20question"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-base bg-gray-800 border-2 border-green-500/50 hover:border-green-500 text-white font-medium rounded-xl hover:shadow-lg transition-all hover:scale-[1.02] text-center"
            >
              <span className="hidden sm:inline">Chat on WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}