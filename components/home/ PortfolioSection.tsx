"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const portfolioItems = [
  {
    title: "E-Commerce Website",
    description: "A sleek, modern online store with integrated payment solutions.",
    image: "/images/portfolio-1.jpg", // Replace with your image paths
    link: "#",
  },
  {
    title: "Mobile Banking App",
    description: "A secure and intuitive mobile app for banking on the go.",
    image: "/images/portfolio-2.jpg",
    link: "#",
  },
  {
    title: "SEO Campaign",
    description: "Data-driven strategies to boost organic traffic and visibility.",
    image: "/images/portfolio-3.jpg",
    link: "#",
  },
  {
    title: "Social Media Campaign",
    description: "Engaging campaigns to connect and grow your online audience.",
    image: "/images/portfolio-4.jpg",
    link: "#",
  },
];

export function WorkPortfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Our Work Portfolio
          </h2>
          <p className="text-gray-300 text-lg">
            Discover how we’ve transformed ideas into impactful digital solutions. Here’s a glimpse of our recent projects.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <a
                  href={item.link}
                  className="inline-block px-4 py-2 bg-primary text-white rounded-lg shadow hover:shadow-lg hover:bg-secondary transition-all"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
