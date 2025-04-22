"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Search,
  BarChart2,
  TrendingUp,
  Globe,
  FileText,
  Link,
  Smartphone,
  Target,
  Mail,
  Share2,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

export const SEOPage = () => {
  const [activeTab, setActiveTab] = useState("services");

  const services = [
    {
      title: "SEO Optimization",
      icon: <Search className="w-6 h-6" />,
      description: "Improve your search rankings and organic traffic",
      features: [
        "Keyword research",
        "On-page optimization",
        "Technical SEO audits",
        "Content strategy"
      ]
    },
    {
      title: "PPC Advertising",
      icon: <BarChart2 className="w-6 h-6" />,
      description: "Drive targeted traffic through paid campaigns",
      features: [
        "Google Ads management",
        "Facebook/Instagram ads",
        "Conversion tracking",
        "ROI optimization"
      ]
    },
    {
      title: "Content Marketing",
      icon: <FileText className="w-6 h-6" />,
      description: "Attract and engage your target audience",
      features: [
        "Blog content creation",
        "Content strategy",
        "SEO-optimized writing",
        "Content distribution"
      ]
    },
    {
      title: "Social Media Marketing",
      icon: <Share2 className="w-6 h-6" />,
      description: "Build your brand and community",
      features: [
        "Platform strategy",
        "Content calendar",
        "Community management",
        "Influencer partnerships"
      ]
    }
  ];

  const process = [
    {
      title: "Research & Analysis",
      description: "We analyze your current performance and competitors",
      icon: <Search className="w-5 h-5" />
    },
    {
      title: "Strategy Development",
      description: "Custom plan tailored to your business goals",
      icon: <Target className="w-5 h-5" />
    },
    {
      title: "Implementation",
      description: "Execution of all marketing activities",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "Monitoring & Reporting",
      description: "Continuous optimization based on data",
      icon: <BarChart2 className="w-5 h-5" />
    }
  ];

  return (
    <div className="bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image 
            src="images/seo-hero.png"
            alt="SEO Hero Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 " />
        </div>
        
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-blue-400 mb-6 mx-auto"
          >
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm font-medium">Digital Marketing</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-bold mb-6"
          >
            SEO & Digital Marketing Services
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Data-driven strategies to increase your online visibility, traffic, and conversions
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Marketing Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-green-500/10 text-blue-400">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <Image
                src="/images/seo-process.png"
                alt="SEO Process"
                width={600}
                height={400}
                className="w-full rounded-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-blue-400 mb-6">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium">Our Process</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">Data-Driven Marketing Approach</h2>
              
              <div className="space-y-6">
                {process.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1 text-blue-400">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        <span className="text-blue-400">0{index + 1}.</span> {step.title}
                      </h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Business Online?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can improve your digital presence and drive more qualified leads.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-lg transition-colors">
                Get Free Audit
              </button>
              <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium text-lg transition-colors">
                Book Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};