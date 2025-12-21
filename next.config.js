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
  // Server Actions are enabled by default in Next.js 15+
  // No need to configure experimental.serverActions
};

export default nextConfig;

