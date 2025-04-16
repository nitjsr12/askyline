"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, ArrowRight } from "lucide-react";

export function MissionVision() {
  return (
    <section className="relative py-24 overflow-hidden bg-gray-900">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-900/30 to-transparent" />
        
        {/* Floating circles */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-900/20 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-purple-900/20 blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative overflow-hidden rounded-2xl bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700"
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            
            <div className="p-8 lg:p-10 space-y-6">
              <div className="inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-br from-blue-900/50 to-blue-800/30 text-blue-400">
                <Target className="w-8 h-8" />
              </div>
              
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">
                Our Mission
              </h2>
              
              <p className="text-gray-300 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth,
                enhance efficiency, and create lasting value. We are committed to delivering
                excellence through cutting-edge technology and strategic thinking.
              </p>
              <motion.div
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-blue-400 font-medium mt-4"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.div>
            </div>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.4
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative overflow-hidden rounded-2xl bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700"
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            
            <div className="p-8 lg:p-10 space-y-6">
              <div className="inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-br from-purple-900/50 to-purple-800/30 text-purple-400">
                <Lightbulb className="w-8 h-8" />
              </div>
              
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-300">
                Our Vision
              </h2>
              
              <p className="text-gray-300 leading-relaxed">
                To be the leading force in digital transformation, recognized globally
                for our innovative solutions, exceptional service, and the measurable
                success we bring to our clients businesses.
              </p>
              <motion.div
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-purple-400 font-medium mt-4"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}