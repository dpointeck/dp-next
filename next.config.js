const path = require('path')

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
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
