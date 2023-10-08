/** @type {import('next').NextConfig} */
const nextConfig = {
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
    // NEXT_PUBLIC_API_URL: "http://localhost:4000/v1",
  },
};

module.exports = nextConfig;
