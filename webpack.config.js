var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {

    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: ["css-loader","sass-loader"],
                  publicPath:'/dist'

                })
              }
          
        ]
      },
    devServer:{
        contentBase: path.join(__dirname, "dist"),
        compress: true,        
        stats:"errors-only",
        open:true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Giffy Code review',
            minify: {
                collapseWhitespace: true
            },
            hash:true,
            template: './src/index.ejs', // Load a custom template (lodash by default see the FAQ for details)
        }),
        
            new ExtractTextPlugin("app.css"),
        
    ]
}