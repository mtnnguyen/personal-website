/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'], // Add any external image domains you'll use
  },
  // Enable static export if needed for certain hosting platforms
  // output: 'export',
  // trailingSlash: true,
}

module.exports = nextConfig