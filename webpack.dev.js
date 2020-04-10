const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      port: 3000,
      compress: true
    },
    entry: './src/index.ts',
    output: {
      filename: 'app.bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: [".ts", ".js", ".json"]
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: "ts-loader",
          exclude: '/node_modules/'
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
          exclude: '/node_modules/'
        },
      ]
    },
    plugins: [new HtmlWebpackPlugin()]
  }
];
