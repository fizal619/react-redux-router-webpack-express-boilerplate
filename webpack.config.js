const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: './src/index.jsx',

  output: {
    filename: './public/bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      { 
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader?presets[]=es2015&presets[]=react' 
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      }
    ]
  },
  plugins: [
   new ExtractTextPlugin('./css/[name].css', {
      allChunks: true
    })
  ] 
}
