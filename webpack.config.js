const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const publicPath = 'public';

module.exports = {
  devtool: `inline-source-map`,
  devServer: {
    contentBase: path.join(__dirname, publicPath),
    // compress: true,
    port: 8000,
  },
  entry: [
    `./src/index.js`,
  ],
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, publicPath),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: `css-loader`,
              options: {
                sourceMap: true,
              }
            },
            {
              loader: `sass-loader`,
            },
          ]
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: `babel-loader`,
          options: {
            presets: [`env`]
          }
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: `file-loader`,
          options: {
            name: `[name].[ext]`,
          }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(`app.css`),
  ]
}
