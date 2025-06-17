"use client";

import { Building2, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

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

  return (
    <header className="fixed w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-lg z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
          >
            <Image src="/images/askyline.png" alt="Logo" width={200} height={50} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button 
                      className="flex items-center gap-1 text-gray-300 hover:text-white font-medium transition duration-200"
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {servicesOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white font-medium transition duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black/60 z-40 md:hidden" onClick={() => setMobileMenuOpen(false)}>
            <div
              className="absolute top-0 right-0 w-3/4 max-w-sm h-full bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end p-4">
                <button
                  className="text-white"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-8 w-8" />
                </button>
              </div>
              <div className="flex flex-col gap-6 px-6 py-8">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div className="space-y-2">
                        <button 
                          className="flex items-center gap-2 text-lg font-medium hover:text-primary transition duration-200"
                          onClick={() => setServicesOpen(!servicesOpen)}
                        >
                          {item.name}
                          <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {servicesOpen && (
                          <div className="ml-4 space-y-3 mt-2">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block text-gray-400 hover:text-primary"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-lg font-medium hover:text-primary transition duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  href="/contact"
                  className="px-4 py-2 bg-primary text-white rounded-lg text-center shadow-md hover:shadow-lg transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}