var gulp = require('gulp');
var clean = require('gulp-clean');

module.exports = function () {
    return gulp.src('public/scripts/*.js', {read: false})
    .pipe(clean());
};
