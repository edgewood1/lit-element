var path = require('path');
var webpack = require('webpack');
// entry: the file to which all other things are connected
//output point: 
module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devtool: 'false',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'dist.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules\/(?!(lit-html|@polymer)\/).*/,
        loader: ['babel-loader', "eslint-loader"],
        include: [
          // These packages are distributed as es2015 modules, therefore they need
          // to be transpiled to es5.
          /node_modules(?:\/|\\)lit-element|lit-html/
        ]
        
        
      },
    ],
  },
  plugins: [],
};