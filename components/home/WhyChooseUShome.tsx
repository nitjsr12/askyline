"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Target, Ear, Heart, Zap, Shield, TrendingUp } from "lucide-react";

export function WhyChooseUsHome() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const reasons = [
    {
      icon: Ear,
      title: "Tech-Driven Approach",
      description: "We combine cutting-edge technology with creative solutions, ensuring your digital presence is built to scale and adapt to future needs."
    },
    {
      icon: Target,
      title: "Tailored for Startups and Growth",
      description: "No fancy buzzwords or overcomplication. Just clear, thoughtful solutions built to solve real problems."
    },
    {
      icon: TrendingUp,
      title: "We Build With Intention",
      description: "Everything we design has purpose—from user flows to SEO strategy. Nothing is random."
    },
    {
      icon: Heart,
      title: "We Care Like It's Our Own",
      description: "Your growth feels personal to us. We put our heart into helping you succeed."
    },
    {
      icon: Zap,
      title: "We Deliver Without Drama",
      description: "Clean processes, transparent communication, and respected deadlines. Working with us stays smooth."
    },
    {
      icon: Shield,
      title: "We Stay Curious",
      description: "We constantly explore new tools and ideas—not for trends, but to find what works better for you."
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={container}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2 
            variants={item}
            className="text-4xl font-bold mb-6 text-gray-900"
          >
            Why Work With Us
          </motion.h2>
          
          <motion.p 
            variants={item}
            className="text-xl text-gray-600 mb-12"
          >
            We don't overpromise. We simply stay committed to doing the work right — with intention, clarity, and care.
          </motion.p>

          <motion.div 
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-6">
                  <reason.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}