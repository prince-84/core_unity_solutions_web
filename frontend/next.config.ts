import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  allowedDevOrigins: [
    '192.168.1.8',
    '172.24.32.1',
    'localhost',
    '127.0.0.1',
  ],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/storage/**',
      },
      {
        protocol: 'http',
        hostname: '192.168.1.8',
        port: '8000',
        pathname: '/storage/**',
      },
    ],
  },
};

export default nextConfig;
