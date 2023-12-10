import path from "path";
import "webpack-dev-server";
import webpack, { container } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { merge } from "webpack-merge";
import commonConfig from "./webpack.common";

const devConfig: webpack.Configuration = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: true,
    hot: true,
    client: {
      overlay: false,
    },
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve("public", "index.html"),
    }),
  ],
};

export default merge(commonConfig, devConfig);
