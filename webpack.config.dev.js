const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [path.join(__dirname, 'src/index.js')],
  mode: 'development',
  output: {
    path: path.join(__dirname, '/'),

    filename: 'src/index.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: 3000,
    disableHostCheck: true,
    overlay: {
      errors: true,
      warnings: true,
    },
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      react: path.resolve('./node_modules/react'),
      'styled-components': path.resolve('./node_modules/styled-components'),
      'styled-system': path.resolve('./node_modules/styled-system'),
      'react-router-dom': path.resolve('./node_modules/react-router-dom'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'source-map-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader'],
      },
      {
        test: /\.(pdf|jpg|png|ico|gif|woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static',
            publicPath: '/static',
            limit: 100000,
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      chunkFilename: 'styles.css',
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new htmlPlugin({
      title: 'Viasat PokeApp',
      template: 'index.html',
      filename: 'index.html',
      meta: {
        viewport:
          'width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no',
        description: '',
        ['theme-color']: '#000000',
      },
      hash: false,
      inject: true,
      minify: false,
      showErrors: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    minimize: false,
    minimizer: [
      (compiler) => {
        new TerserPlugin({
          sourceMap: true,
        }).apply(compiler);
      },
    ],
  },
  target: 'web',
};
