"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            pAskylinedigital is a full-service digital marketing and development agency based in Bangalore. We specialize in custom web development, mobile app development, and SEO solutions designed to help businesses grow and thrive online. With a focus on creativity, technology, and performance-driven strategies, we build digital experiences that drive real results.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
