import path from "path";
import webpack, { container } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { merge } from "webpack-merge";
import commonConfig from "./webpack.common";
import { dependencies } from "../../package.json";

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig: webpack.Configuration = {
  mode: "production",
  output: {
    filename: '[name].[contenthash].js',
    clean: true,
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: dependencies,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve("public", "index.html"),
    }),
  ],
};

export default merge(commonConfig, prodConfig);
