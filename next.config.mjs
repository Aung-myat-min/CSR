/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wallpaperbat.com",
      },
    ],
  },
};

export default nextConfig;
