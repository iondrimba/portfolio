var gulp = require('gulp');
var concat = require('gulp-concat');

module.exports = function () {
    gulp.src(['src/scripts/vendors/require.js', 'src/scripts/vendors/page.js'])
        .pipe(gulp.dest('./public/scripts/'));
    gulp.src(['manifest.json'])
        .pipe(gulp.dest('./public/'));
};
