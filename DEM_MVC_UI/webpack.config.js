/*eslint no-undef: "off"*/

const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const checksum = require('checksum');

const debug = process.env.BABEL_ENV==='production' ? false : true;

const entryPoints = {
  vendor: [
    'babel-polyfill',
    'aesthetic',
    'aesthetic-adapter-jss',
    'jss',
    'jss-camel-case',
    'jss-default-unit',
    'jss-expand',
    'jss-extend',
    'jss-nested',
    'jss-props-sort',
    'jss-vendor-prefixer',
    'raven-js',
    'react',
    'react-dom',
    'react-notification-system',
    'react-redux',
    'react-router',
    'react-router-redux',
    'redux',
    'redux-saga'
  ],
  app: ['./src/scripts/index']
};

const rules = [{
    test: /\.jsx$|\.js$/,
    exclude: /(node_modules)/,
    include: path.join(__dirname, './src'),
    use: ['babel-loader']
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: 'url-loader?limit=8192&name=images/[name]-[hash].[ext]'
  },
  {
    test: /\.jsx$|\.js$/,
    use: 'eslint-loader',
    enforce: 'pre',
    include: path.join(__dirname, './src')
  }
];

const eslint = {
  failOnWarning: false,
  failOnError: true
};

const htmlWebpackPluginSettings = {
  hash: !debug,
  filename: 'index.html',
  template: path.join(__dirname, './src/index.html'),
};

const output = {
  filename: 'js/app.js?[hash]'
};

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'js/vendor.js?[hash]'
  }),
  new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.BABEL_ENV)
      }
    }
  ),
  new webpack.LoaderOptionsPlugin({
    debug: debug,
    noInfo: !debug,
    options: {
      context: __dirname,
      output: {path: './'},
      resolveLoader: {
        alias: {
          'images': __dirname + './src/images',
        },
      },
      eslint: eslint
    }
  }),
  new HtmlWebpackPlugin(htmlWebpackPluginSettings)
];

if(debug){
  entryPoints.vendor.push('webpack-hot-middleware/client?reload=true');
  output.path = '/';
  output.publicPath = '/';
  plugins.push(new webpack.HotModuleReplacementPlugin());
} else {
  htmlWebpackPluginSettings.path = path.join(__dirname, '../DEM_MVC/wwwroot');
  htmlWebpackPluginSettings.publicPath = '/wwwroot/';
  htmlWebpackPluginSettings.paceCss = '/wwwroot/css/pace.css?' + checksum('./node_modules/pace-progress/themes/orange/pace-theme-flash.css');
  htmlWebpackPluginSettings.paceJs = '/wwwroot/js/pace.min.js?' + checksum('./node_modules/pace-progress/pace.min.js');
  output.path = path.join(__dirname, '../DEM_MVC/wwwroot');
  output.publicPath = '/wwwroot/';
  plugins.push(
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      output: {comments: false},
      sourceMap: true
    }),
    new CopyWebpackPlugin(
      [
        { from: './node_modules/pace-progress/themes/orange/pace-theme-flash.css', to: 'css/pace.css' },
        { from: './node_modules/pace-progress/pace.min.js', to: 'js/pace.min.js' }
      ],
      { copyUnmodified: false }
    )
  );
}


module.exports = {
  devtool: debug ? 'cheap-module-eval-source-map' : 'source-map',
  entry: entryPoints,
  target: 'web',
  output: output,
  module: {
    rules: rules
  },
  plugins: plugins
};
