var gulp = require('gulp');
var concat = require('gulp-concat');

module.exports = function () {
  gulp.src(['src/scripts/vendors/require.js'])
    .pipe(gulp.dest('./public/scripts/'));
  gulp.src(['manifest.json', './src/templates/index.html', './src/scripts/vendors/sw-setup.js', './src/scripts/vendors/three.min.js'])
    .pipe(gulp.dest('./public/'));
};
