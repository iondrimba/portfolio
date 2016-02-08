var gulp = require('gulp');
var watch = require('gulp-watch');

module.exports = function() {
    gulp.watch('./source/styles/**/*.{sass,scss}', ['sass']);
    gulp.watch('./source/scripts/**/*.js', ['requirejs:dev']);
};
