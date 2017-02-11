var gulp = require('gulp');
var eslint = require('gulp-eslint');

module.exports = function () {
  return gulp.src(['./src/scripts/app/**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
};
