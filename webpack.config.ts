import * as webpack from "webpack";
import { resolve, join } from "path";

const ROOT: String = resolve(__dirname);
const SRC: String  = join(ROOT, "src");

const config: (webpack.Configuration) = {
  entry: join(SRC, "app"),
  output: {
    filename: "bundle.js",
    path: "bootstrap/"
  },
  resolve: {
    extensions: [".ts", "tsx"]
  },
  module: {
    loaders: [
      { test: /\.tsx?/, loader: "ts-loader"}
    ]
  },
};
