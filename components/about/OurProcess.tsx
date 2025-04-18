"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, Smartphone, Server, Rocket, CheckCircle } from "lucide-react";

export function OurProcess() {
  const processSteps = [
    {
      icon: Search,
      title: "Discovery & Research",
      description: "We dive deep into your business goals, target audience, and competitors to build a solid foundation for your project.",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: PenTool,
      title: "Design & Strategy",
      description: "Our designers create wireframes and prototypes while our strategists plan the perfect user journey for your customers.",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: Code,
      title: "Development",
      description: "Our developers bring designs to life with clean, efficient code using the latest technologies and best practices.",
      color: "from-amber-400 to-orange-400"
    },
    {
      icon: Smartphone,
      title: "Testing & QA",
      description: "We rigorously test across all devices and scenarios to ensure flawless performance before launch.",
      color: "from-emerald-400 to-teal-400"
    },
    {
      icon: Server,
      title: "Deployment",
      description: "We handle all technical aspects of launching your project, from server setup to performance optimization.",
      color: "from-indigo-400 to-blue-400"
    },
    {
      icon: Rocket,
      title: "Growth & Scaling",
      description: "Post-launch, we help scale your solution and implement growth strategies to maximize your ROI.",
      color: "from-red-400 to-pink-400"
    }
  ];

  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-gray-800 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-800 to-transparent opacity-50" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-blue-400 mb-6">
            <Rocket className="w-5 h-5" />
            <span className="text-sm font-medium">Our Methodology</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            The Askyline Digital Process
          </h2>
          <p className="text-xl text-gray-300">
            A proven framework that delivers exceptional results every time
          </p>
        </motion.div>

        {/* Process timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 -translate-x-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`relative ${isEven ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left lg:mt-20'}`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute top-6 w-4 h-4 rounded-full bg-gradient-to-br ${step.color} shadow-lg border-2 border-gray-900 hidden lg:block ${isEven ? '-right-2' : '-left-2'}`} />
                  
                  <div className="p-8 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700">
                    <div className={`inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br ${step.color} text-white mb-6 ${isEven ? 'lg:ml-auto' : ''}`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    
                    <div className={`flex items-center gap-2 mb-2 ${isEven ? 'lg:justify-end' : ''}`}>
                      <span className="text-sm font-medium text-gray-400">Step {index + 1}</span>
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}