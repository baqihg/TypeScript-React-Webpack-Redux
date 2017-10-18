module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
    publicPath: '/dist/',
    chunkFilename: '[name].[chunkhash:5].chunk.js'
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /src\/containers(\/.*).(tsx|ts)/, loader: "bundle-loader?lazy!ts-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader?modules" },
      { test: /\.(png|jpe?g|gif)/, loader: "file-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  plugins: [
  ],
};
