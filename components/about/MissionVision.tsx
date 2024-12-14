"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";

export function MissionVision() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-lg p-8 space-y-6 text-center md:text-left"
          >
            <div className="inline-block p-4 bg-primary/10 rounded-full text-primary">
              <Target className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-primary">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To empower businesses with innovative digital solutions that drive growth,
              enhance efficiency, and create lasting value. We're committed to delivering
              excellence through cutting-edge technology and strategic thinking.
            </p>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-lg p-8 space-y-6 text-center md:text-left"
          >
            <div className="inline-block p-4 bg-secondary/10 rounded-full text-secondary">
              <Lightbulb className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-secondary">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To be the leading force in digital transformation, recognized globally
              for our innovative solutions, exceptional service, and the measurable
              success we bring to our clients' businesses.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
