var gulp = require('gulp');
var watch = require('gulp-watch');

module.exports = function() {
    gulp.watch('./src/styles/**/*.{sass,scss}', ['sass']);
    gulp.watch('./src/scripts/**/*.js', ['requirejs:dev']);
};
