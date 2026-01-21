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
    "Build a New Website",
    "SEO Services",
    "Google Ads / Meta Ads",
    "Complete Digital Marketing",
    "Not Sure Yet (Just Want the Free Audit)"
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
      // Format the message for WhatsApp
      const phoneNumber = "917256889395";
      let whatsappMessage = `*Free Growth Audit Request*\n\n`;
      whatsappMessage += `*Name:* ${formData.name}\n`;
      
      if (formData.business) {
        whatsappMessage += `*Business:* ${formData.business}\n`;
      }
      
      whatsappMessage += `*Email:* ${formData.email}\n`;
      
      if (formData.phone) {
        whatsappMessage += `*Phone:* ${formData.phone}\n`;
      }
      
      if (formData.website) {
        whatsappMessage += `*Website:* ${formData.website}\n`;
      }
      
      if (formData.service) {
        whatsappMessage += `*Service Needed:* ${formData.service}\n`;
      }
      
      if (formData.message) {
        whatsappMessage += `\n*Message:*\n${formData.message}\n`;
      }
      
      whatsappMessage += `\n---\n*Requested via Website Contact Form*`;

      // Open WhatsApp with pre-filled message
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      // Also send to email API as backup (optional - you can remove this if you only want WhatsApp)
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      } catch (emailError) {
        // Email submission is optional, so we don't fail if it errors
        console.log('Email submission failed (optional):', emailError);
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
      setSubmitError(error instanceof Error ? error.message : 'There was an error. Please try again or contact us directly on WhatsApp.');
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
          Your request has been sent to WhatsApp! We'll review your information and send you a detailed Growth Audit within 24 hours.
        </p>
        <p className="text-gray-400 text-sm mb-4">
          If WhatsApp didn't open, please contact us directly at <strong className="text-green-400">+91 7256889395</strong> or check your email (and spam folder) for our response.
        </p>
        <div className="mt-6 p-4 bg-gray-700/50 rounded-lg text-sm text-gray-300">
          <p className="font-semibold mb-2">What happens next?</p>
          <ol className="list-decimal list-inside space-y-1 text-gray-400">
            <li>We review your request (within 24 hours)</li>
            <li>You receive a detailed PDF audit via email</li>
            <li>If you want, we can schedule a 30-minute call to discuss</li>
            <li>No pressure, no sales pitch – just honest value</li>
          </ol>
        </div>
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
      <h2 className="text-2xl font-bold text-white mb-2">Get Your Free Growth Audit (Takes 2 Minutes)</h2>
      <p className="text-gray-400 mb-6">Fill this quick form and it will open WhatsApp with your details. We'll review your website, current online presence, and business goals. Then send you a PDF with actionable recommendations – no sales pitch.</p>
      
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
            placeholder="Your first name is enough"
          />
        </div>

        {/* Business Name */}
        <div className="space-y-1">
          <label htmlFor="business" className="block text-sm font-medium text-gray-300">
            Business Name <span className="text-gray-500 text-xs">(Optional)</span>
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
          <p className="text-xs text-gray-500 mt-1">Helps us personalize your audit</p>
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
            placeholder="We'll send your free audit here"
          />
          <p className="text-xs text-gray-500 mt-1">Check your spam folder if you don't see it</p>
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
            Phone Number <span className="text-gray-500 text-xs">(Optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
            placeholder="We might WhatsApp you for quick questions"
          />
          <p className="text-xs text-gray-500 mt-1">Optional, but helps us respond faster</p>
        </div>

        {/* Website */}
        <div className="space-y-1">
          <label htmlFor="website" className="block text-sm font-medium text-gray-300">
            Website URL <span className="text-gray-500 text-xs">(Optional)</span>
          </label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
            placeholder="If you have one, we'll audit it for free"
          />
          <p className="text-xs text-gray-500 mt-1">Leave blank if you don't have a website yet</p>
        </div>

        {/* Services Dropdown */}
        <div className="space-y-1 relative">
          <label htmlFor="services" className="block text-sm font-medium text-gray-300">
            What Are You Looking For? <span className="text-gray-500 text-xs">(Optional)</span>
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
            Tell Us About Your Business <span className="text-gray-500 text-xs">(Optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
            placeholder="What's your biggest challenge online right now? (Optional but helpful)"
          ></textarea>
          <p className="text-xs text-gray-500 mt-1">The more details, the better your audit will be</p>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
            className="w-full px-4 sm:px-6 py-3 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
                <span className="hidden sm:inline">Get Free Growth Audit</span>
                <span className="sm:hidden">Get Free Audit</span>
                <span className="hidden sm:inline">→</span>
            </>
          )}
        </motion.button>
          <p className="text-xs text-gray-400 mt-2 text-center">Clicking submit will open WhatsApp with your details. We'll review and send your audit within 24 hours.</p>
        </div>
      </form>
    </motion.div>
  );
}