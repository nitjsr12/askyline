"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioItems } from "@/lib/constants/portfolio";

export function PortfolioGrid() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-2 bg-gray-800 rounded-full text-blue-400 text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-xl text-gray-300">
            Explore our latest projects and see how we deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="block bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-700 hover:border-gray-600 hover:scale-[1.02]"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-400 font-medium mb-2">
                  {item.category}
                </div>
                <h3 className="font-semibold text-xl text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}