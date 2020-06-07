module.exports = {
  entry: { main: './src/js/app.js' },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/templates/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
};
