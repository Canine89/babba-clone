import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'babbasmartclass.com',
        port: '',
        pathname: '/design/**',
      },
    ],
  },
};

export default nextConfig;