const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: "./action/index.js",
    output: {
        path: path.resolve(__dirname, "./action/build"),
        publicPath: "./action/build/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.ts$/, use: ['ts-loader']},
            {test: /\.(png|jpg|svg|gif)$/, use: ['file-loader']},
            {test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']},
            {test: /\.(html|tpl)$/, use: "html-loader"},
            {test: /\.vue$/, use: "vue-loader"}
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        },
        extensions: ['.ts', '.js']
    },
    devtool: "inline-source-map",
    plugins: [
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new UglifyJsPlugin()
    ]
};