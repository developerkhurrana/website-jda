/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  images: isDev
    ? {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // Allow all hostnames in dev
        },
      ],
    }
    : {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          port: "",
          pathname: "/**",
        },
      ],
    },
};

module.exports = nextConfig;