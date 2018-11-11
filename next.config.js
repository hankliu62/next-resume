const path = require('path');
const withLess = require('@zeit/next-less');

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    paths: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'pages'),
    ],
  },
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = { // eslint-disable-line
      fs: 'empty',
    };

    config.resolve = { // eslint-disable-line
      alias: { '~': path.resolve(__dirname) },
    };

    return config;
  },
});
