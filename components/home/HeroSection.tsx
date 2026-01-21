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
    <section className="relative min-h-screen flex items-center bg-gray-900 text-white overflow-hidden pt-24 md:pt-28">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
      
      {/* Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              More Leads & Sales for Your Business in India
              </span>
              <br />
              <span className="text-white">Without the Marketing Fluff</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Your business deserves more than just a pretty website. You need customers who actually buy. Askyline Digital helps Indian SMEs and startups get 3-5x more inquiries through smart website development and digital marketing. Start with a <strong className="text-purple-400">Free 30-Minute Growth Audit</strong>.
            </p>
            <motion.div
            className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a 
              href="/contact" 
              className="group relative overflow-hidden inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="relative z-10 flex items-center gap-2 text-xs sm:text-sm md:text-base bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 px-4 sm:px-6 py-2 sm:py-3"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                  <Rocket className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.div>
                <span className="hidden sm:inline">Get Free Growth Audit</span>
                <span className="sm:hidden">Free Audit</span>
                <motion.span
                  className="ml-2 text-xs sm:text-sm font-normal hidden sm:inline"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  → (30 min, zero sales pitch)
                </motion.span>
              </Button>
            </motion.a>

            <motion.a 
              href="https://wa.me/917256889395?text=Hi,%20I%27m%20interested%20in%20your%20Free%20Growth%20Audit" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="relative z-10 flex items-center gap-2 text-xs sm:text-sm md:text-base border-2 border-green-500/50 hover:border-green-500 text-white hover:bg-green-500/10 backdrop-blur-sm transition-all duration-300 px-4 sm:px-6 py-2 sm:py-3"
              >
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Chat on WhatsApp</span>
                <span className="sm:hidden">WhatsApp</span>
              </Button>
            </motion.a>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 pt-2 text-xs sm:text-sm text-gray-400 justify-center lg:justify-start">
              <span>✓ Respond within 24 hours</span>
              <span className="hidden sm:inline">•</span>
              <span>✓ Trusted by 50+ Businesses</span>
            </div>
        </motion.div>


            {/* Stats */}
            
          </div>

          {/* Right Column */}
          <div className="relative mt-10 lg:mt-0">
            <div className="relative rounded-xl overflow-hidden max-w-sm sm:max-w-md mx-auto lg:mx-0">
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