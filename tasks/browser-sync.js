var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

module.exports = function() {
    browserSync.init({
        server: './public'
    });


    gulp.watch("./public/css/*.css").on('change', browserSync.reload);
    gulp.watch("./public/scripts/*.js").on('change', browserSync.reload);
    gulp.watch("./public/*.html").on('change', browserSync.reload);

    gulp.watch('./src/styles/**/*.{sass,scss}', ['sass']);
    gulp.watch('./src/templates/*.html', ['sass']);
    gulp.watch('./src/scripts/**/*.js', ['requirejs:dev']);
};
