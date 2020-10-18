const path = require('path');

module.exports = {
  module:{
    rules: [
      {
        test: /\.css$/i,
        exclude: /\.lazy\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.lazy\.css$/i,
        use: [
          { loader: 'style-loader', options: { injectType: 'lazyStyleTag' } },
          'css-loader',
        ],
      },
    ],
  },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};