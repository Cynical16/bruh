/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensures the build outputs static files
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows loading images from all hosts
      },
    ],
  },
  assetPrefix: './', // Ensures proper asset paths for static hosting
  trailingSlash: true, // Adds a trailing slash to all paths for better static hosting compatibility
};

export default nextConfig;
