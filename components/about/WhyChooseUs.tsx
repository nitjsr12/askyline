"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Expertise You Can Trust",
    description: "Our team brings years of experience and industry knowledge to every project.",
  },
  {
    title: "Tailored Solutions",
    description: "We create custom strategies to meet your unique business needs.",
  },
  {
    title: "Proven Results",
    description: "Our work consistently delivers measurable results and drives success.",
  },
  {
    title: "Cutting-Edge Technology",
    description: "We leverage the latest technologies to keep you ahead of the competition.",
  },
  {
    title: "Dedicated Support",
    description: "Our team is available to assist you at every step of your journey.",
  },
  {
    title: "Affordable Pricing",
    description: "We provide top-notch services at competitive prices to maximize your ROI.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
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
            Why Choose Us?
          </h2>
          <p className="text-gray-600 text-lg">
            We combine expertise, innovation, and dedication to deliver exceptional results for our clients.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-primary">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
