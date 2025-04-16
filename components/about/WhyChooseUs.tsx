"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    title: "We Listen First",
    description: "Every project begins with understanding your vision, your goals, and the real challenges you're facing. We ask the right questions, and we pay attention to the details that matter.",
  },
  {
    title: "We Keep It Simple and Honest",
    description: "No fancy buzzwords, no overcomplication. Just clear, thoughtful solutions built to solve real problems.",
  },
  {
    title: "We Build With Intention",
    description: "Everything we design or develop has a reason behind it — whether it's the user flow of your app, or the structure of your SEO strategy. Nothing is random.",
  },
  {
    title: "We Care Like It's Our Own",
    description: "We genuinely care about the businesses we work with. Your growth feels personal to us, and we put our heart into helping you get there.",
  },
  {
    title: "We Deliver Without the Drama",
    description: "Clean processes. Transparent communication. Deadlines that are respected. Working with us is smooth, and stays that way.",
  },
  {
    title: "We Stay Curious",
    description: "Tech moves fast, and so do we. We're constantly exploring new tools, platforms, and ideas — not for the sake of trends, but to find what works better for you.",
  },
];

export function WhyChooseUs() {
  const ref = useRef(null);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Why Work With Us
          </h2>
          <p className="text-gray-300 text-lg">
            We don&apos;t overpromise. We simply stay committed to doing the work right — with intention, clarity, and care. Here&apos;s how we approach every project:
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate="visible"
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-transparent transition-all"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-20 transition-opacity -z-10" />
              
              <div className="mb-6 p-3 w-14 h-14 rounded-lg bg-gray-700/50 group-hover:bg-white/10 transition-all flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors" />
              </div>
    
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}