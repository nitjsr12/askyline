"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reviews = [
  {
    name: "John Smith",
    role: "CEO, TechCorp",
    image: "/images/testimonial-1.jpg",
    review: "Askylinedigital transformed our online presence. Their expertise in web development and SEO strategies boosted our traffic significantly.",
  },
  {
    name: "Jane Doe",
    role: "Founder, CreativeStudio",
    image: "/images/testimonial-2.jpg",
    review: "The team at Askylinedigital is phenomenal. Their creativity and dedication helped us achieve a stunning app design loved by our users.",
  },
  {
    name: "Mark Wilson",
    role: "Marketing Manager, BizGrowth",
    image: "/images/testimonial-3.jpg",
    review: "Their social media campaigns were a game-changer for us. The engagement and reach we achieved were beyond expectations!",
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="font-heading text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            What Our Clients Say
          </h2>
          <p className="text-gray-300 text-lg">
            Our clients’ success stories speak volumes. See how we’ve made a difference for businesses just like yours.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group"
            >
              {/* Reviewer Image */}
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
              </div>
              {/* Reviewer Info */}
              <h3 className="text-xl font-semibold text-white">{review.name}</h3>
              <p className="text-sm text-primary mb-4">{review.role}</p>
              {/* Review Text */}
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {review.review}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
