import type { NextConfig } from "next";
import path from "path";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(process.cwd()),
  },
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
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
      },
    ],
  },
};

// withPayload makes the embedded Payload admin/API build correctly inside Next.
export default withPayload(nextConfig);
