 var gulp = require('gulp');
 var concat = require('gulp-concat');
 
 module.exports = function() {
     gulp.src(['node_modules/gulp-requirejs/node_modules/requirejs/require.js', 'source/scripts/vendors/page.js'])
         .pipe(gulp.dest('./public/scripts/'));
 };
