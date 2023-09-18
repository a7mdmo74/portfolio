/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'img.shields.io' },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
