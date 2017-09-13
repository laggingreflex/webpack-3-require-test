module.exports = {
  context: __dirname + '/src',
  entry: './app.js',
  output: {
    filename: 'app.js',
    path: __dirname + '/build',
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader'
    }],
  }
};
