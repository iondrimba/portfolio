var gulp = require('gulp');
var cssmin = require('gulp-cssmin');

module.exports = function (cb) {
    gulp.src('./public/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./public/css/'));
    cb();
};
