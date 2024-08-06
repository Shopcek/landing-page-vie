/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  distDir: 'build',
  output: 'standalone',
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  }
}

module.exports = nextConfig
