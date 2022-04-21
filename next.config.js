/** @type {import('next').NextConfig} */
const cloudinaryBaseUrl = `https://res.cloudinary.com/faloi/image/upload/`;

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'cloudinary',
    path: cloudinaryBaseUrl,
  },
};

module.exports = nextConfig;
