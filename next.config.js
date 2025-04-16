/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // disable image optimization
    domains: ['askylinedigital.online'], // still required in some edge cases
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;

