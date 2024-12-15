"use client";

import { Building2, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white">
              <Building2 className="h-6 w-6 text-primary" />
              <span>Askylinedigital</span>
            </Link>
            <p className="opacity-80 text-sm">
              Elevating businesses through innovative digital solutions and strategic growth. Let's build the future together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="opacity-80 hover:opacity-100 transition-opacity">Services</Link></li>
              <li><Link href="#portfolio" className="opacity-80 hover:opacity-100 transition-opacity">Portfolio</Link></li>
              <li><Link href="#about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link href="#blog" className="opacity-80 hover:opacity-100 transition-opacity">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="opacity-80 hover:opacity-100 transition-opacity">info@askylinedigital.com</li>
              <li className="opacity-80 hover:opacity-100 transition-opacity">+917256889395</li>
              <li className="opacity-80 hover:opacity-100 transition-opacity">HSR layout</li>
              <li className="opacity-80 hover:opacity-100 transition-opacity">Bengaluru, karnataka 560102 </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6 text-primary hover:text-secondary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p className="opacity-80">
            &copy; {new Date().getFullYear()} Askylinedigital. All rights reserved. | 
            <Link href="/privacy" className="hover:opacity-100 transition-opacity mx-1">Privacy Policy</Link> | 
            <Link href="/terms" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
