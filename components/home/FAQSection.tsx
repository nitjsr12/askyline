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
      question: 'What kind of services does Askyline Digital provide?',
      answer:
        'We offer full-service tech and digital marketing solutions, including custom web development, mobile app development, and performance-driven SEO and digital marketing. Everything we build is modern, scalable, and tailored to your business needs.',
    },
    {
      question: 'Which technologies do you specialize in?',
      answer:
        'We work with the latest technologies to deliver high-performing products. Our web solutions use React.js, Next.js, Node.js, and Python. For apps, we build native and cross-platform apps using React Native and Flutter. All our solutions are optimized for performance, SEO, and user experience.',
    },
    {
      question: 'Can you develop e-commerce websites or apps?',
      answer:
        'Yes! We build e-commerce platforms using Shopify, WooCommerce, and custom solutions. Whether you need an online store, a product catalogue, or secure payment integration, we\'ve got you covered.',
    },
    {
      question: 'Do you offer SEO and digital marketing along with development?',
      answer:
        'Absolutely. We provide comprehensive SEO services from technical SEO and keyword strategy to content marketing and local SEO. Our digital marketing services include PPC campaigns, social media marketing, and conversion rate optimization to drive measurable results.',
    },
    {
      question: 'How is pricing determined for projects?',
      answer:
        'Our pricing is flexible and based on your project\'s complexity, features, and timeline. Since we\'re a new agency, we\'re offering startup-friendly pricing to build lasting client relationships. Reach out for a free quote tailored to your needs.',
    },
    {
      question: 'Can you improve or scale my existing website or app?',
      answer:
        'Yes! Whether you need a performance audit, feature enhancements, better SEO, or a full redesign, we can help upgrade your current digital product without starting from scratch.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
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
            Frequently Asked Questions
          </h2>
          
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
            Can't find what you're looking for? We're here to help answer any questions you might have.
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
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all hover:scale-[1.02] text-center"
            >
              Contact Us 
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}