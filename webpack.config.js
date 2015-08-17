var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './client/bootstrap',

    output: {
        path: __dirname + '/dist',
        filename: 'build.js'
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel?stage=0'
            },
            {
                test: /\.(html|hbs)$/,
                loader: 'html-loader'
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            _: 'lodash',
            $: 'jquery'
        })
    ],

    resolve: {
        root: path.resolve('./')
    },

    devServer: {
        contentBase: 'dist',
        quiet: false,
        filename: 'build.js',
        //publicPath: '/assets/',
        stats: {
            colors: true
        }
    }
};