{
  test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
  loader: 'url-loader',
  options: {
    limit: 10000,
    name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
    // workaround for vuejs-templates webpack issue 1266
    publicPath: process.env.NODE_ENV === 'production' ? '../../' : '/'
  }
}

// Require the webpack-chain module. This module exports a single
// constructor function for creating a configuration API.
const Config = require('webpack-chain');

// Instantiate the configuration with a new API
const config = new Config();

// Make configuration changes using the chain API.
// Every API call tracks a change to the stored configuration.

config
  // Interact with entry points
  .entry('index')
    .add('src/index.js')
    .end()
  // Modify output settings
  .output
    .path('dist')
    .filename('[name].bundle.js');

// Create named rules which can be modified later
config.module
  .rule('lint')
    .test(/\.js$/)
    .pre()
    .include
      .add('src')
      .end()
    // Even create named uses (loaders)
    .use('eslint')
      .loader('eslint-loader')
      .options({
        rules: {
          semi: 'off'
        }
      });

config.module
  .rule('compile')
    .test(/\.js$/)
    .include
      .add('src')
      .add('test')
      .end()
    .use('babel')
      .loader('babel-loader')
      .options({
        presets: [
          ['@babel/preset-env', { modules: false }]
        ]
      });

// Create named plugins too!
config
  .plugin('clean')
    .use(CleanPlugin, [['dist'], { root: '/dir' }]);

// Export the completed configuration object to be consumed by webpack
module.exports = config.toConfig();
