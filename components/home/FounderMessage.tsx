"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function FounderMessage() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/images/profile.png" // Ensure the image is in the public/images folder
                alt="Founder"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Decorative Glow */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Right Column: Message */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              A Message from Our Founder
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Welcome to Askylinedigital. As the founder, my mission has always
              been to bridge creativity and technology to empower businesses.
              With a passion for innovation and excellence, we aim to transform
              ideas into impactful digital solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Thank you for trusting us as your partner in the digital
              transformation journey. Together, we will create, innovate, and
              achieve extraordinary results.
            </p>
            <p className="font-bold text-gray-200">
              - Aradhana Kushwaha <br />
              Founder & CEO, Askylinedigital
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
