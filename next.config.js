/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow images from any domain (update with your actual domains in production)
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" }
    ]
  }
};

module.exports = nextConfig;
