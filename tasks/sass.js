var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

module.exports = function (cb) {
  gulp.src('./src/styles/app/main.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./public/css'));

  cb();
};