var webpack = require('webpack');
var path = require('path');
var argv = require('yargs').argv;

var plugins = [
    new webpack.ProvidePlugin({
        _: 'lodash',
        $: 'jquery'
    })
];

//if (argv.production) {
//    plugins.push(new webpack.optimize.UglifyJsPlugin({
//        compress: {
//            warnings: false
//        }
//    }));
//}

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

    plugins: plugins,

    resolve: {
        root: path.resolve('./client/')
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