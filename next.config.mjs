/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "144.24.95.101",
        port: "7000",
      },
    ],
  },
};

export default nextConfig;
