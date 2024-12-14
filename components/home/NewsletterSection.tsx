"use client";

import { motion } from "framer-motion";

export function NewsletterSection() {
  return (
    <section id="newsletter" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        {/* Section Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-heading text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Stay Updated
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Subscribe to our newsletter and never miss an update. Get the latest news, trends, and insights delivered straight to your inbox.
          </p>

          {/* Form */}
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-auto flex-1 px-6 py-3 rounded-lg text-gray-900 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold"
            >
              Subscribe
            </motion.button>
          </form>

          {/* Success Message Placeholder */}
          <p className="mt-4 text-gray-400 text-sm">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
