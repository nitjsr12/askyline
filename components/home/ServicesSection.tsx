"use client";

import { Code, Globe, LineChart, MessageSquare, Smartphone, Users } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Custom Web Development",
    description: "Stunning, responsive websites built with cutting-edge technologies.",
  },
  {
    icon: Smartphone,
    title: "Intuitive Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: LineChart,
    title: "Data-Driven SEO",
    description: "Strategic SEO solutions to improve your online visibility and rankings.",
  },
  {
    icon: MessageSquare,
    title: "Social Media Marketing",
    description: "Engaging social campaigns that connect with your target audience.",
  },
  {
    icon: Code,
    title: "Custom Solutions",
    description: "Tailored software solutions to meet your specific business needs.",
  },
  {
    icon: Users,
    title: "CRM & Automation",
    description: "Streamlined CRM and workflow automation to enhance productivity.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Our Services
          </h2>
          <p className="text-gray-300 text-lg">
            Comprehensive digital solutions to help your business grow and succeed in the modern marketplace.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all shadow-md hover:shadow-xl hover:-translate-y-2 group"
            >
              {/* Service Icon */}
              <div className="mb-4 text-primary group-hover:text-white transition-colors">
                <service.icon className="w-10 h-10" />
              </div>
              {/* Service Title */}
              <h3 className="text-2xl font-heading font-semibold mb-2 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              {/* Service Description */}
              <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
