module.exports = {
  entry: "./src/App.js",
  output: {
    filename: "dist/bundle.js"
  },
  module: {
    loaders: [
      {
        text: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
};
