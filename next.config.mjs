import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "6d5qbqxnwl8juodu.public.blob.vercel-storage.com"
    }, {
      protocol: "https",
      hostname: "96quhetnznzbwqlu.public.blob.vercel-storage.com"
    }]
  }
};
export default MillionLint.next({
  rsc: true
})(nextConfig);