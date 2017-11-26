'use strict'

const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const src = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

const extractStyles = new ExtractTextPlugin({
   filename: '[name].css',
  //  disable: process.env.NODE_ENV === "development"
})

module.exports = {
  entry: {
    scripts: path.resolve(src, 'js/index.js'),
    styles: path.resolve(src, 'scss/index.scss')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: extractStyles.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'resolve-url-loader' },
            { loader: 'sass-loader' }
          ],
          // use style-loader in development 
          // fallback: 'style-loader'
        })
      },
      {
        test: /\.(woff|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              hash: 'md5',
              digest: 'hex',
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              hash: 'md5',
              digest: 'hex',
              name: '[name].[ext]'
            }
          },
          // {
          //   loader: 'image-webpack-loader',
          //   options: {
          //     bypassOnDebug: true
          //   }
          // }
        ]
      }
    ]
  },
  plugins: [
    extractStyles
  ]
}