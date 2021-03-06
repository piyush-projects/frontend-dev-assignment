const HtmlPlugin = require("html-webpack-plugin")
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const webpack = require("webpack")

module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: '/'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss"],
    alias: {
      module: path.resolve(__dirname, "./src/module"),
      utility: path.resolve(__dirname, "./src/utility"),
      services: path.resolve(__dirname, "./src/services"),
      images: path.resolve(__dirname, "./src/images"),
      store: path.resolve(__dirname, "./src/store"),
    },
  },
  plugins: [
    new HtmlPlugin({
      filename: "index.html",
      template: "./src/index.html",
      favicon: "./src/favicon.ico"
    }),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  devServer: {
    historyApiFallback: true,
    port: 5000
  }
}