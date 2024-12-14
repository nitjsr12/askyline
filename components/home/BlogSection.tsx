"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const blogPosts = [
  {
    title: "Top 5 Web Development Trends in 2024",
    description: "Stay ahead of the curve with these emerging trends in web development.",
    image: "/images/portfolio-1.jpg",
    link: "#",
    date: "December 10, 2024",
    author: "John Doe",
  },
  {
    title: "How to Boost SEO Rankings in 2024",
    description: "Proven strategies to improve your search engine rankings and drive traffic.",
    image: "/images/portfolio-2.jpg",
    link: "#",
    date: "November 25, 2024",
    author: "Jane Smith",
  },
  {
    title: "The Future of Mobile App Development",
    description: "Exploring the latest tools and techniques shaping mobile app design.",
    image: "/images/portfolio-3.jpg",
    link: "#",
    date: "November 15, 2024",
    author: "Emily Davis",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
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
            Latest from Our Blog
          </h2>
          <p className="text-gray-300 text-lg">
            Stay updated with the latest insights, tips, and trends in the digital world. Explore our blog for expert advice and inspiration.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-800"
            >
              {/* Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Post Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">{post.description}</p>
                <div className="flex items-center justify-between text-gray-500 text-sm">
                  <span>{post.date}</span>
                  <span>By {post.author}</span>
                </div>
                <a
                  href={post.link}
                  className="mt-4 inline-block text-primary hover:text-secondary font-bold transition-colors"
                >
                  Read More &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
