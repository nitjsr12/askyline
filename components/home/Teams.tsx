"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const TeamMembers = [
  {
    name: "John Doe",
    position: "Founder & CEO",
    image: "/images/team1.jpg", // Replace with your actual image paths
    description:
      "John brings over 15 years of experience in digital transformation and leads our vision.",
  },
  {
    name: "Jane Smith",
    position: "Chief Marketing Officer",
    image: "/images/team2.jpg",
    description:
      "Jane specializes in crafting marketing strategies that drive business growth.",
  },
  {
    name: "Michael Johnson",
    position: "Lead Developer",
    image: "/images/team3.jpg",
    description:
      "Michael leads our development team, ensuring top-notch code and innovative solutions.",
  },
  {
    name: "Emily Davis",
    position: "Creative Director",
    image: "/images/team4.jpg",
    description:
      "Emily ensures our designs stand out with a perfect blend of creativity and functionality.",
  },
];

export default function Team() {
  return (
    <section className="relative min-h-screen py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            A group of passionate and dedicated professionals ready to bring
            your ideas to life.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {TeamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-b from-gray-800 to-gray-700 p-6 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-md transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Text Content */}
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-purple-400">{member.position}</p>
                <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 text-gray-200">
                  <h4 className="text-lg font-semibold">{member.name}</h4>
                  <p className="text-sm">{member.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
