/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images-bucket-grazie.s3.ap-northeast-1.amazonaws.com',
        pathname: '/oretoku-tools/**',
      },
    ],
  },
};

export default nextConfig;
