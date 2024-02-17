import path from "path";
import webpack, { container } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { merge } from "webpack-merge";
import commonConfig from "./webpack.common";
import { dependencies } from "../../package.json";

const marketingDomain = "https://marketing-mfa-marketing.netlify.app";

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
        marketing: `marketing@${marketingDomain}/remoteEntry.js`,
      },
      shared: dependencies,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve("public", "index.html"),
    }),
  ],
};

export default merge(commonConfig, prodConfig);
