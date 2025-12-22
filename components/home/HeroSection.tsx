"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Users, ArrowUpRight,MessageCircle } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export function HeroSection() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 3 });
    return animation.stop;
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gray-900 text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
      
      {/* Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Empowering Brands 
              </span>
              <br />
              with Digital Solutions
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
            We are a tech-based digital marketing agency in India, specialized in helping startups and growing businesses scale with tailored web development, mobile app solutions, and digital marketing strategies. Grounded in our vision, we&apos;re here to lift your brand to the top of the skyline.

            </p>
            <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a 
              href="/services" 
              className="group relative overflow-hidden inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="relative z-10 flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Rocket className="w-4 h-4" />
                </motion.div>
                Explore Our Services 
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  →
                </motion.span>
              </Button>
            </motion.a>

            <motion.a 
              href="/contact" 
              className="group relative overflow-hidden inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="relative z-10 flex items-center gap-2 border-2 border-purple-500/50 hover:border-purple-500 text-white hover:bg-purple-500/10 backdrop-blur-sm transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                Get in Touch
              </Button>
            </motion.a>
        </motion.div>


            {/* Stats */}
            
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden ">
              <Image
                src="/images/heroside (1).gif"
                alt="Digital Solutions"
                width={500}
                height={500}
                className="object-cover w-full h-full"
                priority
              />
              <div className="absolute inset-0 " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}