"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Rocket, MessageCircle, Sparkles, Users, Code, Globe, Workflow } from "lucide-react";
import { useEffect, useState } from "react";

export default function AboutUs() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [particles, setParticles] = useState<Array<{ left: number; top: number; duration: number; x: number; y: number }>>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Generate particle positions only on client
    const particleData = Array.from({ length: 15 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
    }));
    setParticles(particleData);
  }, []);

  useEffect(() => {
    const animation = animate(count, 50, { duration: 3 });
    return animation.stop;
  }, []);

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center p-8 sm:p-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient Circles */}
        <motion.div
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 0, 180],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating Particles */}
        {mounted && particles.map((particle, i) => {
          const targetX = particle.x + (Math.sin(i) * 20);
          const targetY = particle.y + (Math.cos(i) * 20);
          return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-400"
            initial={{
                x: particle.x,
                y: particle.y,
              opacity: 0
            }}
            animate={{
                x: [particle.x, targetX, particle.x],
                y: [particle.y, targetY, particle.y],
              opacity: [0, 0.5, 0],
            }}
            transition={{
                duration: particle.duration,
              repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }}
            style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
            }}
          />
          );
        })}
      </div>

      {/* Content Container */}
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10" id="about">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium">Our Story</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Who We Are: A Tech Agency That Actually Gets Indian Businesses
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
           We're not just marketers. We're builders who use technology to solve real business problems. Every solution we deliver is designed to bring you more customers – not just more traffic.
          </motion.p>
          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
           Askyline Digital is a tech-based digital marketing agency in Bangalore. We believe technology is the backbone of every great brand in the digital age. We're builders, developers, and problem-solvers who use technology to craft meaningful, scalable solutions for startups and growing businesses.
          </motion.p>
          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            From high-performance websites to robust mobile apps and data-driven marketing, we design systems built to adapt and evolve. Every solution is grounded in technology and tailored to your business goals—because we know that true growth happens when strategy meets smart execution.
          </motion.p>
          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Recognized as one of the top digital marketing agencies in Bangalore, we go beyond surface-level campaigns. As a digital solutions company, we combine deep technical expertise with creative insight to help brands move faster, operate smarter, and connect better with their audience. We stay grounded in our values: transparency, collaboration, and simplicity.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div 
              className="p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <Users className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    <motion.span>{rounded}</motion.span>+
                  </p>
                  <p className="text-sm text-gray-400">Happy Clients</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/20">
                  <Code className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">60+</p>
                  <p className="text-sm text-gray-400">Projects Delivered</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-green-500/50 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500/20">
                  <Workflow className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">6+</p>
                  <p className="text-sm text-gray-400">Years of Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="pt-6"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Want to join them? Get your Free Growth Audit →
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          <motion.div
            variants={floatingVariants}
            animate="float"
            className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-2 border-purple-500/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 z-20 pointer-events-none" />
            <Image
              src="/images/aboutus.png"
              alt="About Us"
              width={600}
              height={600}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Floating decorative elements */}
          <motion.div 
            className="absolute top-8 left-8 w-16 h-16 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-8 right-8 w-24 h-24 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30"
            animate={{
              y: [0, 20, 0],
              rotate: [360, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}