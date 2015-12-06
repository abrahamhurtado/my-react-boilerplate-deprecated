var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: '#source-map',
  entry: [
    'webpack-hot-middleware/client',
    './frontend/main'
  ],
  output: {
    path: path.resolve(__dirname, 'frontend/build'),
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
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  postcss: function () {
    return [autoprefixer];
  },
  module: {
    loaders: [ {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: [ 'babel' ],
      include: [path.resolve('./frontend'), path.resolve('./shared')]
    }
   ]
  }
}
