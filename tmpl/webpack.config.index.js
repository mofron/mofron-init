const path = require('path');
  
module.exports = {
  entry: path.resolve(__dirname, '../js/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist/index/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
              ],
            },
          },
        ],
      },
    ],
  },
  target: ["web", "es5"],
};
