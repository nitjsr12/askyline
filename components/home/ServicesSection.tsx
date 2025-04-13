"use client";

import { Code, Globe, LineChart, MessageSquare, Smartphone, Users, Rocket, Database, Server, Shield, Layout, Cpu, PieChart } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: Globe,
    title: "Custom Web Development",
    description: "Bespoke websites built with React, Next.js, and modern frameworks for unparalleled performance and user experience.",
    features: ["Responsive Design", "CMS Integration", "E-commerce Solutions", "Web Accessibility"],
    hoverColor: "from-purple-500 to-indigo-500"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android using Flutter and React Native.",
    features: ["iOS & Android", "Offline Capabilities", "Push Notifications", "App Store Optimization"],
    hoverColor: "from-blue-500 to-cyan-500"
  },
  {
    icon: LineChart,
    title: "SEO & Digital Marketing",
    description: "Data-driven strategies to boost your online visibility and drive qualified traffic to your business.",
    features: ["Keyword Research", "Technical SEO", "Content Strategy", "Analytics Tracking"],
    hoverColor: "from-green-500 to-teal-500"
  },
  {
    icon: Server,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and serverless architectures for modern business needs.",
    features: ["AWS/Azure/GCP", "DevOps Automation", "Microservices", "CI/CD Pipelines"],
    hoverColor: "from-orange-500 to-amber-500"
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with powerful analytics and visualization tools.",
    features: ["BI Dashboards", "Predictive Analytics", "Data Warehousing", "ETL Processes"],
    hoverColor: "from-red-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and customer data.",
    features: ["Penetration Testing", "Security Audits", "Compliance", "Threat Monitoring"],
    hoverColor: "from-yellow-500 to-lime-500"
  }
];

export function ServicesSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 mb-6"
          >
            <Rocket className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium">What We Offer</span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Comprehensive Digital Solutions
            </span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300"
          >
            End-to-end services designed to elevate your digital presence and drive measurable business growth.
          </motion.p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover="hover"
              className="group relative h-full"
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg`} />
              
              <div className="h-full p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 group-hover:border-transparent transition-all shadow-lg group-hover:shadow-xl overflow-hidden">
                {/* Service Icon */}
                <div className="mb-6 p-3 w-14 h-14 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 group-hover:bg-white/10 transition-all flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors" />
                </div>

                {/* Service Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
                    {service.description}
                  </p>

                  <div className="pt-4 mt-4 border-t border-gray-700 group-hover:border-gray-600 transition-colors">
                    <h4 className="text-sm font-semibold text-gray-400 group-hover:text-gray-300 mb-3 transition-colors">
                      KEY FEATURES
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-purple-400 mr-2 mt-1">•</span>
                          <span className="text-gray-300 group-hover:text-gray-100 transition-colors">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mt-20 text-center"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6">
              Ready to transform your digital presence?
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Get a Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg bg-gray-800 border border-gray-700 text-white font-semibold shadow-lg hover:shadow-xl hover:bg-gray-700/50 transition-all"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}