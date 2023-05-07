/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({ test: /\.md$/, use: 'raw-loader' });
    config.module.rules.push({ test: /\.yml$/, use: 'raw-loader' });
    return config;
  },
  swcMinify: true
};

module.exports = nextConfig;