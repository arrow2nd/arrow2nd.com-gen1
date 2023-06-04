/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.microcms-assets.io"]
  },
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;
