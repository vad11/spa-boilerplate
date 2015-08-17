var gulp = require('gulp');
var webpack = require('webpack');
var webpackConfig = require('../webpack.config');
var WebpackDevServer = require('webpack-dev-server');

gulp.task('webpack', function () {
    webpack(webpackConfig);
});

gulp.task('webpack-watch', function (callback) {
    var compiler = webpack(webpackConfig);
    new WebpackDevServer(compiler, webpackConfig.devServer).listen(8080, 'localhost', function () {
        callback();
    });
});
