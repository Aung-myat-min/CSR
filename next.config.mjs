/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "6d5qbqxnwl8juodu.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
