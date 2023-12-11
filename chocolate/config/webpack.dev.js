const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("../package.json").dependencies;
const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
const { DefinePlugin } = require("webpack");

const appEnv = dotenv.config({ path: "../.env.staging" });

dotenvExpand.expand(appEnv);

const devConfig = {
  mode: "development",
  devServer: {
    port: 3003,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  output: {
    publicPath: "http://localhost:3003/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "choco",
      filename: "remoteEntry.js",
      // exposes: {
      //   "./iceCreamApp": "./src/bootstrap.js",
      // },
      remotes: {
        container: "container@http://localhost:3000/remoteEntry.js",
      },
      shared: {
        ...deps,
      },
    }),
    new DefinePlugin({
      "process.env": JSON.stringify(appEnv.parsed),
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
