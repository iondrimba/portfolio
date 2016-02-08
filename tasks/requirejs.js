
var gulp = require('gulp');
var requirejsOptimize = require('gulp-requirejs-optimize');

module.exports = function(requirePaths, uglify) {	
    return gulp.src('source/scripts/app/main.js')
        .pipe(requirejsOptimize(function() {
            return {
                name: 'source/scripts/app/main',
                out: 'public/scripts/main.js',
                baseUrl: '',
                waitSeconds: 0,
                optimizeAllPluginResources: true,
                noGlobal: true,
                optimize: uglify,
                mainConfigFile: 'source/scripts/app/main.js',
                allowSourceOverwrites: false,
                paths: requirePaths
            };
        }))
        .pipe(gulp.dest('./'));
};