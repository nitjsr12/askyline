"use client";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Eye, Code, Smartphone, Globe, BarChart2, ExternalLink, Github } from "lucide-react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const portfolioItems = [
  {
    title: "E-Commerce Platform",
    description: "A high-performance online store with seamless checkout experience and mobile optimization.",
    image: "/images/portfolio-1.jpg",
    link: "#",
    github: "#",
    category: "Web Development",
    tech: ["Next.js", "Shopify", "Tailwind CSS"],
    icon: Globe,
    stats: [
      { value: "+240%", label: "Conversion" },
      { value: "1.2s", label: "Load Time" },
      { value: "98%", label: "Mobile Score" }
    ]
  },
  {
    title: "Mobile Banking App",
    description: "Secure financial management app with biometric authentication and real-time notifications.",
    image: "/images/portfolio-2.jpg",
    link: "#",
    github: "#",
    category: "Mobile App",
    tech: ["React Native", "Node.js", "Firebase"],
    icon: Smartphone,
    stats: [
      { value: "4.9★", label: "Rating" },
      { value: "500K+", label: "Downloads" },
      { value: "99.9%", label: "Uptime" }
    ]
  },
  {
    title: "SEO Optimization",
    description: "Increased organic traffic by 240% through comprehensive technical and content SEO strategies.",
    image: "/images/portfolio-3.jpg",
    link: "#",
    github: "#",
    category: "Digital Marketing",
    tech: ["Google Analytics", "Ahrefs", "SEMrush"],
    icon: BarChart2,
    stats: [
      { value: "240%", label: "Traffic" },
      { value: "#1", label: "Ranking" },
      { value: "5.2x", label: "ROI" }
    ]
  },
  {
    title: "Social Media Campaign",
    description: "Viral marketing campaign that generated 50K+ engagements and 5K+ new followers.",
    image: "/images/portfolio-4.jpg",
    link: "#",
    github: "#",
    category: "Social Media",
    tech: ["Instagram", "TikTok", "Facebook Ads"],
    icon: Globe,
    stats: [
      { value: "50K+", label: "Engagements" },
      { value: "5K+", label: "Followers" },
      { value: "300%", label: "Growth" }
    ]
  }
];

export function WorkPortfolio() {
  const [selectedItem, setSelectedItem] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="portfolio" className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 mb-6"
          >
            <Eye className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium">Our Showcase</span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Portfolio Highlights
            </span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300"
          >
            Explore our transformative digital solutions that drive measurable results and exceptional user experiences.
          </motion.p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover="hover"
              onClick={() => setSelectedItem(item)}
              className="group relative h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg" />
              
              {/* Image Container */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="mb-2 flex items-center gap-2">
                  <item.icon className="w-5 h-5 text-purple-400" />
                  <span className="text-sm font-medium text-purple-400">{item.category}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                
                {/* Stats */}
                <div className="flex gap-4 mb-6">
                  {item.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <motion.a
                    href={item.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={item.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-700 transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Code</span>
                    <Github className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-sm text-sm font-medium text-white shadow-lg">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mt-20 text-center"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6">
              Want to see more of our work?
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg bg-gray-800 border border-gray-700 text-white font-semibold shadow-lg hover:shadow-xl hover:bg-gray-700/50 transition-all"
              >
                Explore Our Services
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800 shadow-2xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-96 w-full">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
                <button 
                  className="absolute top-4 right-4 p-2 bg-gray-900/80 rounded-full backdrop-blur-sm hover:bg-gray-800 transition-colors"
                  onClick={() => setSelectedItem(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <selectedItem.icon className="w-5 h-5 text-purple-400" />
                      <span className="text-sm font-medium text-purple-400">{selectedItem.category}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedItem.title}</h3>
                  </div>
                  <div className="flex gap-2">
                    <motion.a
                      href={selectedItem.link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={selectedItem.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-700 transition-all"
                    >
                      <span>Code</span>
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                <p className="text-gray-300 mb-8 text-lg">{selectedItem.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Key Achievements</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {selectedItem.stats.map((stat, i) => (
                        <div key={i} className="bg-gray-800/50 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                          <div className="text-sm text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-full bg-gray-800 text-gray-300 text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-800">
                  <h4 className="text-xl font-semibold text-white mb-4">Project Details</h4>
                  <p className="text-gray-300 mb-6">
                    This project was developed over a 6-month period with a team of 5 developers and 2 designers. 
                    We implemented cutting-edge technologies to ensure optimal performance and user experience.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      View Case Study
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white font-semibold shadow-lg hover:shadow-xl hover:bg-gray-700/50 transition-all"
                    >
                      Similar Projects
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}