var gulp = require('gulp');

require('./gulp/stylus');
require('./gulp/webpack');
require('./gulp/environment');
require('./gulp/index');

gulp.task('development', ['index-watch', 'stylus-watch', 'environment-watch', 'webpack-watch']);
gulp.task('production', ['index', 'stylus', 'environment', 'webpack']);

gulp.task('default', ['production', 'development']);