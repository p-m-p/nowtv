const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const devServer = new WebpackDevServer(webpack(config), {
  hot: true,
  stats: { colors: true },
  lazy: true,
  filename: 'bundle.js'
});

devServer.listen(8080, 'localhost', function (err) {

});
