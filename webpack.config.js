module.exports = {
  entry: './client/main.js',
  output: {
    path: __dirname,
    filename: './public/javascripts/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      }
    ]
  },
  resolve: {
      extensions: ['.js']
  }
};
