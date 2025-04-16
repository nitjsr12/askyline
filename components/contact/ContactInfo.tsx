"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "HSR Layout, Bengaluru, Karnataka 560102",
    link: "https://maps.google.com/?q=HSR+Layout+Bengaluru",
    color: "text-red-400"
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 89185 67430",
    link: "tel:+918918567430",
    color: "text-blue-400"
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@askylinedigital.com",
    link: "mailto:info@askylinedigital.com",
    color: "text-purple-400"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "+91 89185 67430",
    link: "https://wa.me/918918567430",
    color: "text-green-400"
  }
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-8 bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-lg"
    >
      <div>
        <h2 className="text-2xl font-bold text-white mb-3">
          Contact <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Information</span>
        </h2>
        <p className="text-gray-400">
          Get in touch with us through any of these channels. We&apos;re here to help!
        </p>
      </div>

      <div className="space-y-6">
        {contactInfo.map((item) => (
          <motion.a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-700/50 transition-all"
          >
            <div className={`p-3 bg-gray-700 rounded-lg ${item.color}`}>
              <item.icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-gray-300 mb-1">{item.title}</h3>
              <p className="text-gray-400 hover:text-white transition-colors">
                {item.content}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Working Hours */}
      <div className="pt-6 mt-6 border-t border-gray-700">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gray-700 rounded-lg text-amber-400">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-medium text-gray-300 mb-1">Working Hours</h3>
            <p className="text-gray-400">Monday - Friday: 9AM - 6PM</p>
            <p className="text-gray-400">Saturday: 10AM - 4PM</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}