'use strict'

const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const src = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

const extractStyles = new ExtractTextPlugin({ filename: '[name].css' })

const scriptsConfig = {
  entry: {
    scripts: path.resolve(src, 'js/index.js')
  },
  output: {
    path: dist,
    filename: '[name].js'
  },
  externals: {
    'jquery': 'jQuery'
  }
}

const stylesConfig = {
  entry: {
    styles: path.resolve(src, 'scss/index.scss')
  },
  output: {
    path: dist,
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
        test: /\.(woff|ttf|eot|svg|png)$/,
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
      }
    ]
  },
  plugins: [
    extractStyles
  ]
}

module.exports = [
  scriptsConfig,
  stylesConfig
]