const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', path.resolve(__dirname, '../app/index.js')],
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'client_bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              [
                "@babel/preset-env",
                {
                  "targets": "last 1 Chrome version"
                }
              ],
              "@babel/preset-react"
            ],
            plugins: [
              "@babel/plugin-proposal-function-bind",
              "@babel/plugin-proposal-export-namespace-from",
              ["@babel/plugin-proposal-class-properties", { loose: false }],
              "babel-plugin-cerebral",
              "babel-plugin-styled-components"
            ],
          },
        }
      },
      {
        // scss styles are loaded with modules local scope
        test: /\.scss$/,
        loader:
          'style-loader!css-loader?modules&localIdentName=' +
          '[local]---[hash:base64:5]!sass-loader!postcss-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
  ],
  devtool: 'cheap-module-eval-source-map',
}
