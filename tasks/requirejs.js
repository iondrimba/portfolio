var gulp = require('gulp');
var requirejsOptimize = require('gulp-requirejs-optimize');

module.exports = function (cb, requirePaths, uglify) {
  gulp.src('src/scripts/app/main.js')
    .pipe(requirejsOptimize(function () {
      return {
        name: 'src/scripts/app/main',
        out: 'public/scripts/main.js',
        baseUrl: '',
        waitSeconds: 0,
        optimizeAllPluginResources: true,
        noGlobal: true,
        optimize: uglify,
        mainConfigFile: 'src/scripts/app/main.js',
        allowSourceOverwrites: false,
        paths: requirePaths
      };
    }))
    .pipe(gulp.dest('./'));
    cb();
};