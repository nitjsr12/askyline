"use client";

import { motion } from "framer-motion";

export function PortfolioHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Explore our latest projects and see how we've helped businesses
            achieve their digital goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}