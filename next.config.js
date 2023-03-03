/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["github.com", "i.ibb.co"],
  },
};

module.exports = nextConfig;
