"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ChevronDown, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    website: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showServices, setShowServices] = useState(false);

  const services = [
    "Audit My Website",
    "New Website Development",
    "SEO Services",
    "Digital Marketing",
    "Mobile App Development",
    "Other Inquiry"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to submit form');
      }

      setSubmitSuccess(true);
      setFormData({
        name: "",
        business: "",
        email: "",
        phone: "",
        website: "",
        service: "",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-xl text-center"
      >
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-gray-300 mb-6">
          Your message has been sent successfully. We&apos;ll get back to you soon.
        </p>
        <p className="text-gray-400">
          A confirmation email has been sent to your inbox.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-xl"
    >
      <h2 className="text-2xl font-bold text-white mb-2">Get in Touch</h2>
      <p className="text-gray-400 mb-6">Fill out the form below and we&apos;ll respond promptly</p>
      
      {submitError && (
        <div className="mb-4 p-3 bg-red-900/50 border border-red-700 rounded-lg text-red-200">
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
       
        <div className="space-y-1">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            name="business"
            value={formData.business}
            onChange={handleChange}
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
            name="email"
            value={formData.email}
            onChange={handleChange}
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
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
            placeholder="+91 12345 67890"
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
            name="website"
            value={formData.website}
            onChange={handleChange}
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
            <input
              type="hidden"
              name="service"
              value={formData.service}
            />
            <button
              type="button"
              onClick={() => setShowServices(!showServices)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-left text-white flex items-center justify-between"
            >
              {formData.service || "Select a service"}
              <ChevronDown className={`w-5 h-5 transition-transform ${showServices ? 'transform rotate-180' : ''}`} />
            </button>
            {showServices && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute z-10 mt-1 w-full bg-gray-700 border border-gray-600 rounded-lg shadow-lg max-h-60 overflow-auto"
              >
                {services.map((service) => (
                  <div
                    key={service}
                    className="px-4 py-2 hover:bg-gray-600 cursor-pointer text-white"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, service }));
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

        {/* Message */}
        <div className="space-y-1">
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
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