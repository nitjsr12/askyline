"use client";

import { Building2, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
 
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-lg z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-white"
          >
            <Building2 className="h-8 w-8 text-primary" />
            <span>Askylinedigital</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-300 hover:text-white font-medium transition duration-200"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
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
              onClick={(e) => e.stopPropagation()} // Prevent close on menu click
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
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-lg font-medium hover:text-primary transition duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
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
