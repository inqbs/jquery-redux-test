const path = require('path')
const { merge } = require('webpack-merge')
const StylelintPlugin = require('stylelint-webpack-plugin')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    chunkFilename: 'js/[name].chunk.js'
  },
  devServer: {
    host: '0.0.0.0',
    // inline: true,
    port: 9090,
    hot: true,
    https: false
  },
  plugins: [
    new StylelintPlugin({
      files: path.join('src', '**/*.s?(a|c)ss')
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true
        }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
})
