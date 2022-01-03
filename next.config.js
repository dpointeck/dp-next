module.exports = {
  webpack: (config) => {
    config.module.rules.push({ test: /\.md$/, use: 'raw-loader' });
    config.module.rules.push({ test: /\.yml$/, use: 'raw-loader' });
    return config;
  },
  swcMinify: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
    serverComponents: true
  },
};
