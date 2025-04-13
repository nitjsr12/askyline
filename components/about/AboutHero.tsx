"use client";

import { motion } from "framer-motion";
import { SparklesCore } from "./ui/sparkles"; // You'll need to create this component

export function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-900 h-[40vh] md:h-[50vh] flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/80 to-gray-900" />

      <div className="container relative z-10 px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.16, 0.77, 0.47, 0.97]
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h1
            className="text-5xl font-bold md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 pb-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            About Us
          </motion.h1>
          
          <motion.p
            className="max-w-3xl mx-auto mt-6 text-xl text-gray-300 md:text-2xl md:mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Discover the story behind <span className="font-semibold text-cyan-400">Askylinedigital</span>, our mission, and the talented team that makes it all happen.
          </motion.p>
          
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button className="px-8 py-3 text-sm font-medium transition-all duration-300 transform rounded-full md:px-10 md:py-4 md:text-base bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
              Meet the Team
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scrolling animation indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400">
          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
}