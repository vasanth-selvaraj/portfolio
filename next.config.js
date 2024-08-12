/** @type {import('next').NextConfig} */
// new updates
const { generateSitemap } = require("next/server");

const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  assetPrefix:'/',
  images: {
    // unoptimized: true,
    // domains: [
    //   "opengraph.githubassets.com",
    // ],
  },
};

module.exports = { nextConfig, generateSitemap };
