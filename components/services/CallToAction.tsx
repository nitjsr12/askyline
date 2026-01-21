"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function CallToAction() {
  return (
    <section className="relative py-20 overflow-hidden bg-gray-900">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/30 via-gray-900 to-gray-900" />
        
        {/* Floating orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Phone className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-gray-300">Let&apos;s Connect</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Ready to Get More Leads
            </span>
            <br />
            <span className="text-white">for Your Business?</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Every successful business started with a single step. Yours can start with a <strong className="text-purple-400">Free 30-Minute Growth Audit</strong>. No sales pitch, just honest feedback on how to get more customers online.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-base rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              <span className="hidden sm:inline">Get Free Growth Audit</span>
              <span className="sm:hidden">Free Audit</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>

            <motion.a
              href="https://wa.me/917256889395?text=Hi,%20I%27m%20interested%20in%20your%20Free%20Growth%20Audit"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-base rounded-lg bg-gray-800 border-2 border-green-500/50 hover:border-green-500 text-white font-semibold shadow-lg hover:bg-gray-700/50 transition-all"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Chat on WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating contact info */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p>We respond within 24 hours. No spam, no pushy sales calls.</p>
        <p className="mt-1">
          <span>Call: </span>
          <a href="tel:+917256889395" className="text-blue-400 hover:text-blue-300 transition-colors">
            +91 7256889395
          </a>
        </p>
      </motion.div>
    </section>
  );
}