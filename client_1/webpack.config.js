/**
 * @name index.js
 * @desc
 * @author: Created by XuYong of1615 on 2017/11/17
 */

let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //devtool: 'cheap-module-eval-source-map',
    entry: {
        index: './app/index.js'
    },
    output: {
        path: './build',
        filename: 'bundle-[name].js'
    },
    module: {
        loaders: [
            {test: /\.js/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.css$/, loader: "style-loader!css-loader"}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        })
    ]
};