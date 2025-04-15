"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Users, ArrowUpRight } from "lucide-react";
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
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Modern Digital
              </span>
              <br />
              Solutions for Your Business
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
            Askyline  Digital is your trusted partner for Digital Solutions and Digital Marketing. We provide Web and App Development, SEO, Digital Marketing, and CRM solutions that actually solve problems, not just look good. We're not just another agency, we are all about clarity, clean builds, and doing things the right way.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                <Rocket className="w-5 h-5 mr-2" />
                Get Started
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>

              <Button size="lg" variant="outline">
                <Users className="w-5 h-5 mr-2" />
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden aspect-square">
              <Image
                src="/images/heroside.gif"
                alt="Digital Solutions"
                width={600}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}