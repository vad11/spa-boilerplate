var gulp = require('gulp');

gulp.task('index-watch', function () {
    gulp.watch('client/index.html', ['index']);
});

gulp.task('index', function () {
    return gulp.src('client/index.html')
        .pipe(gulp.dest('dist'));
});