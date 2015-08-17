var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('stylus-watch', function () {
    gulp.watch('client/**/*.styl', ['stylus']);
});

gulp.task('stylus', function () {
    return gulp.src('client/**/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('dist'));
});