"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ChevronDown } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [showServices, setShowServices] = useState(false);

  const services = [
    "Audit My Website",
    "New Website Development",
    "SEO Services",
    "Digital Marketing",
    "Mobile App Development",
    "Other Inquiry"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add form submission logic here
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-xl"
    >
      <h2 className="text-2xl font-bold text-white mb-2">Get in Touch</h2>
      <p className="text-gray-400 mb-6">Let's discuss how we can help your business grow</p>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div className="space-y-1">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
            placeholder="Your full name"
          />
        </div>

        {/* Business Name */}
        <div className="space-y-1">
          <label htmlFor="business" className="block text-sm font-medium text-gray-300">
            Business Name
          </label>
          <input
            type="text"
            id="business"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
            placeholder="Your company name"
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
            placeholder="your@email.com"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
            placeholder="+1 (123) 456-7890"
          />
        </div>

        {/* Website */}
        <div className="space-y-1">
          <label htmlFor="website" className="block text-sm font-medium text-gray-300">
            Website URL
          </label>
          <input
            type="url"
            id="website"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
            placeholder="https://yourwebsite.com"
          />
        </div>

        {/* Services Dropdown */}
        <div className="space-y-1 relative">
          <label htmlFor="services" className="block text-sm font-medium text-gray-300">
            Services Needed
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowServices(!showServices)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-left text-white flex items-center justify-between"
            >
              {selectedService || "Select a service"}
              <ChevronDown className={`w-5 h-5 transition-transform ${showServices ? 'transform rotate-180' : ''}`} />
            </button>
            {showServices && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute z-10 mt-1 w-full bg-gray-700 border border-gray-600 rounded-lg shadow-lg"
              >
                {services.map((service) => (
                  <div
                    key={service}
                    className="px-4 py-2 hover:bg-gray-600 cursor-pointer text-white"
                    onClick={() => {
                      setSelectedService(service);
                      setShowServices(false);
                    }}
                  >
                    {service}
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Submit Inquiry
              <Send className="w-5 h-5" />
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
}