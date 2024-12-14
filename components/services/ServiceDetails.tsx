"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Custom Web Development",
    description:
      "We build stunning, responsive websites tailored to your business needs using the latest technologies.",
    image: "/images/web-development.jpg",
    details:
      "Our web development services include UI/UX design, front-end and back-end development, and maintenance. We ensure that your website is optimized for performance, scalability, and user engagement.",
  },
  {
    title: "Mobile App Development",
    description:
      "Create intuitive and high-performing mobile applications for iOS and Android platforms.",
    image: "/images/mobile-app.jpg",
    details:
      "Our mobile app development services include native and cross-platform development, app store optimization, and user-friendly interfaces. We transform your vision into functional and engaging mobile solutions.",
  },
  {
    title: "SEO and Digital Marketing",
    description:
      "Boost your online presence and improve your search engine rankings with our expert strategies.",
    image: "/images/seo.jpg",
    details:
      "We offer SEO audits, keyword research, content creation, and link-building strategies to drive organic traffic and conversions.",
  },
];

export function ServiceDetails() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-12 mb-16 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                {service.title}
              </h2>
              <p className="text-lg text-gray-300">{service.description}</p>
              <p className="text-gray-400">{service.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
