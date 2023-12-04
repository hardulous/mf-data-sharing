// Webpack for production mode only

const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("../package.json").dependencies;

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/auth/latest", 
  },
  plugins: [
    // new ModuleFederationPlugin({
    //   name: "Marketing",
    //   filename: "remoteEntry.js",
    //   exposes: {
    //     "./AuthApp": "./src/bootstrap.js",
    //   },
    //   shared: {
    //     ...deps,
    //   },
    // }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
