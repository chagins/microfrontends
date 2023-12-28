import webpack, { container } from "webpack";
import { merge } from "webpack-merge";
import commonConfig from "./webpack.common";
import { dependencies } from "../../package.json";

const prodConfig: webpack.Configuration = {
  mode: "production",
  output: {
    filename: '[name].[contenthash].js',
    clean: true,
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      shared: dependencies,
    }),
  ],
};

export default merge(commonConfig, prodConfig);
