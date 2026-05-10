import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
      {
        protocol: 'https',
        hostname: 'www.theagilenest.com',
      },
      {
        protocol: 'https',
        hostname: 'theagilenest.com',
      },
      {
        protocol: 'https',
        hostname: 'yestechday.com',
      },
    ],
  },
};

export default nextConfig;
