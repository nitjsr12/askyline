"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Code, Globe, LineChart, Smartphone, Users, Rocket, 
  Database, Server, Shield, Layout, ShoppingCart 
} from "lucide-react";
import { useEffect } from "react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "A website that converts visitors into customers (not just looks good). Outcome: 3-5x more inquiries. Mobile-responsive, fast loading, SEO-ready. Starting at ₹50,000.",
    hoverColor: "from-purple-500 to-indigo-500"
  },
  {
    icon: LineChart,
    title: "SEO Services",
    description: "Your business appears on Google when customers search for what you sell. Outcome: 10-50 qualified leads per month without ads. Keyword research, on-page SEO, monthly reports. Starting at ₹15,000/month.",
    hoverColor: "from-red-500 to-pink-500"
  },
  {
    icon: Rocket,
    title: "Google Ads / Meta Ads",
    description: "Pay only when someone clicks. Guaranteed visibility when customers are searching. Outcome: 20-100 leads per month. Track every rupee spent. Starting at ₹10,000/month ad spend + ₹5,000 management fee.",
    hoverColor: "from-blue-500 to-cyan-500"
  },
  {
    icon: Layout,
    title: "Complete Digital Marketing",
    description: "End-to-end online strategy that brings customers to your door. Website optimization + SEO + Social Media + Ads. Outcome: 2-5x increase in online inquiries and sales. Starting at ₹20,000/month.",
    hoverColor: "from-green-500 to-teal-500"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description: "Beautiful online stores that convert visitors to paying customers. Secure payment, inventory management, mobile-responsive. Shopify, WooCommerce, or custom. Starting at ₹1,50,000.",
    hoverColor: "from-orange-500 to-amber-500"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native iOS/Android apps or cross-platform solutions that engage your customers. App Store optimization, push notifications, secure payments. Outcome: 40-60% increase in customer engagement. Starting at ₹2,00,000.",
    hoverColor: "from-yellow-500 to-lime-500"
  }
];

export function ServicesSection() {
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
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={container}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 mb-6">
            <Rocket className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium">Our Services</span>
          </motion.div>

          <motion.h2 variants={item} className="text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              How We Help You Get More Customers
            </span>
          </motion.h2>

          <motion.p variants={item} className="text-gray-300">
            Every service is designed to bring you more customers, not just more traffic. Clear outcomes, transparent pricing, results-focused approach.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative p-8 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.hoverColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
              
              <motion.div 
                className="mb-6 p-3 w-14 h-14 rounded-lg bg-gray-700/50 group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors duration-300" />
              </motion.div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>
              
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={container}
          className="mt-16 text-center"
        >
          <motion.div variants={item} className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Ready to Get More Leads for Your Business?
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Every successful business started with a single step. Yours can start with a <strong className="text-purple-400">Free 30-Minute Growth Audit</strong>. No sales pitch, just honest value.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-base rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                <span className="hidden sm:inline">Get Free Growth Audit</span>
                <span className="sm:hidden">Free Audit</span>
              </motion.a>
              <motion.a
                href="https://wa.me/917256889395?text=Hi,%20I%27m%20interested%20in%20your%20Free%20Growth%20Audit"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-base rounded-lg bg-gray-800 border-2 border-green-500/50 hover:border-green-500 text-white font-semibold transition-all"
              >
                <span className="hidden sm:inline">Chat on WhatsApp</span>
                <span className="sm:hidden">WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}