const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/Bonus_Story/',
    clean: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp3|mp4|wav|ogg)$/i,
        type: 'asset/resource',
      },
      {
      test: /\.(png|jpg|gif|mp4|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: 'images/',
            publicPath: '/Bonus_Story/images/',
          },
        },
      ],
    },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: './public/index.html',
    favicon: './public/favicon.svg',
  }),
  new CopyWebpackPlugin({
    patterns: [
      { from: './public/images', to: 'images' }
    ],
  }),
  ],
  devServer: {
    static: path.join(__dirname, 'public'),
    port: 3000,
    hot: true,
    open: true,
  },
};
