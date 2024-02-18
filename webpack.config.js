const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src/components/index.js'),
  output: {
    path: path.resolve(__dirname, 'src/components/build'),
    filename: 'components.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
