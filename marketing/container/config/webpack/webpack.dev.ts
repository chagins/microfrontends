import "webpack-dev-server";
import webpack, { container } from "webpack";
import { merge } from "webpack-merge";
import commonConfig from "./webpack.common";
import { dependencies } from "../../package.json";

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
      shared: dependencies,
    }),
  ],
};

export default merge(commonConfig, devConfig);
