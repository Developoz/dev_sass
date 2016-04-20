var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html and js files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/sass/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/js/**/*.js", browserSync.reload); 
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./app/sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./app/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);