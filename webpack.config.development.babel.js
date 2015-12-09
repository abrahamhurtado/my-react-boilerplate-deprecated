var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  context: __dirname,
  devtool: '#source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/main'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  postcss: function () {
    return [autoprefixer];
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      include: [path.resolve('./client'), path.resolve('./shared')],
      query: {
        "env": {
          "development": {
            "plugins": [
              ["react-transform", {
                "transforms": [{
                  "transform": "react-transform-hmr",
                  "imports": ["react"],
                  "locals": ["module"]
                }]
              }]
            ]
          }
        }
      }
    }
   ]
  }
}
