"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] mt-[-10px] flex items-center justify-center overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-hero-bg.png" // Replace with your image path
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
            className="text-4xl font-bold md:text-5xl lg:text-6xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Our Story
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Founded in 2015, we've grown from a small team of passionate developers to a full-service digital agency helping businesses worldwide transform their ideas into reality.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button className="px-8 py-3 bg-white text-gray-900 font-medium rounded hover:bg-gray-100 transition-colors">
              Meet Our Team
            </button>
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