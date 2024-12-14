"use client";

import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 text-lg">
            Partner with us to create innovative digital solutions for your business.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block px-6 py-3 bg-white text-primary rounded-lg shadow-lg font-semibold transition-transform"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
