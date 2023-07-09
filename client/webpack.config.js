const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
      database: './src/js/database.js'
      editor: './src/js/editor.js'
      header: './src/js/header.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    // webpack plugin that generates my html file and injects my bundles
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'JATE',
      }),
      // injects my service worker into my html file
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'sw.js',
      }),
      // created a manifest.json file
      new WebpackPwaManifest({

      
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
