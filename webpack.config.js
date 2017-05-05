const path = require('path');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV == 'production';
if (isProd) {
  console.info('********** Building for production **********');
}

module.exports = {
  entry: {
    'app': './src/app/main',
  },
  output: {
    pathinfo: true,
    path: __dirname + '/build/app/',
    publicPath: 'http://localhost:3000',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: true
        }
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.js'],
    enforceExtension: false,

    modules: [path.resolve('node_modules')],

    alias: {
    },
  },

};
