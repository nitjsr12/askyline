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
            <a href="/services" className="group relative overflow-hidden">
              <Button
                size="lg"
                className="relative z-10 flex items-center gap-2"
              >
                <Rocket className="w-4 h-4 transition-transform group-hover:rotate-12" />
                Explore Our Services 
              </Button>
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
            </a>

            <a href="/contact" className="group relative overflow-hidden">
              <Button
                variant="outline"
                size="lg"
                className="relative z-10 flex items-center gap-2 hover:bg-gray-800/50"
              >
                <MessageCircle className="w-4 h-4 transition-transform group-hover:rotate-12" />
                Get in Touch
              </Button>
              <span className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
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