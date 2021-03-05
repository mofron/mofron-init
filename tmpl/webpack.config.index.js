const webpack =　require("webpack");

module.exports = {
  entry: __dirname + '/../js/index.js',
  output: {
      path: __dirname + '/../dist/index',
      filename: 'dist_index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: __dirname + '../../node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  "targets": {
                    "node": "current"
                  }
                }
              ]
            ]
          }
        }
      },
      {
        test: require.resolve("mofron"),
        loader: "expose-loader",
        options: {
          exposes: {
	    globalName: "_mofron",
            moduleLocalName: "mofron"
          }
        }
      }
    ]
  }
};
