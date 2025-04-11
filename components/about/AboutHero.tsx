"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export function AboutHero() {
  const constraintsRef = useRef(null);

  return (
    <section 
      className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
      ref={constraintsRef}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-white/10 rounded-full"
            initial={{
              scale: 0,
              opacity: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            animate={{
              scale: [0, 1, 0.5],
              opacity: [0, 0.3, 0],
              rotate: 360
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "anticipate"
            }}
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-[80vh] flex items-center justify-center">
        <motion.div 
          className="max-w-4xl backdrop-blur-xl bg-black/30 p-8 rounded-3xl border border-white/10 shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.div
            className="inline-block relative"
            animate={{
              background: [
                'linear-gradient(45deg, #6366f1, #8b5cf6)',
                'linear-gradient(135deg, #8b5cf6, #3b82f6)',
                'linear-gradient(225deg, #3b82f6, #6366f1)'
              ],
              backgroundSize: ['400% 400%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              About Us
            </h1>
          </motion.div>

          <motion.p
            className="mt-8 text-xl md:text-2xl text-gray-300 font-light leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Discover the story behind{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-medium">
              Askylinedigital
            </span>, our mission, and the talented team that makes innovation happen.
          </motion.p>

          <motion.div
            className="mt-12 flex justify-center space-x-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            viewport={{ once: true }}
          >
            <button className="relative overflow-hidden px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span className="text-white font-semibold">Meet the Team</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-20 transition-opacity" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-400 rounded-full blur-[20px]"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-6 h-6 bg-blue-400 rounded-full blur-[30px]"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
    </section>
  );
}