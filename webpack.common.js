const path = require('path');

module.exports = {
  entry: { app: './src/assets/js/app.js' },
  output: {
    filename: 'assets/js/[name].[contentHash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/img/[name].[contentHash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(webm|mp4)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/video/[name].[contentHash].[ext]',
            },
          },
        ],
      },
    ],
  },
};
