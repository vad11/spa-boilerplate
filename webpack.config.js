var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './www/index',

    output: {
        path: __dirname + '/build',
        filename: 'build.js'
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel?stage=0'
            },
            {
                test: /\.json?$/,
                exclude: /(node_modules)/,
                loader: 'json'
            },
            {
                test: /\.(html|hbs)$/,
                exclude: /(node_modules)/,
                loader: 'html'
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                loader: "style!css"
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
        root: path.resolve('./www/')
    },

    devServer: {
        inline: true,
        filename: 'build.js',
        contentBase: 'build',
        quiet: false,
        noInfo: false,
        host: '0.0.0.0',
        stats: {
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false
        }
    }
};