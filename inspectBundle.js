// This file is for bundle info analysis.
// use it as `npm run bundleAnalysis` or `yarn bundleAnalysis`
// or directly `node buildAnalysis.js`
process.env.NODE_ENV = "production";
var BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const webpackConfigProd = require("react-scripts/config/webpack.config.prod");
webpackConfigProd.plugins.push(
  new BundleAnalyzerPlugin({
    analyzerMode: "static",
    reportFilename: "report.html"
  })
);
require("react-scripts/scripts/build");