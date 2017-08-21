module.exports = {
  entry: './client/main.js',
  output: {
    path: __dirname,
    filename: './public/javascripts/bundle.js'
  },
  resolve: {
      extensions: ['.js']
  }
};
