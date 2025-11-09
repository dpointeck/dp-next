const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  webpack: (config) => {
    config.module.rules.push({ test: /\.md$/, use: 'raw-loader' });
    config.module.rules.push({ test: /\.yml$/, use: 'raw-loader' });
    config.externals = [...config.externals, "canvas", "jsdom", "remark-prism"];
    return config;
  },
  reactStrictMode: true,
};

module.exports = withContentlayer(nextConfig);
