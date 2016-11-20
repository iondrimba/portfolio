var gulp = require('gulp');
var watch = require('gulp-watch');
var gulpSequence = require('gulp-sequence');

module.exports = function () {
    gulp.watch('./src/styles/**/*.{sass,scss}', ['scss-lint', 'sass', 'copy','inject:dev']);
    gulp.watch('./src/scripts/**/*.js', ['eslint', 'requirejs:dev', 'copy','inject:dev']);
    gulp.watch('./src/templates/*.html', ['requirejs:dev', 'copy', 'inject:dev']);
};
 