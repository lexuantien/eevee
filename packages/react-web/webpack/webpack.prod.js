const { minifyEsbuildJTS } = require('./plugins');

const productionConfig = {
  devtool: 'source-map',

  plugins: [
    /*obfuscatorPlugin /*purgeCssPlugin , cleanWebpacklugin*/
  ],

  // output: {
  //   chunkFilename: '[name].[contenthash].js',
  //   filename: '[name].[contenthash].js',
  //   assetModuleFilename: '[name].[contenthash][ext][query]',
  // },

  optimization: {
    splitChunks: {
      minSize: { javascript: 20000, 'css/mini-extra': 10000 },
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
        },
      },
    },
    runtimeChunk: { name: 'runtime' },
    minimizer: [
      // minifyJTS,
      // minifyCss({ options: { preset: ['default'] } })
      minifyEsbuildJTS,
    ],
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};

module.exports = productionConfig;
