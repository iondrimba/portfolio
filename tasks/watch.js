var gulp = require('gulp');
var watch = require('gulp-watch');

module.exports = function () {
    gulp.watch('./src/styles/**/*.{sass,scss}', ['scss-lint', 'sass', 'copy', 'inject']);
    gulp.watch('./src/scripts/**/*.js', ['eslint', 'requirejs:dev', 'copy', 'inject']);
    gulp.watch('./src/templates/*.html', ['scss-lint', 'sass', 'requirejs:dev', 'copy', 'inject']);
};
