var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');

module.exports = function() {
    return gulp.src(['./src/styles/**/*.scss','!./src/styles/vendors/*.scss'])
    .pipe(scsslint());
};