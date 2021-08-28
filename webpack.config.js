const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssConfig = require('./postcss.config');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

const makeConfig = () => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: './src/assets/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '../css/[name].css',
      chunkFilename: '[id].css',
    }),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean);

  const config = {
    entry: {
      index: ['./src/js/index.js'],
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    mode: isDevelopment ? 'development' : 'production',
    devServer: {
      static: './dist',
      hot: true,
    },
    module: {
      rules: [
        {
          test: /^(?!.*\.{test,min}\.(js|ts)x?$).*\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: require.resolve('babel-loader'),
              options: {
                // ... other options
                plugins: [
                  // ... other plugins
                  isDevelopment && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
              },
            },
            {
              loader: 'babel-loader',
              options: {
                babelrc: true,
                cacheDirectory: true,
              },
            },
          ],
        },
        {
          test: /\.(scss|sass|css)$/,
          exclude: /\.module\.(scss|sass|css)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: (resourcePath, context) => {
                  const newPath = path.relative(path.dirname(resourcePath), context);
                  return newPath.replace('\\', '/') + '/css/';
                },
              },
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
            { loader: 'postcss-loader', options: postcssConfig },
            'sass-loader',
          ],
        },
        {
          test: /\.(scss|sass|css)$/,
          include: /\.module\.(scss|sass|css)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
            { loader: 'postcss-loader', options: postcssConfig },
            'sass-loader',
          ],
        },
        {
          test: /.(woff(2)?|eot|ttf)(\?[a-z0-9=\.]+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '../fonts/[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '../img-loader/[name].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins,
    resolve: {
      mainFields: ['es2015', 'module', 'jsnext:main', 'main'],
      extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', '.ts', '.tsx'],
      symlinks: false,
      cacheWithContext: false,
    },
  };
  return config;
};

module.exports = makeConfig();
