var gulp = require('gulp');
var uglify = require('gulp-uglify');

module.exports = function (cb) {
  gulp.src('./public/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/scripts'));

  cb();
};
