/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: "https://api-cafe.m3sra-kediri.my.id/v1",
  },
};

module.exports = nextConfig;
