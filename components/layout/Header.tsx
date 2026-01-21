"use client";

import { Building2, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { 
    name: "Services", 
    href: "/services",
    submenu: [
      { name: "All Services", href: "/services" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "App Development", href: "/services/app-development" },
      { name: "Digital Marketing", href: "/services/seo" },
    ]
  },
  { name: "Blogs", href: "/blog" },
  { name: "Website Audit", href: "/website-audit" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (typeof window === "undefined") return;

    const body = document.body;

    if (mobileMenuOpen && window.innerWidth < 768) {
      const previousOverflow = body.style.overflow;
      const previousTouchAction = body.style.touchAction;
      body.style.overflow = "hidden";
      body.style.touchAction = "none";

      return () => {
        body.style.overflow = previousOverflow;
        body.style.touchAction = previousTouchAction;
      };
    }
  }, [mobileMenuOpen]);

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full text-white shadow-lg z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-gray-900/95 backdrop-blur-md shadow-xl" 
          : "bg-gradient-to-b from-gray-900 to-gray-800"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
          >
              <Image 
                src="/images/askyline.png" 
                alt="Logo" 
                width={200} 
                height={50}
                className="transition-opacity group-hover:opacity-80 w-32 sm:w-40 md:w-48 h-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item, index) => (
              <motion.div 
                key={item.name} 
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.submenu ? (
                  <>
                    <motion.button 
                      className="flex items-center gap-1 text-sm sm:text-base text-gray-300 hover:text-white font-medium transition duration-200 relative"
                      onClick={() => setServicesOpen(!servicesOpen)}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.name}
                      <motion.div
                        animate={{ rotate: servicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                      </motion.div>
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                    <AnimatePresence>
                    {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-48 bg-gray-800/95 backdrop-blur-md rounded-lg shadow-xl py-2 z-50 border border-gray-700"
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <motion.div
                              key={subItem.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIndex * 0.05 }}
                            >
                          <Link
                            href={subItem.href}
                                className="block px-4 py-2 text-gray-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 hover:text-white transition-all duration-200"
                                onClick={() => setServicesOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                            </motion.div>
                        ))}
                        </motion.div>
                    )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm sm:text-base text-gray-300 hover:text-white font-medium transition duration-200 relative group"
                  >
                    {item.name}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                )}
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            <Link
              href="/contact"
                className="px-4 sm:px-6 py-2 text-xs sm:text-sm md:text-base bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
                <span className="relative z-10">Contact Us</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
            </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => {
              // When opening mobile menu, always reset services dropdown state
              setServicesOpen(false);
              setMobileMenuOpen((open) => !open);
            }}
            aria-label="Toggle navigation menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-8 w-8" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-8 w-8" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
        {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
                onClick={() => setMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 w-3/4 max-w-sm h-full bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 shadow-2xl z-50 md:hidden"
              onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-end p-4 border-b border-gray-700">
                  <motion.button
                  className="text-white"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                    whileTap={{ scale: 0.9 }}
                >
                  <X className="h-8 w-8" />
                  </motion.button>
              </div>
                <div className="flex flex-col gap-6 px-6 py-8 bg-[#1b2433] h-[calc(100%-80px)]">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                    {item.submenu ? (
                      <div className="space-y-2">
                          <motion.button
                            className="flex items-center gap-2 text-base sm:text-lg font-medium hover:text-purple-400 transition duration-200 w-full"
                          onClick={() => setServicesOpen(!servicesOpen)}
                            whileTap={{ scale: 0.98 }}
                        >
                          {item.name}
                            <motion.div
                              animate={{ rotate: servicesOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="w-4 h-4" />
                            </motion.div>
                          </motion.button>
                          <AnimatePresence>
                        {servicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="ml-4 space-y-3 mt-2 overflow-hidden"
                              >
                                {item.submenu.map((subItem, subIndex) => (
                                  <motion.div
                                    key={subItem.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: subIndex * 0.05 }}
                                  >
                              <Link
                                href={subItem.href}
                                      className="block text-gray-400 hover:text-purple-400 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                                  </motion.div>
                            ))}
                              </motion.div>
                        )}
                          </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                          className="block text-base sm:text-lg font-medium hover:text-purple-400 transition duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                    </motion.div>
                ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navigation.length * 0.1 }}
                    className="pt-4"
                  >
                <Link
                  href="/contact"
                      className="block px-4 py-3 text-sm sm:text-base bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg text-center shadow-lg hover:shadow-xl transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get in Touch
                </Link>
                  </motion.div>
              </div>
              </motion.div>
            </>
        )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}