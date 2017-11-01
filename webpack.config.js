const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

// const isExternal = ({ context }) => (
//   context &&
//   (~context.indexOf('node_modules') || ~context.indexOf('vendor'))
// )

module.exports = {
  entry: {
    // vendor: [
    //   'style-loader/lib/addStyles',
    //   'css-loader/lib/css-base',
    // ],
    main: path.resolve(__dirname, 'index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({ filename: '[name]-[contenthash].css' }),
    new HtmlPlugin({ title: 'extract-text-async-chunk' }),
    // new webpack.HashedModuleIdsPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({ // Bundle React app vendor packages
    //   chunks: ['main'],
    //   name: 'vendor',
    //   minChunks: isExternal
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
  ],
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 8083,
    publicPath: '/',
  },
};
