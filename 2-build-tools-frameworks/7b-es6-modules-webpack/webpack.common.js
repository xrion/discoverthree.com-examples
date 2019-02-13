const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const ManifestPlugin = require( 'webpack-manifest-plugin' );
const webpack = require( 'webpack' );

module.exports = {
  entry: {
    main: './src/index.js',
  },
  plugins: [
    new CleanWebpackPlugin( ['dist'] ),
    new HtmlWebpackPlugin( {
      title: 'three.js and WebPack',
      template: path.join( __dirname, 'src/html/index.html' ),
      filename: 'index.html',
      path: path.resolve( __dirname, 'dist' ),
      env: 'production',
    } ),
    new ManifestPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve( __dirname, 'dist' ),
  },
  module: {
    rules: [
      // JavaScript
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/env', {
                targets: {
                  browsers: [ 'last 2 Chrome versions' ],
                },
              }],
            ],
          },
        },
      },
      // Styles
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      // Images
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      // 3D models
      {
        test: /\.(glb|gltf|fbx|obj|mtl|dae)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};
