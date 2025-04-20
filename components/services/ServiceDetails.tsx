"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Code, Smartphone, Search, ChevronDown, Rocket, CheckCircle } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Your website is one of your most valuable business assets. At Askyline Digital, we create high-performing, custom websites that are designed to reflect your brand and support your goals. From initial design to final deployment, every part of your site is built to deliver a smooth, responsive experience across all devices. Whether you’re launching a new product, scaling your services, or upgrading an outdated platform, we provide the strategy, design, and development expertise to bring it all together.",
    image: "/images/portfolio-1.jpg",
    details: [
      "User-focused UI and UX design",
      "Front-end development with React and Next.js",
      "Scalable back-end solutions using Node.js and Python",
      "E-commerce development with Shopify or WooCommerce",
      "SEO-ready architecture and performance optimization",
      "Ongoing website maintenance and technical support"
    ],
    features: [
      "Mobile-first, fully responsive design",
      "CMS integration for easy content management",
      "Custom API development and third-party integration",
      "Progressive Web App capabilities",
      "Web accessibility standards compliance"
    ],
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "At Askyline Digital, we design and develop mobile applications that deliver real value to users and measurable results for businesses. Whether you need a native ios or Android app or a cross-platform solution, we focus on building clean, intuitive mobile experiences that are optimized for performance, usability, and long-term success. From MVPS to full-featured enterprise apps, our process is guided by clear communication, strategic planning, and technical excellence.",
    image: "/images/portfolio-2.jpg",
    details: [
      "Native ios and Android app development",
      "Cross-platform development using React Native and Flutter",
      "App Store and Play Store deployment and optimization",
      "Integration of push notifications and real-time updates",
      "Secure authentication, including biometric login"
    ],
    features: [
      "Offline access and data sync",
      "In-app purchases and payment integration",
      "Social media login and sharing",
      "Real-time analytics and crash reporting",
      "Enterprise-grade security and compliance"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Search,
    title: "SEO and Digital Marketing",
    description: "At Askyline Digital, we help businesses improve their online presence through data-driven SEO and digital marketing strategies. Our approach is rooted in analysis, not guesswork. We evaluate where your brand stands today, identify growth opportunities, and execute targeted strategies that improve rankings, drive traffic, and increase conversions. Whether you're looking to build long-term organic visibility or run high-performing paid campaigns, we provide a complete solution to help you compete effectively in the digital space.",
    image: "/images/portfolio-3.jpg",
    details: [
      "Comprehensive SEO audits and site analysis",
      "Keyword research and content strategy",
      "Technical SEO improvements",
      "Link building and content marketing",
      "Local SEO and Google Business profile optimization"
    ],
    features: [
      "Competitor benchmarking and reporting",
      "Conversion rate optimization",
      "Paid search and PPC campaign management",
      "Social media marketing strategy and execution",
      "Monthly performance reports and insights"
    ],
    color: "from-green-500 to-teal-500"
  }
];

export function ServiceDetails() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10" id="services">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-gray-800 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-800 to-transparent opacity-50" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: [0, 0.3, 0],
              scale: [0.5, 1.2, 0.8]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-blue-400 mb-6">
            <Rocket className="w-5 h-5" />
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-gray-300">
            Tailored services designed to elevate your digital presence
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Image */}
                <div className="relative h-64 md:h-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  <div className={`inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br ${service.color} text-white mb-6`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>

                  <button
                    onClick={() => setExpandedService(expandedService === index ? null : index)}
                    className="flex items-center gap-2 text-blue-400 font-medium mb-6"
                  >
                    {expandedService === index ? 'Show less' : 'View full details'}
                    <motion.div
                      animate={{ rotate: expandedService === index ? 180 : 0 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedService === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Service Includes:</h4>
                            <ul className="space-y-2">
                              {service.details.map((item, i) => (
                                <li key={i} className="flex items-start">
                                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-300">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                            <ul className="space-y-2">
                              {service.features.map((item, i) => (
                                <li key={i} className="flex items-start">
                                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-300">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}