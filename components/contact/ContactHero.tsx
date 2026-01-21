"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ContactHero() {
  return (
    <section className="relative w-full min-h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-24 md:pt-28">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services-hero-bg.png" // Replace with your image path
          alt="Our Team Working"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 " /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
           Let's Talk About Growing Your Business
          </motion.h1>
          
          <motion.p
            className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Get a <strong className="text-purple-400">Free 30-Minute Growth Audit</strong>. No sales pitch, just honest feedback on how to get more customers online. Fill the form below or chat on WhatsApp for instant answers.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span>✓ We respond within 24 hours (usually faster!)</span>
            <span>✓ Free audit delivered via email</span>
            <span>✓ No spam, no pushy sales calls</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolling indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M7 10L12 15L17 10" />
        </svg>
      </motion.div>
    </section>
  );
}