/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'grazie-parsonal.assets.newt.so',
        pathname: '/v1/**',
      },
    ],
  },
};

export default nextConfig;
