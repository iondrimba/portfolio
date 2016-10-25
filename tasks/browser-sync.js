var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

module.exports = function() {
    browserSync.init({
        //server: './public',
        proxy: "http://portfolio"
    });


    gulp.watch("./public/css/*.css").on('change', browserSync.reload);
    gulp.watch("./public/scripts/*.js").on('change', browserSync.reload);
    gulp.watch("./public/*.html").on('change', browserSync.reload);

};
