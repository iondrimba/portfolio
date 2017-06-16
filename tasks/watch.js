var gulp = require('gulp');
var watch = require('gulp-watch');
var gulpSequence = require('gulp-sequence');

module.exports = function () {
  gulp.watch('./src/styles/**/*.{sass,scss}', ['scss-lint', 'sass', 'copy', 'inject', 'browser-sync']);
  gulp.watch('./src/scripts/**/*.js', ['eslint', 'requirejs:dev', 'copy', 'inject', 'browser-sync']);
  gulp.watch('./src/templates/*.html', ['scss-lint', 'sass', 'requirejs:dev', 'copy', 'inject', 'browser-sync']);
};
