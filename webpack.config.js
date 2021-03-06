const path = require(`path`);

const devMode = process.env.NODE_ENV !== `production`; // eslint-disable-line

module.exports = {
  mode: devMode ? `development` : `production`,
  entry: [`./src/index.jsx`],
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`) // eslint-disable-line
  },
  devServer: {
    contentBase: path.join(__dirname, `public`), // eslint-disable-line
    compress: false,
    host: `0.0.0.0`,
    port: 1337,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },
  devtool: `source-map`
};
