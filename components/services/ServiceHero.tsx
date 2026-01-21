"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ServiceHero() {
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
           Digital Marketing Services That Bring You More Customers
          </motion.h1>
          
          <motion.p
            className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Every service is designed to solve a specific business problem. Clear outcomes, transparent pricing, results-focused approach. Starting with a Free Growth Audit to understand your needs.
          </motion.p>
          
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
        <a href="#services" className="flex flex-col items-center">
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
        </a>
      </motion.div>
    </section>
  );
}