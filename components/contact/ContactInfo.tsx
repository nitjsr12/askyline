"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "HSR layout,Bengaluru, karnataka 560102",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+917256889395",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@askylinedigital.com",
  },
 
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <h2 className="font-heading text-2xl font-bold mb-6">Contact Information</h2>
        <p className="text-gray-600 mb-8">
          Get in touch with us through any of these channels. We're here to help!
        </p>
      </div>

      <div className="space-y-6">
        {contactInfo.map((item) => (
          <div key={item.title} className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <item.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}