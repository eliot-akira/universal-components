const path = require('path')
const webpack = require('webpack')
const config = require('./webpack.config')

config.entry.idom = './src/idom.js'

config.plugins = [
  new webpack.ProvidePlugin({
    h: path.resolve('./src/idom-create-element')
  })
]

module.exports = config

