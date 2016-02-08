var gulp = require('gulp');
var requirejsOptimize = require('gulp-requirejs-optimize');

module.exports = function(requirePaths) {
	console.log('requirePaths', requirePaths);
    return gulp.src('source/scripts/app/main.js')
        .pipe(requirejsOptimize(function() {
            return {
                name: 'source/scripts/app/main',
                out: 'public/scripts/main.js',
                baseUrl: '',
                enforceDefine: true,
                optimizeAllPluginResources: false,
                noGlobal: true,
                optimize: 'none',
                mainConfigFile: 'source/scripts/app/main.js',
                allowSourceOverwrites: false,
                paths: requirePaths
            };
        }))
        .pipe(gulp.dest('./'));
};
