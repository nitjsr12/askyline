"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Code, 
  Layers, 
  Cpu, 
  LayoutTemplate, 
  Server, 
  Zap, 
  Shield, 
  GitBranch, 
  BarChart, 
  Globe,
  ShoppingCart,
  Database,
  CheckCircle,
  Rocket,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

export function WebDevelopmentPage() {
  const [activeTab, setActiveTab] = useState("all");

  const technologies = [
    // Modern Stack
    { name: "Next.js", icon: <Code className="w-6 h-6" />, category: "Frontend" },
    { name: "React", icon: <Layers className="w-6 h-6" />, category: "Frontend" },
    { name: "TypeScript", icon: <Cpu className="w-6 h-6" />, category: "Frontend" },
    { name: "Tailwind CSS", icon: <LayoutTemplate className="w-6 h-6" />, category: "Frontend" },
    { name: "Node.js", icon: <Server className="w-6 h-6" />, category: "Backend" },
    { name: "Express", icon: <Zap className="w-6 h-6" />, category: "Backend" },
    { name: "MongoDB", icon: <Shield className="w-6 h-6" />, category: "Database" },
    { name: "PostgreSQL", icon: <GitBranch className="w-6 h-6" />, category: "Database" },
    { name: "GraphQL", icon: <BarChart className="w-6 h-6" />, category: "API" },
    
    // WordPress Ecosystem
    { name: "WordPress", icon: <Globe className="w-6 h-6" />, category: "CMS" },
    { name: "WooCommerce", icon: <ShoppingCart className="w-6 h-6" />, category: "E-commerce" },
    { name: "Elementor", icon: <LayoutTemplate className="w-6 h-6" />, category: "Page Builder" },
    { name: "ACF", icon: <Database className="w-6 h-6" />, category: "Custom Fields" },
    { name: "WP Rocket", icon: <Zap className="w-6 h-6" />, category: "Performance" }
  ];

  const developmentProcess = [
    {
      title: "Discovery & Planning",
      description: "We analyze your requirements, define project scope, and select the best platform (custom or WordPress).",
      steps: [
        "Requirement gathering",
        "Platform evaluation",
        "Project roadmap creation",
        "Tech stack selection"
      ]
    },
    {
      title: "UI/UX Design",
      description: "Our designers create intuitive interfaces and engaging user experiences.",
      steps: [
        "Wireframing",
        "Prototyping",
        "User flow mapping",
        "Design system creation"
      ]
    },
    {
      title: "Development",
      description: "Our developers build your website using modern technologies and best practices.",
      steps: [
        "Frontend development",
        "Backend development",
        "API integration",
        "Third-party services"
      ]
    },
    {
      title: "Testing & QA",
      description: "We rigorously test every component to ensure flawless performance.",
      steps: [
        "Unit testing",
        "Integration testing",
        "Performance testing",
        "Security audits"
      ]
    },
    {
      title: "Deployment",
      description: "We launch your website with zero downtime and optimal configuration.",
      steps: [
        "CI/CD pipeline setup",
        "Server configuration",
        "DNS management",
        "SSL certification"
      ]
    },
    {
      title: "Maintenance",
      description: "We provide ongoing support and updates to keep your website running smoothly.",
      steps: [
        "Performance monitoring",
        "Security updates",
        "Content updates",
        "Feature enhancements"
      ]
    }
  ];

  return (
    <div className="bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-gray-950" />
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,transparent)]" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-blue-400 mb-6"
          >
            <Code className="w-5 h-5" />
            <span className="text-sm font-medium">Web Development</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-bold mb-6 max-w-3xl"
          >
            Custom Web Development & WordPress Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl"
          >
            We build high-performance websites with modern technologies or WordPress, tailored to your business needs.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-4"
          >
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
              Get a Free Quote
            </button>
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors">
              View Portfolio
            </button>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We work with both modern frameworks and WordPress to deliver the perfect solution for your needs.
            </p>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <button 
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full ${activeTab === "all" ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}
            >
              All Technologies
            </button>
            <button 
              onClick={() => setActiveTab("modern")}
              className={`px-4 py-2 rounded-full ${activeTab === "modern" ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}
            >
              Modern Stack
            </button>
            <button 
              onClick={() => setActiveTab("wordpress")}
              className={`px-4 py-2 rounded-full ${activeTab === "wordpress" ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}
            >
              WordPress
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies
              .filter(tech => 
                activeTab === "all" || 
                (activeTab === "modern" && !["WordPress", "WooCommerce", "Elementor", "ACF", "WP Rocket"].includes(tech.name)) ||
                (activeTab === "wordpress" && ["WordPress", "WooCommerce", "Elementor", "ACF", "WP Rocket"].includes(tech.name))
              )
              .map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-blue-400">
                      {tech.icon}
                    </div>
                    <span className="text-sm text-gray-400">{tech.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{tech.name}</h3>
                  {tech.name === "WordPress" && (
                    <p className="text-sm text-gray-400 mt-2">Custom themes & plugins</p>
                  )}
                  {tech.name === "WooCommerce" && (
                    <p className="text-sm text-gray-400 mt-2">E-commerce solutions</p>
                  )}
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* WordPress Specific Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <Image
                src="/images/wordpress-development.png"
                alt="WordPress Development"
                width={600}
                height={400}
                className="w-full rounded-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-blue-400 mb-6">
               
                <span className="text-sm font-medium">WordPress Expertise</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">Professional WordPress Development</h2>
              <p className="text-gray-300 mb-6">
                We build custom WordPress solutions that combine the power of the world's most popular CMS with modern development practices.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 text-blue-400">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Custom Theme Development</h4>
                    <p className="text-gray-400">Bespoke designs without bloated page builders</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 text-blue-400">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Plugin Development</h4>
                    <p className="text-gray-400">Custom functionality tailored to your needs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 text-blue-400">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Headless WordPress</h4>
                    <p className="text-gray-400">Modern frontends with WordPress as a CMS</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 text-blue-400">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">WooCommerce Solutions</h4>
                    <p className="text-gray-400">Custom e-commerce implementations</p>
                  </div>
                </div>
              </div>

              <button className="flex items-center gap-2 text-blue-400 font-medium group">
                Learn more about our WordPress services
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold mb-6">Our Development Process</h2>
              <p className="text-gray-400 mb-8">
                Our proven 6-phase approach ensures we deliver high-quality websites on time and within budget.
              </p>
              <Image
                src="/images/web-dev-process.png"
                alt="Web Development Process"
                width={400}
                height={400}
                className="w-full max-w-md"
              />
            </div>
            
            <div className="md:w-2/3">
              <div className="space-y-8">
                {developmentProcess.map((phase, index) => (
                  <motion.div
                    key={phase.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900 rounded-xl p-6 border-l-4 border-blue-500"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-400">
                        <span className="text-xl font-bold">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-semibold">{phase.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{phase.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {phase.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400">
                          <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Web Project?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you need a simple website or a complex web application, we have the expertise to bring your vision to life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-lg transition-colors">
                Start Your Project Today
              </button>
              <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium text-lg transition-colors">
                Schedule a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}