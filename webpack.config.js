const path = require('path');

const DIST = path.join(__dirname, '/client/dist');

module.exports = {
  entry: path.join(__dirname,'/client/react-front-end'),
  output: {
    path: DIST,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname,'/client/react-front-end'),
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};