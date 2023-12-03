import path from "path";
import webpack from "webpack";
import { merge } from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";
import "webpack-dev-server";
import commonConfig from "./webpack.common";

const devConfig: webpack.Configuration = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("public", "index.html"),
    }),
  ],
};

export default merge(commonConfig, devConfig);
