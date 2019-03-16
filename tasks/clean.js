var clean = require('gulp-clean');

module.exports = function (cb) {
  gulp.src('public/scripts/*.js', { read: false })
    .pipe(clean());
  cb();
};
