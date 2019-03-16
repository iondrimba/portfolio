var concat = require('gulp-concat');

module.exports = function (cb) {
  gulp.src(['src/scripts/vendors/require.js'])
    .pipe(gulp.dest('./public/scripts/'));
  gulp.src(['manifest.json', './src/templates/index.html', './src/scripts/vendors/sw-setup.js'])
    .pipe(gulp.dest('./public/'));

  cb();
};
