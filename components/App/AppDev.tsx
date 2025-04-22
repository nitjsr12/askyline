"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Code,
  Layers,
  Cpu,
  Zap,
  Shield,
  GitBranch,
  BarChart,
  Apple,
  Smartphone,
  Database,
  CheckCircle,
  ArrowRight,
  Rocket,
  Server,
  LayoutTemplate,
} from "lucide-react";
import { useState } from "react";

export const AppDevelopmentPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const technologies = [
    // Cross-Platform
    { name: "React Native", icon: <Code className="w-6 h-6" />, category: "Cross-Platform" },
    { name: "Flutter", icon: <Layers className="w-6 h-6" />, category: "Cross-Platform" },
    
    // iOS
    { name: "Swift", icon: <Apple className="w-6 h-6" />, category: "iOS" },
    { name: "SwiftUI", icon: <LayoutTemplate className="w-6 h-6" />, category: "iOS" },
    
    // Android
    { name: "Kotlin", icon: <Smartphone className="w-6 h-6" />, category: "Smartphone" },
    { name: "Jetpack Compose", icon: <LayoutTemplate className="w-6 h-6" />, category: "Android" },
    
    // Backend
    { name: "Firebase", icon: <Zap className="w-6 h-6" />, category: "Backend" },
    { name: "Node.js", icon: <Server className="w-6 h-6" />, category: "Backend" },
    
    // Database
    { name: "MongoDB", icon: <Database className="w-6 h-6" />, category: "Database" },
    { name: "Realm", icon: <Shield className="w-6 h-6" />, category: "Database" },
    
    // Tools
    { name: "GraphQL", icon: <BarChart className="w-6 h-6" />, category: "API" },
    { name: "Fastlane", icon: <GitBranch className="w-6 h-6" />, category: "DevOps" }
  ];

  const developmentProcess = [
    {
      title: "Strategy & Planning",
      description: "We define your app's goals, target audience, and technical requirements.",
      steps: [
        "Market research",
        "Feature prioritization",
        "Technical feasibility study",
        "Roadmap creation"
      ]
    },
    {
      title: "UI/UX Design",
      description: "We create intuitive interfaces and seamless user experiences.",
      steps: [
        "User flow mapping",
        "Wireframing",
        "Prototyping",
        "Design system creation"
      ]
    },
    {
      title: "Development",
      description: "We build your app using modern architectures and best practices.",
      steps: [
        "Native or cross-platform development",
        "API integration",
        "Third-party services",
        "Real-time features"
      ]
    },
    {
      title: "Quality Assurance",
      description: "We rigorously test your app across all scenarios and devices.",
      steps: [
        "Unit & integration testing",
        "Device compatibility testing",
        "Performance optimization",
        "Security audits"
      ]
    },
    {
      title: "Deployment",
      description: "We handle app store submissions and launch preparations.",
      steps: [
        "App Store Connect setup",
        "Google Play Console setup",
        "Beta testing",
        "Release management"
      ]
    },
    {
      title: "Maintenance",
      description: "We provide ongoing support and updates post-launch.",
      steps: [
        "Performance monitoring",
        "Bug fixes",
        "Feature updates",
        "OS compatibility"
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
            <Smartphone className="w-5 h-5" />
            <span className="text-sm font-medium">App Development</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-bold mb-6 max-w-3xl"
          >
            Custom Mobile App Development
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl"
          >
            We build high-performance mobile apps for iOS and Android that users love.
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
              View App Portfolio
            </button>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mobile Tech Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We use modern, battle-tested technologies to build fast, secure, and scalable mobile applications.
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
              onClick={() => setActiveTab("cross-platform")}
              className={`px-4 py-2 rounded-full ${activeTab === "cross-platform" ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}
            >
              Cross-Platform
            </button>
            <button 
              onClick={() => setActiveTab("native")}
              className={`px-4 py-2 rounded-full ${activeTab === "native" ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}
            >
              Native
            </button>
            <button 
              onClick={() => setActiveTab("backend")}
              className={`px-4 py-2 rounded-full ${activeTab === "backend" ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}
            >
              Backend
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies
              .filter(tech => 
                activeTab === "all" || 
                (activeTab === "cross-platform" && ["React Native", "Flutter"].includes(tech.name)) ||
                (activeTab === "native" && ["Swift", "SwiftUI", "Kotlin", "Jetpack Compose"].includes(tech.name)) ||
                (activeTab === "backend" && ["Firebase", "Node.js", "MongoDB", "Realm", "GraphQL", "Fastlane"].includes(tech.name))
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
                  {tech.name === "React Native" && (
                    <p className="text-sm text-gray-400 mt-2">JavaScript cross-platform</p>
                  )}
                  {tech.name === "Flutter" && (
                    <p className="text-sm text-gray-400 mt-2">Dart cross-platform</p>
                  )}
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Native Development Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <Image
                src="/images/native-app-dev.png"
                alt="Native App Development"
                width={600}
                height={400}
                className="w-full rounded-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-blue-400 mb-6">
                <Smartphone className="w-5 h-5" />
                <span className="text-sm font-medium">Native Development</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">Premium Native App Experience</h2>
              <p className="text-gray-300 mb-6">
                We build truly native mobile applications that leverage the full potential of iOS and Android platforms.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 text-blue-400">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">iOS Development</h4>
                    <p className="text-gray-400">Swift & SwiftUI for premium Apple experiences</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 text-blue-400">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Android Development</h4>
                    <p className="text-gray-400">Kotlin & Jetpack Compose for modern Android apps</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 text-blue-400">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Platform-Specific Features</h4>
                    <p className="text-gray-400">Full access to device capabilities and APIs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 text-blue-400">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">App Store Optimization</h4>
                    <p className="text-gray-400">Professional ASO for better discoverability</p>
                  </div>
                </div>
              </div>

              <button className="flex items-center gap-2 text-blue-400 font-medium group">
                <a href="/contact">Learn more about native development </a>
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
              <h2 className="text-3xl font-bold mb-6">Our App Development Process</h2>
              <p className="text-gray-400 mb-8">
                Our proven 6-phase approach ensures we deliver high-quality mobile apps on time and within budget.
              </p>
              <Image
                src="/images/app-dev-process.png"
                alt="App Development Process"
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
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you need a simple MVP or a complex enterprise application, we have the expertise to bring your vision to life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-lg transition-colors">
               <a href="/contact">Start Your App Project</a> 
              </button>
              <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium text-lg transition-colors">
                <a href="/contact">Schedule a Consultation</a>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );

};
// Removed redundant export statement