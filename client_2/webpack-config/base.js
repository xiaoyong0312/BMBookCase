/**
 * @name index.js
 * @desc
 * @author: Created by XuYong of1615 on 2017/11/17
 */

//import HtmlWebpackPlugin from 'html-webpack-plugin';
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //devtool: 'cheap-module-eval-source-map', '/client_1/apps/src/index.js'
    entry: {
        index: './app.js',
    },
    output: {
        path: '../build',
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
