"use client";

import { Building2, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "https://x.com/AskylineDigital" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/askyline-digital/" },
  { name: "Facebook", icon: Facebook, href: "" },
  { name: "Instagram", icon: Instagram, href: " https://www.instagram.com/askyline_digital" },
];

export function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link href="/" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
            <Image src="/images/askyline.png" alt="Logo" width={200} height={50} />
              </motion.div>
          </Link>
            <p className="opacity-80 text-sm leading-relaxed">
              Elevating businesses through innovative digital solutions and strategic growth. Let&apos;s build the future together.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Us" },
                { href: "/blog", label: "Blogs" },
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="opacity-80 hover:opacity-100 hover:text-purple-400 transition-all duration-200 inline-block relative group"
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              {[
                { type: "email", href: "mailto:contact@askylinedigital.com", text: "info@askylinedigital.com" },
                { type: "phone", href: "tel:+918918567430", text: "+91 7256889395" },
                { type: "text", text: "1st stage , BTM layout" },
                { type: "text", text: "Bengaluru, Karnataka 560068" },
              ].map((contact, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="hover:text-purple-400 transition-colors duration-200"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span>{contact.text}</span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                >
                  <Link
                  href={social.href}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  aria-label={social.name}
                >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="p-2 rounded-full bg-gray-800/50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                    >
                      <social.icon className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
                    </motion.div>
                </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-8 pt-8 border-t border-gray-700 text-center text-sm"
        >
          <p className="opacity-80">
            &copy; {new Date().getFullYear()} Askylinedigital. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
