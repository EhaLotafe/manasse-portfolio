/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Désactive l'en-tête de version pour plus de discrétion technique
  poweredByHeader: false,

  images: {
    // Optimisation : on garde tes IPs locales pour le dev, 
    // mais on prépare le terrain pour des assets externes (Unsplash, Cloudinary, etc.)
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: '192.168.60.1',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;