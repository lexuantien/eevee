/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/no-extraneous-dependencies */
const { ROOT_DIR } = require('./envs');

const path = require('path');
const glob = require('glob');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin'); // use inside the npm package
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { DefinePlugin } = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');

const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const PATH = path.join(ROOT_DIR, '/src');

const caseSensitivePathsPlugin = new CaseSensitivePathsPlugin();

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(ROOT_DIR, './public/index.html'),
  filename: 'index.html',
  inject: true,
});

const miniCssExtactPlugin = new MiniCssExtractPlugin({
  // filename: "[name].css",
  filename: '[name].[contenthash].css',
});

const purgeCssPlugin = new PurgeCSSPlugin({
  // paths: glob.sync(`${PATH}/**/*`, { nodir: true }), // Consider extracting as a parameter
  // extractors: [
  //   {
  //     extractor: (content) => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
  //     extensions: ["html"],
  //   },
  // ],
  paths: glob.sync(`${PATH}/**/*`, { nodir: true }),
});

// const mode = process.env.NODE_ENV ?? "production";
const definePlugin = new DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
});

const reactRefreshPlugin = new ReactRefreshWebpackPlugin({
  overlay: false,
});

const forkTsPlugin = new ForkTsCheckerWebpackPlugin({
  async: false,
  // eslint: {
  //   files: path.join(ROOT_DIR, "/src/**/*"),
  // },
});

const obfuscatorPlugin = new WebpackObfuscator(
  {
    rotateStringArray: true,
  },
  ['excluded_bundle_name.js'],
);

const minifyJTS = new TerserPlugin();
const minifyCss = ({ options }) => new CssMinimizerPlugin({ minimizerOptions: options });

const { ESBuildMinifyPlugin } = require('esbuild-loader');
const minifyEsbuildJTS = new ESBuildMinifyPlugin({
  target: 'es2015',
  css: true, // Apply minification to CSS assets
});

const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const tsPathsPlugin = new TsconfigPathsPlugin({
  configFile: path.resolve(__dirname, '../../../tsconfig.base.json'),
});

module.exports = {
  htmlWebpackPlugin,
  caseSensitivePathsPlugin,
  purgeCssPlugin,
  miniCssExtactPlugin,
  definePlugin,
  reactRefreshPlugin,
  obfuscatorPlugin,
  forkTsPlugin,
  minifyCss,
  minifyJTS,
  minifyEsbuildJTS,
  tsPathsPlugin,
};
