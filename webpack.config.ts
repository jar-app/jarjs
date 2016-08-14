/// <reference path="typings/index.d.ts" />
import * as webpack from "webpack";
import { resolve, join } from "path";

const ROOT: String = resolve(__dirname);
const SRC: String  = join(ROOT, "src");

const config: webpack.Configuration = {
  entry: join(SRC, "app"),
  devtool: "eval-source-map",
  output: {
    filename: "bundle.js",
    path: "bootstrap/"
  },
  resolve: {
    root: [ resolve("./") ],
    extensions: ["", ".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  plugins: [
    require("webpack-fail-plugin")
  ]
};

export default config;
