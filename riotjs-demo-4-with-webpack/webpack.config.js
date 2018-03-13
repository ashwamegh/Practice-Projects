const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:{
          presets: ['env']
        }
      },
      {
        test: /\.tag$/,
        loader: 'tag-loader',
        exclude: /node_modules/,

      }
    ]
  }
}