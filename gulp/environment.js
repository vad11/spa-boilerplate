var gulp = require('gulp');

gulp.task('environment-watch', function () {
    gulp.watch('client/environment.js', ['environment']);
});

gulp.task('environment', function () {
    return gulp.src('client/environment.js')
        .pipe(gulp.dest('dist'));
});