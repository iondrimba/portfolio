var gulp = require('gulp');
var browserSync = require('browser-sync').create();

module.exports = function (cb) {
  browserSync.init({ server: './public' });

  gulp.watch('./public/css/*.css').on('change', browserSync.reload);
  gulp.watch('./public/scripts/*.js').on('change', browserSync.reload);
  gulp.watch('./public/*.html').on('change', browserSync.reload);

  cb();
};
