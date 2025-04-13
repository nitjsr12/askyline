"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Slot } from '@radix-ui/react-slot';
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Users, ArrowUpRight, Sparkles, Globe, Code, Smartphone } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 3 });

    return animation.stop;
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

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
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"
        />
        
        {/* Glowing Circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            opacity: 0
          }}
          animate={{
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute w-1 h-1 rounded-full bg-purple-400"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Content */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Innovative Digital Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
                animate={{
                  backgroundPositionX: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Crafting Digital
              </motion.span>
              <br />
              Solutions that{" "}
              <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
                animate={{
                  backgroundPositionX: ['100%', '0%', '100%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Transform
              </motion.span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Your trusted partner for web and app development, SEO, SMM, and CRM solutions.
              We help businesses thrive in the digital age.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button size="lg" className="relative overflow-hidden group">
                  <a
                    href="#contact"
                    className="relative z-10 flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold"
                  >
                    <Rocket className="w-5 h-5" />
                    Get Started
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500"
                    initial={{ opacity: 1 }}
                    whileHover={{
                      opacity: 0.9,
                      background: [
                        'linear-gradient(to right, #8b5cf6, #3b82f6)',
                        'linear-gradient(to right, #3b82f6, #8b5cf6)'
                      ],
                      transition: { duration: 0.5 }
                    }}
                  />
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </Button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button size="lg" variant="outline" className="group">
                  <a
                    href="#portfolio"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold"
                  >
                    <Users className="w-5 h-5" />
                    View Our Work
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
              <motion.div 
                className="p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    <Globe className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">
                      +<motion.span>{rounded}</motion.span>
                    </p>
                    <p className="text-sm text-gray-400">Projects</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <Code className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">50+</p>
                    <p className="text-sm text-gray-400">Technologies</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500/20">
                    <Smartphone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">100+</p>
                    <p className="text-sm text-gray-400">Clients</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <motion.div
              variants={floatingVariants}
              animate="float"
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-2 border-purple-500/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm z-20 pointer-events-none" />
              <div className="relative aspect-square">
                <Image
                  src="/images/heroside.gif"
                  alt="Digital Solutions"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>
              {/* Floating elements */}
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}