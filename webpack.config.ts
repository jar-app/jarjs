/// <reference path="typings/index.d.ts" />
import * as webpack from "webpack";
import { resolve, join } from "path";

const ROOT: String = resolve(__dirname);
const SRC: String  = join(ROOT, "src");

const config: (webpack.Configuration) = {
  entry: join(SRC, "app"),
  devtool: 'inline-source-map',
  output: {
    filename: "bundle.js",
    path: "bootstrap/"
  },
  resolve: {
    root: [
      resolve("./")
    ],
    extensions: ["", ".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
};

export default config;
