import webpack, { container } from "webpack";
import { merge } from "webpack-merge";
import "webpack-dev-server";
import commonConfig from "./webpack.common";
import { dependencies } from "../../package.json";

const devConfig: webpack.Configuration = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: true,
    hot: true,
    client: {
      overlay: false,
    },
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

export default merge(commonConfig, devConfig);
