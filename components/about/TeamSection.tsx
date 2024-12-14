"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { teamMembers } from "@/lib/constants/team";

export function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Meet Our Team
          </h2>
          <p className="text-gray-300 text-lg">
            Our diverse team of experts brings together years of experience and
            passion for digital innovation. Together, we create remarkable
            solutions for your business.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Member Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Member Details */}
              <div className="p-6 text-gray-800">
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-blue-500 font-medium mb-4">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>

              {/* Decorative Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
