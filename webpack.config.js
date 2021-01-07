const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  /* Settings for easier debugging during development */
  mode: "production",
  // devtool: "source-map"
};