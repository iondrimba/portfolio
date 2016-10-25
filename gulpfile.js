var gulp = require('gulp');
var requirejsOptimize = require('gulp-requirejs-optimize');
var gulpSequence = require('gulp-sequence')
var path = require('path');
var swPrecache = require('sw-precache');

var requirePaths = {
    noJquery: 'node_modules/nojquery/nojquery',
    TweenLite: 'src/scripts/vendors/TweenLite',
    handlebars: 'node_modules/handlebars/dist/handlebars',
    notifyCss: 'src/scripts/app/core/notifyCss',
    page: 'node_modules/page/page',
    models: 'src/scripts/app/models',
    views: 'src/scripts/app/views',
    vendors: 'src/scripts/vendors',
    core: 'src/scripts/app/core'
};

//scss - lint
gulp.task('scss-lint', require('./tasks/scss-lint.js'));

//sass/scss
gulp.task('sass', require('./tasks/sass.js'));

//copy js files
gulp.task('copy-js', require('./tasks/copy.js'));

//css min
gulp.task('cssmin', require('./tasks/cssmin.js'));

//eslint
gulp.task('eslint', require('./tasks/eslint.js'));

//js min
gulp.task('minifyjs', require('./tasks/minifyjs.js'));

//require dev
gulp.task('requirejs:dev', function () {
    return require('./tasks/requirejs.js')(requirePaths, 'none');
});

//require production
gulp.task('requirejs:prod', function () {
    return require('./tasks/requirejs.js')(requirePaths, 'uglify');
});

//browsersync task
gulp.task('browser-sync', require('./tasks/browser-sync.js'));

//offline support
gulp.task('service-worker', function (callback) {

    var rootDir = 'public';

    swPrecache.write(path.join(rootDir, 'service-worker.js'), {
        staticFileGlobs: [rootDir + '/**/*.{js,css,png,jpg,gif,svg,eot,ttf,woff,woff2}', rootDir + '/*.png'],
        stripPrefix: rootDir
    }, callback);
});

//watch task
gulp.task('watch', require('./tasks/watch.js'));

gulp.task('default', ['eslint', 'scss-lint', 'sass', 'copy-js', 'requirejs:dev', 'service-worker', 'browser-sync', 'watch']);

gulp.task('prod', gulpSequence(['eslint', 'scss-lint', 'sass', 'cssmin', 'requirejs:prod'], 'copy-js', 'minifyjs'));

