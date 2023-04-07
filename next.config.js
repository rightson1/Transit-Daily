/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_MANAGE_TOKEN: process.env.CONTENTFUL_MANAGE_TOKEN,
    CONTENTFUL_PREVIEW_ACCESS_TOKEN:
      process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  },
};
module.exports = nextConfig;
