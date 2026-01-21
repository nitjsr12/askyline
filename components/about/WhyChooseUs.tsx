"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    title: "We're Indian, We Get It",
    description: "We understand local markets, customer behavior, and pricing expectations. No fancy jargon – just results that matter to your business.",
  },
  {
    title: "Founder-Led & Personal",
    description: "Not a big agency where you're just a number. Direct access to decision-maker, faster responses, real accountability. I started this while working a full-time job, so I know what it's like to build a business.",
  },
  {
    title: "Results-Focused, Not Feature-Focused",
    description: "We care about YOUR revenue, not our portfolio. Every solution is built to solve your specific business problem.",
  },
  {
    title: "Transparent Pricing & Process",
    description: "No hidden costs, no surprises. Clear timelines and regular updates throughout the project. Startup-friendly pricing available.",
  },
  {
    title: "Startup-Friendly Pricing",
    description: "We offer competitive rates because we're building relationships, not just projects. Payment plans available for growing businesses.",
  },
  {
    title: "We Listen First",
    description: "Every project begins with understanding your business, your goals, and the real challenges you're facing. We ask the right questions.",
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
    <section className="py-16 bg-gray-900 text-white">
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
            Why Indian Business Owners Trust Us
          </h2>
          <p className="text-gray-300 text-lg">
            We don&apos;t overpromise. We simply stay committed to helping your business grow — with results, transparency, and care. Here&apos;s why you can trust us:
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