import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const commonConfig: webpack.Configuration = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("public", "index.html"),
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
};

export default commonConfig;
